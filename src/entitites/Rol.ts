import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Permission } from "./Permission";
import { User } from "./User";


@Entity('roles')
export class Rol {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    key: string;

    @Column()
    label: string;

    @ManyToMany(type => Permission, permission => permission.roles)
    permissions: Permission[];

    @OneToMany(type => User, user => user.rol)
    users: User[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
