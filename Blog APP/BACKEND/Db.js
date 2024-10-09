require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Blogs = require("./Blogs");
const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString ).then(()=>{
    console.log("Connected With DB");

    // const app = express();
    // app.use(bodyParser.urlencoded());

})
module.exports = "Db.js";



