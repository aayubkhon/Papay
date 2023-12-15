const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController");
const restaurantController = require("./controllers/restaurantController");
const orderController = require("./controllers/orderController");
const communityControler = require("./controllers/communityControler");
const followController = require("./controllers/followControler");
const uploader_community = require("./utils/upload-multer")("community");
const uploader_member = require("./utils/upload-multer")("members");
/****************************
 *         REST API/       *
 ***************************/

// Member related routers

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get(
  "/member/:id",
  memberController.retrieveAuthMember,
  memberController.getChosenMember
);

// Product related routers

router.post(
  "/products",
  memberController.retrieveAuthMember,
  productController.getAllProducts
);

router.get(
  "/products/:id",
  memberController.retrieveAuthMember,
  productController.getChosenProduct
);

// Restaurants related routers

router.get(
  "/restaurants",
  memberController.retrieveAuthMember,
  restaurantController.getRestaurants
);

router.get(
  "/restaurants/:id",
  memberController.retrieveAuthMember,
  restaurantController.getChosenRestaurant
);

// Order related routers
router.post(
  "/orders/create",
  memberController.retrieveAuthMember,
  orderController.createOrder
);

router.get(
  "/orders",
  memberController.retrieveAuthMember,
  orderController.getMyOrders
);

router.post(
  "/orders/edit",
  memberController.retrieveAuthMember,
  orderController.editChosenOrder
);

// Community related routers

router.post(
  "/community/image",
  uploader_community.single("community_image"),
  communityControler.imageInsertion
);

router.post(
  "/community/create",
  memberController.retrieveAuthMember,
  communityControler.createArticle
);

router.get(
  "/community/articles",
  memberController.retrieveAuthMember,
  communityControler.getMemberArticles
);

router.get(
  "/community/target",
  memberController.retrieveAuthMember,
  communityControler.getArticles
);

router.get(
  "/community/single-article/:art_id",
  memberController.retrieveAuthMember,
  communityControler.getChosenArticle
);

// Following related routers

router.post(
  "/follow/subscribe",
  memberController.retrieveAuthMember,
  followController.subscribe
);

router.post(
  "/follow/unsubscribe",
  memberController.retrieveAuthMember,
  followController.unsubscribe
);

router.get("/follow/followings", followController.getMemberFollowings);
module.exports = router;
