const express = require('express')
const router = express.Router()

const bestSellingProducts = require('../mocks/bestSellingProducts')

router.get('/more-sold', (request, response) => response.json(bestSellingProducts))

module.exports = router