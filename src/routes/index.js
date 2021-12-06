const router = require('express').Router();

const language = require('./../language/infraestructure/index');

router.use('/language', language)

module.exports = router;
