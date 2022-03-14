const express = require('express')
const router = express.Router()

const user = require('../mocks/user')

router.get('/', (request, response) => response.json(user))

module.exports = router