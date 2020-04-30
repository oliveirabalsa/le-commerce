const express = require('express')
const routes = express.Router()

const ProductsController = require('../controllers/ProductsController')
const CategoriesController = require('../controllers/CategoriesController')
const BrandsController = require('../controllers/BrandsController')
const UserController = require('../controllers/UsersController')
const SessionController = require('../controllers/SessionController')

const authMiddleware = require('./middlewares/auth');

routes.post('/login', SessionController.login)
routes.post('/users', UserController.create)

routes.get('/produtos', ProductsController.index);
routes.get('/produtos/:id', ProductsController.indexId);
routes.get('/categorias', CategoriesController.index);
routes.post('/produtos', ProductsController.create);
routes.delete("/brands/:id", BrandsController.delete)
routes.post('/categorias', CategoriesController.create);
routes.post('/brands', BrandsController.create);
routes.get('/brands', BrandsController.index);
// routes.get('/users', UserController.index)
routes.use(authMiddleware);

routes.get('/authenticated', (req, res) => res.send() )
// routes.get('/produtos/estoques', function(){})
// routes.put('/produtos/estoques', function(){})
// routes.get('/produtos/precos', function(){})
// routes.put('/produtos/precos', function(){})
// routes.get('/produtos/pedidos', function(){})




module.exports = routes;