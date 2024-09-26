const express = require("express");
const router = express.Router();
const Store = require("../models/Store"); // Importing the Store model

// Create a new store
router.post("/", async (req, res) => {
	const store = new Store(req.body);
	try {
		const savedStore = await store.save();
		res.status(201).json(savedStore);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

module.exports = router;
