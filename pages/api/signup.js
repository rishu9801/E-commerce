import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email } = req.body;
    let user = new User({
      name: name,
      email: email,
      password: CryptoJS.AES.encrypt(req.body.password, "secret").toString(),
    });
    await user.save();
    res.status(200).json({ success: "You are successfully signed in." });
  } else {
    res.status(400).json({ error: "Something happened Please try again." });
  }
};

export default connectDb(handler);
