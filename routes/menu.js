const express = require('express')
const router = express.Router()

const menu = require('../mocks/menu')

router.get('/', (request, response) => response.json(menu))

module.exports = router