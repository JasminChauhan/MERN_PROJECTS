require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const Db = require("./Db");
const Blogs = require("./Blogs"); // Ensure this is your Mongoose model
const app = express();


app.use(cors())
app.use(express.json()); // Automatically parses JSON


// Get all blogs
app.get('/allBlogs', async (req, res) => {
    try {
        const blogs = await Blogs.find();
        res.status(200).send(blogs);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Get a blog by ID
app.get('/blog/:id', async (req, res) => {
    try {
        const blog = await Blogs.findById(req.params.id);
        if (!blog) {
            return res.status(404).send({ message: "Blog not found" });
        }
        res.status(200).send(blog);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Create a new blog
app.post('/blog', async (req, res) => {
    try {
        console.log(req.body); // Log the request body
        const { Blogid, name, createdAt, BlogImg, BlogContent } = req.body;
        const newBlog = new Blogs({ Blogid, name, createdAt, BlogImg, BlogContent });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        console.error("Error saving blog:", error);
        res.status(500).json({ message: 'Error saving blog', error });
    }
});

// Delete a blog by ID
app.delete('/blog/:id', async (req, res) => {
    try {
        const result = await Blogs.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Blog not found" });
        }
        res.status(204).send(); // 204 No Content
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Update a blog by id
app.put('/blog/:id', async (req, res) => {
    try {
      const { name, createdAt, BlogImg, BlogContent } = req.body;
  
      const updatedBlog = await Blogs.findById(req.params.id); // Use findById instead of Blogid
  
      if (!updatedBlog) {
        return res.status(404).send({ message: "Blog not found" });
      }
  
      // Update fields
      updatedBlog.name = name || updatedBlog.name;
      updatedBlog.createdAt = createdAt || updatedBlog.createdAt;
      updatedBlog.BlogImg = BlogImg || updatedBlog.BlogImg;
      updatedBlog.BlogContent = BlogContent || updatedBlog.BlogContent;
  
      // Save the updated blog
      await updatedBlog.save();
  
      res.status(200).send(updatedBlog); // 200 OK
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

  const PORT = process.env.PORT || 8000; // Default to 8000 if not set
    app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});





