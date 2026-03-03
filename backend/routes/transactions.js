const express = require("express");
const Transaction = require("../models/Transaction");

const router = express.Router();

// CREATE TRANSACTION
router.post("/", async (req,res)=>{
  try{
    const tx = new Transaction(req.body);
    await tx.save();
    res.json(tx);
  } catch(err){
    res.status(500).json({ message: "Server error" });
  }
});

// GET ALL TRANSACTIONS
router.get("/", async (req,res)=>{
  try{
    const txs = await Transaction.find().sort({ createdAt:-1 });
    res.json(txs);
  } catch(err){
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;