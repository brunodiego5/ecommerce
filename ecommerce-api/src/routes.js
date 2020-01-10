const express = require('express');
const routes = express.Router();
const multer = require('multer');
const uploadConfig = require('./config/upload');

const ProductController = require("./controllers/ProductController");
const CategoryController = require("./controllers/CategoryController");

const upload = multer(uploadConfig);

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.show);
routes.post('/categories', upload.single('thumbnail'), CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.destroy);


module.exports = routes;