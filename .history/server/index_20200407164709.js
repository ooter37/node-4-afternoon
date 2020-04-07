require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const {SERVER_PORT, SESSION_KEY} = process.env
const {checkUser} = require('./middleware/checkForSessions')
const {read} = require('./controllers/swagController')
const {login, register, signout, getUser} = require('./controllers/authController')
const {add, deleteItem, checkout} = require('./controllers/cartController')
const {search} = require('./controllers/searchController')
app.use(express.json())
app.use(
    session({
        secret: SESSION_KEY,
        resave: false,
        saveUninitialized: true
    })
)
app.use(checkUser)
app.use(express.static(`${__dirname}/../build`));

app.listen(SERVER_PORT, () => {
    console.log(`server listening port ${SERVER_PORT}`)
})


app.get('/api/swag', read)
app.post('/api/login', login)
app.post('/api/register', register)
app.post('/api/signout', signout)
app.get('/api/user', getUser)
app.post('/api/cart/checkout', checkout)
app.post('/api/cart/:id', add)
app.delete('/api/cart/:id', deleteItem)
app.get('/api/search', search)