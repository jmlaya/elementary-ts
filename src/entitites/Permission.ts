import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from "typeorm";
import {Rol} from "./Rol";

@Entity("permissions")
export class Permission {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    key: string;

    @Column()
    label: string;

    @ManyToMany(type => Rol)
    @JoinTable({name: "permission_roles"})
    roles: Rol[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
