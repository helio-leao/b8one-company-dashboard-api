const express = require('express')
const router = express.Router()

const login = require('../mocks/login')

router.post('/', (request, response) => {
    const email = request.body.email
    const pass = request.body.password

    if(login.email === email && login.password === pass) return response.send(true)

    response.status(404).json({ message: 'unable to log with this data' })
})

module.exports = router