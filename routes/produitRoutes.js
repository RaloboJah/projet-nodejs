const express = require("express");
const router = express.Router();
const {
  createProduit,
  getProduits,
  getProduitById,
  updateProduit,
  deleteProduit,
} = require("../controllers/produitController");

router.post("/produits", createProduit);
router.get("/produits", getProduits);
router.get("/produits/:id", getProduitById);
router.put("/produits/:id", updateProduit);
router.delete("/produits/:id", deleteProduit);

module.exports = router;
