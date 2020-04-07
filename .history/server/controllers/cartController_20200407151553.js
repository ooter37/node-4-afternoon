const swag = require('../models/swag')


module.exports = {
    add: (req,res) => {
        console.log(req.session.user)
        res.sendStatus(200)
    },
    delete: '',
    checkout: ''
}