let UserModel = require("../models/users");

module.exports.create = async (req, res, next) => {
  try {
    let user = new UserModel(req.body);
    let result = await UserModel.create(user);
    console.log(result);
    console.log("create");

    // throw new Error("try catch error");

    res.json({
      success: true,
      message: "User created successfully",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
