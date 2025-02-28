const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/index");
dotenv.config();


// Importer les routes via le fichier routes/index.js
/* const routes = require("./routes"); */

const app = express();
const PORT = process.env.PORT || 5000;

//Middlewares

const corsOptions = {
    origin: ["http://localhost:5173", "https://mockdashboard.vercel.app"], 
    methods: "GET,POST,DELETE,PUT,PATCH",
    allowedHeaders: "Content-Type,Authorization",
    /* credentials: true,  // Ajout pour autoriser les cookies/sessions */
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connection to Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

//Test route
app.get("/", (req, res) => {
  res.send("API running");
});

// Use of Router
app.use('/api', routes);

// Démarrer le serveur

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));