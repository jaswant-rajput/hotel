const express = require("express");
const {
	createProduct,
	updateProductById,
	deleteProductById,
	getAllProducts,
	updateProductByName,
	deleteProductByName,
	getProductById,
} = require("./../controllers/productsController");
const router = express.Router();

router.get("/get-all-products", getAllProducts);
router.get("/get-product-by-id/:productId", getProductById);
router.post("/create-product", createProduct);
router.patch("/update-product-by-id", updateProductById);
router.patch("/update-product-by-name", updateProductByName);
router.delete("/delete-product-by-id/:productId", deleteProductById);
router.delete("/delete-product-by-name/", deleteProductByName);

module.exports = router;
