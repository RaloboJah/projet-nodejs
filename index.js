const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello depuis le ambalavao roba 🎉" });
});

module.exports = app;
