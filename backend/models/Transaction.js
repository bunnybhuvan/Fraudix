const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {}, 
  { strict: false, timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);