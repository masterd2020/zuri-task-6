const {Schema, model} = require("mongoose");

const dataSchema = new Schema({
  name: String,
  email: String,
  country: String
});

const Data = new model("Data", dataSchema);

module.exports = Data;