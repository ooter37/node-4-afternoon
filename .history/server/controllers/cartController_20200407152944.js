const swag = require('../models/swag')


module.exports = {
    add: (req,res) => {
        const swaggered = swag.findIndex(swag => swag.id == req.params.id)
        if (swaggered) {
            req.session.cart.push(swaggered)
            req.session.total += swaggered.price
        }

    },
    delete: '',
    checkout: ''
}