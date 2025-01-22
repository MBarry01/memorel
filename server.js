import express from "express"; // Utilisation de import au lieu de require
import mysql from "mysql2"; // Même chose ici
import cors from "cors";

// Autoriser les requêtes depuis n'importe quelle origine
app.use(cors());

const app = express();
app.use(express.json()); // pour analyser les requêtes JSON

// Connexion à la base de données MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Remplace par ton utilisateur MySQL
  password: "Barry@0298", // Remplace par ton mot de passe
  database: "pinterest_db", // Remplace par le nom de ta base
});

// Vérification de la connexion
db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion :", err.stack);
    return;
  }
  console.log("Connecté à la base de données");
});

// Route pour la page d'accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur la page d'accueil");
});

// Route pour enregistrer des données
app.post("/save-data", (req, res) => {
  const { title, description, imageUrl } = req.body;

  const query =
    "INSERT INTO sauvegarde_patrimoine (title, description, image_url) VALUES (?, ?, ?)";
  db.execute(query, [title, description, imageUrl], (err, results) => {
    if (err) {
      console.error("Erreur SQL :", err);
      return res
        .status(500)
        .json({ message: "Erreur d'enregistrement", error: err });
    }
    res
      .status(200)
      .json({ message: "Données enregistrées avec succès", data: results });
  });
});

// Démarrer le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
