import knexSteup, { Knex } from "knex";
export const config: Knex.Config = {
  client: "sqlite",
  connection: {
    filename: "./db/db.db",
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};
export const knex = knexSteup(config);
