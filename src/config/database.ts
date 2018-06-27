export default {
  /*
   * --------------------------------------------------------------------------
   *  Default Database Connection Name
   * --------------------------------------------------------------------------
   *
   * Here you may specify which of the database connections below you wish
   * to use as your default connection for all database work. Of course
   * you may use many connections at once using the Database library.
   *
   */
  connection: {

    type: 'mssql',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 1433,
    database: process.env.DB_DATABASE || 'elementary-ts',
    schema: process.env.DB_SCHEMA || 'dbo',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    options: {
      encrypt: false,
    }

    // type: 'mysql',
    // host: process.env.DB_HOST || '127.0.0.1',
    // port: process.env.DB_PORT || 3306,
    // database: process.env.DB_DATABASE || 'elementary-ts',
    // username: process.env.DB_USERNAME || 'root',
    // password: process.env.DB_PASSWORD || '',

    // type: 'postgres',
    // host: process.env.DB_HOST || '127.0.0.1',
    // port: Number(process.env.DB_PORT || 5432),
    // database: process.env.DB_DATABASE || 'elementary-ts',
    // username: process.env.DB_USERNAME || 'root',
    // password: process.env.DB_PASSWORD || ''
  },

  /*
   * --------------------------------------------------------------------------
   *  Migration Repository Table
   * --------------------------------------------------------------------------
   *
   * This table keeps track of all the migrations that have already run for
   * your application. Using this information, we can determine which of
   * the migrations on disk haven't actually been run in the database.
   *
   */
  migrationsTableName: '__migrations__',
}
