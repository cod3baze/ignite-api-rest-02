import { describe, beforeAll, afterAll, it } from "vitest";
import request from "supertest";
import { app } from "../app";
import {} from "node:test";

describe("Transactions Route", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("Should be able to create a new transaction", async () => {
    await request(app.server)
      .post("/transactions")
      .send({
        title: "New Transaction",
        amount: 5000,
        type: "credit",
      })
      .expect(201);
  });
});
