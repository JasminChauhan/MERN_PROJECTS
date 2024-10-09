import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Blogs from './Blogs';
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails';
import EditBlog from './EditBlog';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/create-blog" element={<CreateBlog />} /> 
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
