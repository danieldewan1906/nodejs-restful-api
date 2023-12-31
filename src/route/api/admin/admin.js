const express = require("express")
const response = require("../../../response");
const { genericResponse } = response.genericResponse
const middleware = require("../../../middleware")
const { authentication, checkRole } = middleware.authMiddleware
const multer = middleware.multer;
const controller = require("../../../controller")
const userController = controller.userController;
const categoryController = controller.categoryController;
const supplierController = controller.supplierController;
const productController = controller.productController;
const orderController = controller.orderController;
const cartController = controller.cartController;
const voucherController = controller.voucherController;

const adminRouter = express.Router();
adminRouter.get("/users/all", authentication, checkRole, userController.getAllUsers, genericResponse);
adminRouter.post("/categories", authentication, checkRole, categoryController.create, genericResponse);
adminRouter.put("/categories/:id", authentication, checkRole, categoryController.update, genericResponse);
adminRouter.delete("/categories/:id", authentication, checkRole, categoryController.categoryDelete, genericResponse);
adminRouter.post("/suppliers", authentication, checkRole, supplierController.create, genericResponse);
adminRouter.put("/suppliers/:id", authentication, checkRole, supplierController.update, genericResponse);
adminRouter.delete("/suppliers/:id", authentication, checkRole, supplierController.supplierDelete, genericResponse);
adminRouter.post("/products", authentication, checkRole, multer, productController.create, genericResponse);
adminRouter.put("/products/:id", authentication, checkRole, multer, productController.update, genericResponse);
adminRouter.put("/orders/:id", authentication, checkRole, orderController.done, genericResponse);
adminRouter.get("/orders", authentication, checkRole, orderController.allOrders, genericResponse);
adminRouter.get("/cart", authentication, checkRole, cartController.allCarts, genericResponse);
adminRouter.post("/vouchers", authentication, checkRole, voucherController.createVoucher, genericResponse)

module.exports = () => adminRouter;