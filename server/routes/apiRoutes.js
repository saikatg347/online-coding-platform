const express = require('express')
const { runCode } = require('../controllers/apiControllers')

const router = express.Router()

router.post('/run', runCode)

module.exports = router
