const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Blogid: { type: Number, required: true }, 
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    BlogImg: { type: String },
    BlogContent : {type : String}
   
});

module.exports = mongoose.model("Blogs",schema);
