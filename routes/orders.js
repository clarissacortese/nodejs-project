const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

// Get All Orders (from the most recent)

router.get("/", ordersController.order_get_all);

// Get all orders by Product ID

router.get("/product", ordersController.orders_by_product);

// Get All Orders by Date

router.get("/date", ordersController.orders_by_date);

// Get All Orders by User ID

router.get("/user", ordersController.orders_by_user);

// Get Order By ID

router.get("/:orderId", ordersController.order_get_id);

// Create New Order

router.post("/", ordersController.order_post);

// Update Order Information

router.patch("/:orderId", ordersController.order_patch);

// Delete Order

router.delete("/:orderId", ordersController.order_delete);

module.exports = router;
