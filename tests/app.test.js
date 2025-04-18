const request = require("supertest");
const app = require("../app"); // assure-toi que c’est le bon chemin

let produitId;

describe("Tests du CRUD de produits", () => {
  it("devrait créer un produit", async () => {
    const response = await request(app).post("/api/produits").send({
      nom: "Produit Test",
      prix: 99.99,
      quantite: 10,
    });

    expect(response.status).toBe(201);
    produitId = response.body.id;
  });

  it("devrait récupérer tous les produits", async () => {
    const response = await request(app).get("/api/produits");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("devrait récupérer un produit par son ID", async () => {
    const response = await request(app).get(`/api/produits/${produitId}`);
    expect(response.status).toBe(200);
    expect(response.body.nom).toBe("Produit Test");
  });

  it("devrait mettre à jour un produit", async () => {
    const response = await request(app)
      .put(`/api/produits/${produitId}`)
      .send({ quantite: 20 });
    expect(response.status).toBe(200);
    expect(response.body.quantite).toBe(20);
  });

  it("devrait supprimer un produit", async () => {
    const response = await request(app).delete(`/api/produits/${produitId}`);
    expect(response.status).toBe(204);
  });
});
