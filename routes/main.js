const { login, dashboard } = require('../controllers/main')
const express = require('express')
const router = express.Router()
const authorizationMiddleware = require('../middleware/auth')

router.route('/dashboard').get(authorizationMiddleware, dashboard)
router.route('/login').post(login)

module.exports = router //exports
