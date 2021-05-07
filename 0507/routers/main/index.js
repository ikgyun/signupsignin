const express = require('express');
const router = express.Router();
const controller = require('./main.controller')

console.log(controller);

// localhost:3000/대분류/중분류  여기는 중분류 관리
router.use('/',controller.dd);

module.exports = router;