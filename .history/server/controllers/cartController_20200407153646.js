const swag = require('../models/swag')


module.exports = {
    add: (req,res) => {
        const swagID = swag.findIndex(swag => swag.id == req.params.id)
        if (swagID !== -1) {
            console.log(swagID)
            req.session.user.cart.push(swag[swagID])
            req.session.user.total += swag[swagID].price
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(400)
        }

    },
    delete: '',
    checkout: ''
}