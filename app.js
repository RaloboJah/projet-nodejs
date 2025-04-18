const express = require("express");
const produitRoutes = require("./routes/produitRoutes");

const app = express();

app.use(express.json());
app.use("/api", produitRoutes);

module.exports = app; // Important !
