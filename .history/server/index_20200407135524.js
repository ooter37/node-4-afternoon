require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const {SERVER_PORT, SESSION_KEY} = process.env

app.use(express.json())

app.use(
    session({
        session: SESSION_KEY,
        resave: false,
        saveUninitialized: true
    })
)