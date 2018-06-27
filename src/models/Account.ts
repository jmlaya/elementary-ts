import {
    Table, Column, Model, HasMany,
    Unique, IsEmail, Length, Default,
    BeforeCreate, BeforeUpdate
} from 'sequelize-typescript';
import * as passwordHash from 'password-hash';
import { validate, IsBoolean, ValidateNested } from "class-validator";

@Table
export class Account extends Model<Account>{

    @Column
    @Length({ min: 3, max: 50 })
    name: string;

    @Column
    @IsEmail
    @Unique
    email: string;

    @Column
    password: string;

    @Column
    @Default(true)
    @IsBoolean()
    isActive: boolean;

    @BeforeCreate
    @BeforeUpdate
    accountBeforeUpdate(instance: Account) {
        if (instance.password && !passwordHash.isHashed(instance.password)) {
            instance.password = passwordHash.generate(instance.password);
        }
    }
}
