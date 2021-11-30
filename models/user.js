const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchame = Schema({
  name: String,
  lastname: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: String,
  active: Boolean,
  avatar: String
});

module.exports = mongoose.model("User", UserSchame);







// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const UserSchema = Schema({
//     name: String,
//     lastname: String,
//     email: {
//         type: String,
//         unique: true
//     },
//     password: String,
//     role: String,
//     active: Boolean
// });

// module.exports = mongoose.model("User", UserSchema);