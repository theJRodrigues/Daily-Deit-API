import fastify from "fastify";
import { knex } from "./dbConection";

export const app = fastify();
class main {
  static execute() {
    app.listen({ port: 3000 }, () => {
      console.log("Server rodando");
    });

    app.get("/", async (request, reply) => {
      await knex("customers").delete("*");
      const test2 = await knex("customers").select("*");
      return test2;
    });
  }
}
main.execute();
