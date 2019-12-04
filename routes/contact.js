var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.send('You are in a Contact section.')
})

module.exports = router