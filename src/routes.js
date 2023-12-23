"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
/* Controllers */
var CreateUserController_1 = require("./controllers/user/CreateUserController");
var AuthUserController_1 = require("./controllers/user/AuthUserController");
var isAuthenticated_1 = require("./middlewares/isAuthenticated");
var CreateProductController_1 = require("./controllers/product/CreateProductController");
var CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
var EditCategoryController_1 = require("./controllers/category/EditCategoryController");
var ListCategoriesController_1 = require("./controllers/category/ListCategoriesController");
var DeleteCategoryController_1 = require("./controllers/category/DeleteCategoryController");
var EditProductController_1 = require("./controllers/product/EditProductController");
var ListProductsController_1 = require("./controllers/product/ListProductsController");
var DeleteProductController_1 = require("./controllers/product/DeleteProductController");
var SaleProductController_1 = require("./controllers/product/SaleProductController");
var router = (0, express_1.Router)();
exports.router = router;
/* USER */
router.post("/user", new CreateUserController_1.CreateUserController().handle);
router.post("/auth", new AuthUserController_1.AuthUserController().handle);
/* CATEGORY */
router.post("/category", isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.put("/category/edit", isAuthenticated_1.isAuthenticated, new EditCategoryController_1.EditCategoryController().handle);
router.get("/categories", isAuthenticated_1.isAuthenticated, new ListCategoriesController_1.ListCategoriesController().handle);
router.delete("/category/delete", isAuthenticated_1.isAuthenticated, new DeleteCategoryController_1.DeleteCategoryController().handle);
/* PRODUCT */
router.post("/product", isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.put("/product/edit", isAuthenticated_1.isAuthenticated, new EditProductController_1.EditProductController().handle);
router.get("/products", isAuthenticated_1.isAuthenticated, new ListProductsController_1.ListProductsController().handle);
router.delete("/product/delete", isAuthenticated_1.isAuthenticated, new DeleteProductController_1.DeleteProductController().handle);
router.put("/product/sale", isAuthenticated_1.isAuthenticated, new SaleProductController_1.SaleProductController().handle);
