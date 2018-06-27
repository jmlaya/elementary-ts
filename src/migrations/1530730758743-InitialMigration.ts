import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1530730758743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "dbo"."permissions" ("id" int NOT NULL IDENTITY(1,1), "key" nvarchar(255) NOT NULL, "label" nvarchar(255) NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_185b0c3d886b93d770d3248ee96" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_3d3786791658b698b8f244d9c0f" DEFAULT getdate(), CONSTRAINT "PK_820c4c02282c6e4c10b1d7518bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."roles" ("id" int NOT NULL IDENTITY(1,1), "key" nvarchar(255) NOT NULL, "label" nvarchar(255) NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_32b50e1e20a0a7bb324d5914202" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_524479fa1b8f977348fc3b2d000" DEFAULT getdate(), CONSTRAINT "PK_7906ad5ccb0a34a8abc47a21e3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dbo"."users" ("id" int NOT NULL IDENTITY(1,1), "first_name" nvarchar(255) NOT NULL, "last_name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "is_active" bit NOT NULL CONSTRAINT "DF_6735c91276479b4fdbc1d55508d" DEFAULT 1, "created_at" datetime2 NOT NULL CONSTRAINT "DF_f6adfda27ebe32d07a79e041437" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_5520f954207dc1a06d9286258ed" DEFAULT getdate(), "rol_id" int, CONSTRAINT "UQ_5eaae171e249c59725842e00a80" UNIQUE ("email"), CONSTRAINT "PK_a67763f4f8812ec91f8d10d81fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5eaae171e249c59725842e00a8" ON "dbo"."users"("email") `);
        await queryRunner.query(`CREATE TABLE "dbo"."permission_roles" ("permissions_id" int NOT NULL, "roles_id" int NOT NULL, CONSTRAINT "PK_11c2c7bd7beda7465c3ff42291d" PRIMARY KEY ("permissions_id", "roles_id"))`);
        await queryRunner.query(`ALTER TABLE "dbo"."users" ADD CONSTRAINT "FK_28010a4f90f3d956c1e8c100f32" FOREIGN KEY ("rol_id") REFERENCES "dbo"."roles"("id")`);
        await queryRunner.query(`ALTER TABLE "dbo"."permission_roles" ADD CONSTRAINT "FK_d344b0ade19135de897254ff50a" FOREIGN KEY ("permissions_id") REFERENCES "dbo"."permissions"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "dbo"."permission_roles" ADD CONSTRAINT "FK_b2fc6c73e175c2fe051b18f87ea" FOREIGN KEY ("roles_id") REFERENCES "dbo"."roles"("id") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "dbo"."permission_roles" DROP CONSTRAINT "FK_b2fc6c73e175c2fe051b18f87ea"`);
        await queryRunner.query(`ALTER TABLE "dbo"."permission_roles" DROP CONSTRAINT "FK_d344b0ade19135de897254ff50a"`);
        await queryRunner.query(`ALTER TABLE "dbo"."users" DROP CONSTRAINT "FK_28010a4f90f3d956c1e8c100f32"`);
        await queryRunner.query(`DROP TABLE "dbo"."permission_roles"`);
        await queryRunner.query(`DROP INDEX "IDX_5eaae171e249c59725842e00a8" ON "dbo"."users"`);
        await queryRunner.query(`DROP TABLE "dbo"."users"`);
        await queryRunner.query(`DROP TABLE "dbo"."roles"`);
        await queryRunner.query(`DROP TABLE "dbo"."permissions"`);
    }

}
