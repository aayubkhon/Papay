const express = require("express");
const router_bssr = express.Router();
const restaurantController = require("./controllers/restaurantController");

/****************************
 *         BSSR EJS        *
 ***************************/

router_bssr
  .get("/signup", restaurantController.getSignupMyRestaurant)
  .post("/signup", restaurantController.signupProcess);

router_bssr
  .get("/login", restaurantController.getLoginMyRestaurant)
  .post("/login", restaurantController.loginProcess);

router_bssr.get("/logout", restaurantController.logout);

router_bssr.get("/product/menu", restaurantController.getMyRestaurantData);
router_bssr.get("/check-me", restaurantController.checkSessions);

module.exports = router_bssr;
