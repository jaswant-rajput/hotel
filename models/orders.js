const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
	{
		productName: {
			type: String,
			required: true,
			trim: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Orders", ordersSchema);
