const express = require("express");
const {
	getOrderById,
	getAllOrders,
	placeOrder,
} = require("./../controllers/ordersController");
const router = express.Router();

router.get("/get-all-orders", getAllOrders);
router.get("/get-order-by-id/:orderId", getOrderById);
router.post("/place-order", placeOrder);
module.exports = router;
