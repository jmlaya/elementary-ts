import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";
import { getConnection, createQueryBuilder } from "typeorm";

export function IsUnique(table: string, field: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "isUnique",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [table, field],
            options: validationOptions,
            validator: {
                async validate(value: any, args: ValidationArguments): Promise<boolean>{
                    const [table, field] = args.constraints;
                    const result = await createQueryBuilder(table, "resource")
                            .select(`COUNT(resource.${field})`, "count")
                            .where(`resource.${field} = :value`, { value })
                            .getRawOne();

                    return result.count === 0;
                }
            }
        });
    };
}
