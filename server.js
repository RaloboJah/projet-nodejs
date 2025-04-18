const dotenv = require("dotenv");
const sequelize = require("./config/database");
const app = require("./app");

dotenv.config();

sequelize
  .sync()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
  })
  .catch((error) =>
    console.error("Erreur de connexion à la base de données:", error)
  );
