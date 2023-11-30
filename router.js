const express = require("express")
const router = express.Router()
const memberController = require('./controllers/memberController')

/****************************
 *         REST API/       *
 ***************************/

// memberga daxldor routerlar

router.post("/signup", memberController.signup)
router.post("/login", memberController.login)
router.get("/logout", memberController.logout)
router.get("/check-me",memberController.checkMyAuthentication)


module.exports = router