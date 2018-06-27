import { createHash } from "crypto";
import { Config } from "./Config";
import { sign, verify, decode, TokenExpiredError } from "jsonwebtoken";

interface jwtPayload {
    iat: number;
    exp: number;
    nbf: number;
    jti: any;
}

const jwtDefaultOptions = { expiresIn: "30m" };

export function hashSha256(str: string): string {
    return createHash('sha256').update(str, 'utf8').digest('hex');
}

export function verifyHashSha256(str: string, hash: string){
    return hashSha256(str) === hash;
}

export function verifyJwt(token){
    return verify(token, Config.get('app.secret.key'));
}

export function generateJwt(payload){
    const key = Config.get('app.secret.key');
    return sign(payload, key, jwtDefaultOptions);
}

export function refreshJwt(token){
    const { iat, exp, nbf, jti, ...payload } = <jwtPayload> decode(token);
    const expireDate = new Date(exp * 1000);
    const toleranceMiliseconds = 5 * 60 * 1000 // 5 mins;
    const limitDate = expireDate;
    limitDate.setMilliseconds(expireDate.getMilliseconds() + toleranceMiliseconds);

    if (Math.floor(Date.now() / 1000) >= Math.floor(limitDate.getTime() / 1000)){
        throw new TokenExpiredError('Token expired', exp);
    }

    return sign(payload, Config.get('app.secret.key'), jwtDefaultOptions);
}
