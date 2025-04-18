const Produit = require("../models/produit");

const createProduit = async (req, res) => {
  const { nom, prix, quantite } = req.body;

  if (!nom || prix === undefined || quantite === undefined) {
    return res.status(400).json({ message: "Tous les champs sont requis" });
  }

  try {
    const produit = await Produit.create({ nom, prix, quantite });
    res.status(201).json(produit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProduits = async (req, res) => {
  try {
    const produits = await Produit.findAll();
    res.status(200).json(produits);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findByPk(req.params.id);
    if (!produit)
      return res.status(404).json({ message: "Produit non trouvé" });
    res.status(200).json(produit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduit = async (req, res) => {
  try {
    const produit = await Produit.findByPk(req.params.id);
    if (!produit)
      return res.status(404).json({ message: "Produit non trouvé" });

    await produit.update(req.body);
    res.status(200).json(produit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProduit = async (req, res) => {
  try {
    const produit = await Produit.findByPk(req.params.id);
    if (!produit)
      return res.status(404).json({ message: "Produit non trouvé" });

    await produit.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProduit,
  getProduits,
  getProduitById,
  updateProduit,
  deleteProduit,
};
