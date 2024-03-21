const Orders = require("./../models/orders.js");
const Products = require("./../models/products.js");

exports.placeOrder = async (req, res) => {
	try {
		const product = await Products.findOne({
			productName: req.body.productName,
		});

		if (!product) {
			return res.json({
				success: false,
				message: "Product does not exist",
			});
		}
		// const order = await Orders.create({
		// 	productName: req.body.productName,
		// 	quantity: req.body.quantity,
		// });

		const { productName, quantity } = req.body;

		// Create a new order
		const newOrder = new Orders({ productName, quantity });
		await newOrder.save();

		res.json({
			success: true,
			message: "Order placed",
			newOrder,
		});
	} catch (err) {
		console.log(err);
		res.json({
			success: false,
			message: "Server error",
			err,
		});
	}
};

exports.getAllOrders = async (req, res) => {
	try {
		const orders = await Orders.find();
		res.json({
			success: true,
			length: orders.length,
			orders,
		});
	} catch (err) {
		console.log(err);
		res.json({
			success: false,
			message: "Server error",
			err,
		});
	}
};
exports.getOrderById = async (req, res) => {
	try {
		const order = await Orders.findById(req.params.orderId);
		if (!order) {
			return res.json({
				success: false,
				message: "No order exists with given id",
			});
		}
		res.json({
			success: true,
			order,
		});
	} catch (err) {
		console.log(err);
		res.json({
			success: false,
			message: "Server error",
			err,
		});
	}
};
