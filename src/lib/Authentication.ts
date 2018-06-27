import { Action, ActionMetadata } from "routing-controllers";
import { NotTokenError } from "./Errors";
import { verifyJwt } from "./CryptoUtils";

export async function AuthorizationChecker(action: Action, roles: string[]){

    const authHeader = action.request.headers["authorization"];

    if (!authHeader) {
        throw new NotTokenError();
    }

    const token = authHeader.indexOf('Bearer') === 0 ? authHeader.split(' ')[1] : authHeader;

    verifyJwt(token);

    return true;
}
