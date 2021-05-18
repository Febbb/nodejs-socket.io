const express = require("express");
const router = express.Router();
const chatController = require('../controller/chatController');


router.get("/index",chatController.index);



module.exports = router; 