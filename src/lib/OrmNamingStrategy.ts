import { NamingStrategyInterface, DefaultNamingStrategy } from "typeorm";
import { snakeCase } from "./StringUtils";

export class OrmNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {

    tableName(targetName: string, userSpecifiedName: string): string {
        return userSpecifiedName ? userSpecifiedName : snakeCase(targetName);
    }

    columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
        return snakeCase(embeddedPrefixes.concat(customName ? customName : propertyName).join("_"));
    }

    columnNameCustomized(customName: string): string {
        return customName;
    }

    relationName(propertyName: string): string {
        return snakeCase(propertyName);
    }

}
