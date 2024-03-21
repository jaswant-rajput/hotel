const Products = require("./../models/products.js");

exports.createProduct = async (req, res) => {
	try {
		const newProduct = await Products.create({
			productName: req.body.productName,
		});

		res.json({
			success: true,
			message: "Product created",
			newProduct,
		});
	} catch (err) {
		console.log(err);
		res.json({
			success: true,
			message: "Server error",
			err,
		});
	}
};
exports.updateProductById = async (req, res) => {
	try {
		const updatedProduct = await Products.findByIdAndUpdate(
			req.body.productId,
			{ $set: { productName: req.body.productName } },
			{ new: true }
		);

		if (!updatedProduct) {
			return res.json({
				success: false,
				message: "No product exists  with given id",
			});
		}

		res.json({
			success: true,
			message: "Product updated",
			updatedProduct,
		});
	} catch (err) {
		console.log(err);
		res.json({
			success: true,
			message: "Server error",
			err,
		});
	}
};
exports.updateProductByName = async (req, res) => {
	try {
		const updatedProduct = await Products.findOneAndUpdate(
			{ productName: req.body.productName },
			{ $set: { productName: req.body.newProductName } },
			{ new: true }
		);

		if (!updatedProduct) {
			return res.json({
				success: false,
				message: "No product exists  with given name",
			});
		}

		res.json({
			success: true,
			message: "Product updated",
			updatedProduct,
		});
	} catch (err) {
		console.log(err);
		res.json({
			success: true,
			message: "Server error",
			err,
		});
	}
};

exports.deleteProductById = async (req, res) => {
	try {
		const deletedProduct = await Products.findByIdAndDelete(
			req.params.productId
		);
		if (!deletedProduct) {
			return res.json({
				success: false,
				message: "No product exists  with given id",
			});
		}

		res.json({
			success: true,
			message: "Product Deleted",
		});
	} catch (err) {
		console.log(err);
		res.json({
			success: true,
			message: "Server error",
			err,
		});
	}
};

exports.deleteProductByName = async (req, res) => {
	try {
		const deletedProduct = await Products.findOneAndDelete({
			productName: req.query.productName,
		});
		if (!deletedProduct) {
			return res.json({
				success: false,
				message: "No product exists with given name",
			});
		}

		res.json({
			success: true,
			message: "Product Deleted",
		});
	} catch (err) {
		console.log(err);
		res.json({
			success: true,
			message: "Server error",
			err,
		});
	}
};
exports.getAllProducts = async (req, res) => {
	try {
		const products = await Products.find();
		res.json({
			success: true,
			length: products.length,
			products,
		});
	} catch (err) {
		console.log(err);
		res.json({
			success: true,
			message: "Server error",
			err,
		});
	}
};
exports.getProductById = async (req, res) => {
	try {
		const product = await Products.findById(req.params.productId);
		if (!product) {
			return res.json({
				success: false,
				message: "No product exists with given id",
			});
		}
		res.json({
			success: true,
			product,
		});
	} catch (err) {
		console.log(err);
		res.json({
			success: true,
			message: "Server error",
			err,
		});
	}
};
