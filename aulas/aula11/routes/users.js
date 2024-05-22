var express = require('express');
const controller = require('../controllers/users')
var router = express.Router();

// sem get para usuarios, apenas POST
router.post('/', controller.criar)

router.post('/login', controller.entrar )

module.exports = router;
