import { env } from "./constants/envVariables";
import knexSteup, { Knex } from "knex";

export const config: Knex.Config = {
  client: env.KNEX_CLIENT,
  connection: {
    filename: env.DB_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};
export const knex = knexSteup(config);
