const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
	{
		productName: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Products", productsSchema);
