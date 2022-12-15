const express = require("express");
const router = express.Router();
const amountsController = require("../controllers/amounts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//amounts Routes - simplified for now

router.post("/createAmount/:id", ensureAuth, amountsController.createAmount);



module.exports = router;