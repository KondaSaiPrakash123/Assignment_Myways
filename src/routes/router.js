const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add blog
 *  @method GET /add-blog
 */
route.get('/add-blog', services.add_user)

/**
 *  @description for update blog
 *  @method GET /update-blog
 */
route.get('/update-blog', services.update_blog)


// API
route.post('/api/blog', controller.create);
route.get('/api/blog', controller.find);
route.put('/api/blog/:id', controller.update);
route.delete('/api/blog/:id', controller.delete);


module.exports = route