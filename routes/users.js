var express = require("express");
var router = express.Router();
var UserController = require("../controllers/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/stephen", function (req, res, next) {
  res.send("stephen");
});

router.post("/", UserController.create);

module.exports = router;
