import { MicroframeworkSettings } from "microframework";
import { getConnectionManager, getConnectionOptions, Connection } from "typeorm";


export async function DbConnectionLoader(settings: MicroframeworkSettings) {
    /*
    |--------------------------------------------------------------------------
    | Typeorm connection
    |--------------------------------------------------------------------------
    |
    | Establishing database connection and load entities
    |
    */
    const connectionOptionss = await getConnectionOptions();
    const connectionManager = getConnectionManager();
    const connection = connectionManager.create({ ...connectionOptionss });
    await connection.connect();
}
