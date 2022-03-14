const express = require('express')
const router = express.Router()

const sales = require('../mocks/sales')

router.get('/', (request, response) => response.json(sales))

module.exports = router