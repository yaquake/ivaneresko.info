var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.send('You are in an About section.')
})

module.exports = router