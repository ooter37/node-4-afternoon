const {users} = require('../models/users')

let id = 1

module.exports = {
    login: (req,res) => {
        const {username, password} = req.body

        const user = users.find(user => user.username === username && user.password === password)
        if (user) {
            username = req.session.user.username
            res.status(200).send(req.session.user)
        }
    },
    register: (req,res) => {
        
    },
    signout: (req,res) => {
        
    },
    getUser: (req,res) => {
        
    }
}