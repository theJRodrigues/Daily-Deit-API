import fastify from "fastify";
import {knex} from "./infra/dbConection";
export const app = fastify();

app.get("/", async (request, reply) => {
  const test = await knex('sqlite_schema').select('*');
  return test;
})

app.listen({ port: 3000 }, () => {
  console.log("Server is running");
});
