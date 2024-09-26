const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
	customerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Customer",
		required: true,
	},
	products: [
		{
			productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
			quantity: { type: Number, required: true },
		},
	],
	totalAmount: { type: Number, required: true },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", transactionSchema);
