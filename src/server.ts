import fastify from "fastify";
export const app = fastify();

app.listen({ port: 3000 }, () => {
  console.log("Server is running");
});
