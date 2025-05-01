import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  DB_URL: z.string(),
  KNEX_CLIENT: z.string(),
});

const _env = envSchema.safeParse(process.env);
if (!_env.success) {
  const errors = _env.error.format();
  console.group("Environment errors");
  console.error("Environment not found");
  console.error("Errors: \n" + JSON.stringify(errors) + "\n");
  console.groupEnd();
  throw new Error("Environment variables not found ");
}

export const env = _env.data;
