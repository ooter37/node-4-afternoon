require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const {SERVER_PORT, SESSION_KEY} = process.env
const {checkUser} = require('./middleware/checkForSessions')
const {read} = require('./controllers/swagController')
const {login, register, signout, getUser} = require('./controllers/authController')

app.use(express.json())
app.use(
    session({
        secret: SESSION_KEY,
        resave: false,
        saveUninitialized: true
    })
)
app.use(checkUser)

app.listen(SERVER_PORT, () => {
    console.log(`server listening port ${SERVER_PORT}`)
})


app.get('/api/swag', read)
