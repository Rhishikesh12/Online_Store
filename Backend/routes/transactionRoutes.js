const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// Create a new transaction
router.post("/", async (req, res) => {
	const transaction = new Transaction(req.body);
	try {
		const savedTransaction = await transaction.save();
		res.status(201).json(savedTransaction);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// Get all transactions
router.get("/", async (req, res) => {
	try {
		const transactions = await Transaction.find();
		res.json(transactions);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
