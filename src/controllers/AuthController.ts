import { getRepository, Repository } from "typeorm";
import { Controller, Param, Body, Get, Post, Put, Delete, JsonController, Patch, BodyParam, OnUndefined, Authorized } from "routing-controllers";
import { EntityFromParam, EntityFromBody } from 'typeorm-routing-controllers-extensions';
import { User } from "../entitites/User";
import { UserNotFoundError, InvalidCredentialError } from "../lib/Errors";
import { sign } from "jsonwebtoken";
import { Config } from "../lib/Config";
import { generateJwt, refreshJwt } from "../lib/CryptoUtils";

@JsonController("/auth")
export class UserController {

    userRepository: Repository<User>;

    constructor() {
        this.userRepository = getRepository(User);
    }


    @Post("/")
    @OnUndefined(UserNotFoundError)
    async auth(@BodyParam("email") email: string, @BodyParam("password") password: string) {
        const user = await this.userRepository.findOne({
            where: { email }
        });

        if(!user && !user.verifyPassword(password)){
            throw new InvalidCredentialError();
        }

        return { token: generateJwt({ sub: user.id }) };
    }

    @Post("/refresh")
    @OnUndefined(UserNotFoundError)
    async refresh(@BodyParam("token") token: string) {
        return { token: refreshJwt(token) };
    }

}
