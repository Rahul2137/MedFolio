const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isDetail: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.genrateAuthToken = function () {
  const token = jwt.sign(
    { id: this._id, verified: this.isVerified },
    "MysecureKey",
    { expiresIn: "0.25h" }
  );
  return token;
};

UserSchema.methods.ComparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Users =  mongoose.model("Users", UserSchema);
module.exports = Users;
