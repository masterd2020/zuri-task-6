const express = require("express");
const {createData, deleteData, getData, updateData} = require("../controllers/dataController");

const router = express.Router();

router
  .route("/")
  .post(createData)
  .get(getData);
  
router
  .route("/:id")
  .patch(updateData)
  .delete(deleteData);
  
  
module.exports = router;