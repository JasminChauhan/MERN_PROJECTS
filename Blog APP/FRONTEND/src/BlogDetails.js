import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlogDetails() {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  const fetchBlogDetails = () => {
    fetch(`http://localhost:8000/blog/${id}`)
      .then(response => response.json())
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching blog details:', error));
  };

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (!blog) {
    return <div className="text-center mt-5">Blog not found</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{blog.name}</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow-sm border-light">
            {blog.BlogImg && (
              <img src={blog.BlogImg} alt={blog.name} className="card-img-top" />
            )}
            <div className="card-body">
              <h5 className="card-title">Blog ID: {blog.Blogid}</h5>
              <p className="card-text">{blog.BlogContent}</p>
              <Link to="/blogs" className="btn btn-primary">Back to Blogs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
