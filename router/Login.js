const express = require('express')

const router = express.Router()

const login_router = require('../router_handle/login')

router.post('/wxlogin',login_router.login)

module.exports = router