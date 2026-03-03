require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const txRoutes = require("./routes/transactions");

const app = express();          // ✅ FIRST create app

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", txRoutes);   // ✅ AFTER app is created

app.listen(5000, () => {
  console.log("Server running on port 5000");
});