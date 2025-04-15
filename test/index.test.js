// test/index.test.js
const request = require("supertest");
const app = require("../index"); // Chemin vers le fichier index.js

describe("Test de l'API GET /api/hello", () => {
  it("doit retourner un message", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hello depuis le backend 🎉");
  });
});
