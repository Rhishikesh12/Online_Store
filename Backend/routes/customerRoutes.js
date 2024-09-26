const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// Create a new customer
router.post("/", async (req, res) => {
	const customer = new Customer(req.body);
	try {
		const savedCustomer = await customer.save();
		res.status(201).json(savedCustomer);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// Get all customers
router.get("/", async (req, res) => {
	try {
		const customers = await Customer.find();
		res.json(customers);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
