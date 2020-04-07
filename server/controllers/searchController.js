const swag = require('../models/swag')

module.exports = {
    search: (req,res,next) => {
        const {category} = req.query
        console.log(category)
        if (!category) {
            res.status(200).send(swag)
        } else {
            const filtered = swag.filter(elem => elem.category === category)
            res.status(200).send(filtered)
        }
    }
}