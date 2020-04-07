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
        console.log(id)
        console.log(req.session.user.cart)
        const cartId = req.session.user.cart.findIndex(elem => elem.id == id)
        console.log(cartId)
        const swagId = swag.findIndex(swag => swag.id == id)
        console.log(swagId)
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