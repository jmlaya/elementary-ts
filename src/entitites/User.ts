import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, Index, BeforeInsert, BeforeUpdate } from "typeorm";
import { Rol } from "./Rol";
import { IsEmail, IsNotEmpty, IsAlpha, MinLength } from "class-validator";
import { createHash } from "crypto";
import { verifyHashSha256 } from "../lib/CryptoUtils";
import { IsUnique } from "../lib/Decorators";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsAlpha()
    @MinLength(3)
    firstName: string;

    @Column()
    @IsAlpha()
    @MinLength(3)
    lastName: string;

    @Column({unique: true})
    @Index()
    @IsEmail()
    @IsUnique("users", "email", { message: "This email is already registered" })
    email: string

    @Column()
    @IsNotEmpty()
    password: string;

    @Column({default: true})
    isActive: boolean;

    @ManyToOne(type => Rol, rol => rol.users)
    rol: Rol;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    public verifyPassword(password: string){
        return verifyHashSha256(password, this.password)
    }

}
