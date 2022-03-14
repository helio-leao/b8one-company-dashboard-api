const express = require('express')
const router = express.Router()

const resellersRanking = require('../mocks/resellersRanking')

router.get('/ranking', (request, response) => response.json(resellersRanking))

module.exports = router