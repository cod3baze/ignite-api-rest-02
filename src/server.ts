import fastify from "fastify";
import crypto from "node:crypto";

import { knex } from "./database";

const app = fastify();

app.get("/hello", async () => {
  const transactions = await knex("transactions").select("*");

  return transactions;
});

app
  .listen({
    port: 3333,
  })
  .then((port) => console.log("Http server running on port " + port));
