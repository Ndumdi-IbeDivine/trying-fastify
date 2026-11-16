const { getAllItems, getItemsById, updateItem, deleteItem } = require('../controllers/items')

// Item schema for options
const item = {
    type: 'object',
    properties: {
        id: { type: 'number'},
        name: { type: 'string'},
    }
};

// Options
const getAllItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: item,
            }
        }
    },
    handler: getAllItems
}


function itemRoutes(fastify, options, done) {
    // all routes

    // To get all items
    fastify.get('/items', getAllItemsOpts);

    done();
}

module.exports = itemRoutes;