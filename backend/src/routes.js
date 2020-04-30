const express = require('express')
const routes = express.Router()

const ProductsController = require('../controllers/ProductsController')
const CategoriesController = require('../controllers/CategoriesController')
const BrandsController = require('../controllers/BrandsController')

routes.get('/produtos', ProductsController.index);
routes.post('/produtos', ProductsController.create);
routes.get('/produtos/:id', ProductsController.indexId);
routes.post('/categorias', CategoriesController.create);
routes.get('/categorias', CategoriesController.index);
routes.post('/brands', BrandsController.create);
routes.get('/brands', BrandsController.index);
routes.delete("/brands/:id", BrandsController.delete)
// routes.put('/produtos/:id', function(){})
// routes.delete('/produtos/:id', function(){})
// routes.get('/produtos/estoques', function(){})
// routes.put('/produtos/estoques', function(){})
// routes.get('/produtos/precos', function(){})
// routes.put('/produtos/precos', function(){})
// routes.get('/produtos/pedidos', function(){})




module.exports = routes;