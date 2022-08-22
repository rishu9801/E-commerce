import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method === "POST") {
    let user = await User.findOne({ email: req.body.email });
    var bytes = CryptoJS.AES.decrypt(user.password, "secret");
    var decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
    if (user) {
      if (user.email == req.body.email && decryptedPass == req.body.password) {
        var token = jwt.sign({ name: user.name, email: user.email }, "secret");
        res.status(200).json({
          success: true,
          token,
        });
      } else {
        res.status(400).json({ error: "Invalid Credentials" });
      }
    } else {
      res.status(400).json({ error: "No user found" });
    }
  } else {
  }
};

export default connectDb(handler);
