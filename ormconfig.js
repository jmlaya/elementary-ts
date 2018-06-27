'use strict'

const { OrmNamingStrategy } = require('./dist/lib/OrmNamingStrategy')
const { Config } = require('./dist/lib/Config')

const databaseConfig = Config.get('database')
const connectionOptions = {
  ...databaseConfig.connection,
  migrationsTableName: databaseConfig.migrationsTableName,
  entities: ['dist/entitites/*.js'],
  migrations: ['dist/migrations/*.js'],
  subscribers: ['dist/subscribers/*.js'],
  namingStrategy: new OrmNamingStrategy(),
  cli: {
    migrationsDir: 'src/migrations'
  }
}

module.exports = connectionOptions
