import { getRepository, Repository } from "typeorm";
import { Controller, Param, Body, Get, Post, Put, Delete, JsonController, Patch, BodyParam, OnUndefined, Authorized } from "routing-controllers";
import { EntityFromParam, EntityFromBody } from 'typeorm-routing-controllers-extensions';
import { User } from "../entitites/User";
import { UserNotFoundError } from "../lib/Errors";

@JsonController("/users")
export class UserController {

    userRepository: Repository<User>;

    constructor(){
        this.userRepository = getRepository(User);
    }

    @Get("/")
    getAll() {
        return this.userRepository.find({
            order: {id: 'DESC'}
        });
    }

    @Get("/:id")
    @Authorized()
    getOne(@EntityFromParam("id") user: User) {
        return user;
    }

    @Post("/")
    save(@EntityFromBody() user: User) {
        return this.userRepository.save(user);
    }

    @Patch("/:id")
    async patch(@Body() partialUser: User, @Param("id") id: number) {
        const user = await this.userRepository.preload({id, ...partialUser});
        return await this.userRepository.save(user);
    }

    @Delete("/:id")
    async remove(@Param("id") id: number) {
        return await this.userRepository.delete(id);
    }
}
