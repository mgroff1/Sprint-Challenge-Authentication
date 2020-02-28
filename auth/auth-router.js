const router = require("express").Router();
console.log("auth-router");

const {
  authenticate,
  verifyNewUser
} = require("./authenticate-middleware");

const {
  createUser,
  userLogin,
  getAllUsers,
  logout
} = require("../controllers/api-controller");

// registration
router.route("/register").post(createUser);

// login
router.route("/login").post(authenticate, userLogin);

//logout
router.route("/logout").delete(logout);

// userInfo
router.route("/users").get(getAllUsers);

module.exports = router;
