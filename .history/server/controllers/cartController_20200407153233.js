const swag = require('../models/swag')


module.exports = {
    add: (req,res) => {
        const swaggered = swag.findIndex(swag => swag.id == req.params.id)
        if (swaggered) {
            console.log(swaggered)
            req.session.user.cart.push(swaggered)
            req.session.user.total += swaggered.price
            res.status(200).send(req.session.user)
        }

    },
    delete: '',
    checkout: ''
}