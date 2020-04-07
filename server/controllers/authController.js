const users = require('../models/users')

let id = 1

module.exports = {
    login: (req,res) => {
        const {username, password} = req.body
        const user = users.find(user => user.username === username && user.password === password)
        if (user) {
            req.session.user.username = user.username
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(500)
        }
    },
    register: (req,res) => {
        const {username, password} = req.body
        users.push({
            id: id,
            username: username,
            password: password
        })
        id++
        req.session.user.username = username
        res.status(200).send(req.session.user)
    },
    signout: (req,res) => {
        req.session.destroy()
        res.status(200).send(req.session)
    },
    getUser: (req,res) => {
        res.status(200).send(req.session.user)
    }
}