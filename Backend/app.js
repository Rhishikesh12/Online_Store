const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import routes
const storeRoutes = require("./routes/storeRoutes");
const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

// Use routes
app.use("/", () => {
	app.get("Hello");
});
app.use("/api/stores", storeRoutes);
app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/transactions", transactionRoutes);

// Connect to MongoDB
mongoose
	.connect(
		"mongodb+srv://rhishikeshc:Rhishi123@cluster0.v05ettp.mongodb.net/online_store?retryWrites=true&w=majority&appName=Cluster0"
	)
	.then(() => console.log("MongoDB connected..."))
	.catch((err) => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
