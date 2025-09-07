//importaciones
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes.js");
const {connectDB} = require("./config/database.js")
require("dotenv").config();

//inicializar app
const app = express();

//configurar middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/api/v1", routes);

app.get("/", (req, res) => res.send("Server is running"));

connectDB();

if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
