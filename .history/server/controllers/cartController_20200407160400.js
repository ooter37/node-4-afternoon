const swag = require('../models/swag')


module.exports = {
    add: (req,res) => {

        const swagId = swag.findIndex(swag => swag.id == req.params.id)
        if (swagId !== -1) {
            req.session.user.cart.push(swag[swagId])
            req.session.user.total += swag[swagId].price
            res.status(200).send(req.session.user)
        } else {
            res.status(200).send(req.session.user)
        }
    },
    deleteItem: (req,res) => {
        const {id} = req.params
        const cartId = req.session.user.cart.findIndex(elem => elem.id == id)
        const swagId = swag.findIndex(swag => swag.id == id)
        if (cartId !== -1) {
            req.session.user.cart.splice(cartId, 1)
            req.session.user.cart -= swag[swagId].price
            res.status(200).send(req.session.user)
        } else {
            res.status(200).send(req.session.user)
        }
    },
    checkout: (req,res) => {
        req.session.user.cart = []
        req.session.user.total = 0
        res.status(200).send(req.session.user)
    }
}