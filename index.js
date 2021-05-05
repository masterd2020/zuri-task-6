const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const dataRoute = require("./routes/dataRoute");

dotenv.config();

const app = express();

// App Configurations
app.enable('trust proxy');

app.use(express.json({limit: "10kb"}));

app.use(express.urlencoded({ extended: true, limit: '10kb' }));


// DATABASE CONNECTION
const connectionString = process.env.DB_STRING;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(con => {
  console.log("DB Connection successful");
  //console.log(con.connections);
}).catch(err => {
  console.log('Error 💥', err);
});


// Mounting routes
app.use("/data", dataRoute);

// 404 Not found Error
app.all("*", (req,  res) => {
  return res.status(404).json({
    message: `${req.originalUrl} is not part of the routes`
  });
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));