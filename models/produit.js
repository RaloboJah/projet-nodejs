const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Produit = sequelize.define("Produit", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prix: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantite: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Produit;
