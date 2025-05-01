import "dotenv/config";
import z from "zod";
const envSchema = z.object({
  DB_URL: z.string(),
  KNEX_CLIENT: z.string(),
});
export const env = envSchema.parse(process.env);
