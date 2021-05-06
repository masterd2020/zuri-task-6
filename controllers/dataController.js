const Data = require("../models/dataModel");

exports.createData = async(req, res) => {
  try {
    const data = await Data.create(req.body);
    
    res.status(201).json({
      message: "success",
      data
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.getData = async(req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    
    res.status(200).json({
      message: "success",
      data
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.updateData = async(req, res) => {
  try {
    const id = req.params.id;
    const data = await Data.findByIdAndUpdate(id, req.body, {
      new: true,
    runValidators: true
    });
    
    res.status(200).json({
      message: "success",
      data
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

exports.deleteData = async(req, res) => {
  try {
    const id = req.params.id;
    const data = await Data.findByIdAndDelete(id);
    
    res.status(204).json({
      message: "success",
      data
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};