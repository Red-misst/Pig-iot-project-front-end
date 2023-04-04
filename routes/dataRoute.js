const express = require("express");
const router = express.Router();

const { getData } = require("../controller/dataCtrl");

router.get("/historical-data", getData)



module.exports = router;