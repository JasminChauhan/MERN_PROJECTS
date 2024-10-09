import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaInfoCircle, FaPlus } from 'react-icons/fa'; // Import icons
import Swal from 'sweetalert2'; // Import SweetAlert2

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();  // For navigating to the blog details page

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    fetch('http://localhost:8000/allBlogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/blog/${id}`, {
          method: 'DELETE',
        })
          .then(() => {
            Swal.fire('Deleted!', 'Your blog has been deleted.', 'success'); // Success alert
            fetchBlogs(); // Refresh the blog list after deletion
          })
          .catch(error => console.error('Error deleting blog:', error));
      }
    });
  };

  const handleViewDetails = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Manage Blogs</h1>

      {/* Link to Create Blog */}
      <div className="text-center mb-4">
        <Link to="/create-blog" className="btn btn-success">
          <FaPlus /> Create New Blog
        </Link>
      </div>

      <h2 className="text-center mb-4">Blog List</h2>
      <div className="row">
        {blogs.map(blog => (
          <div key={blog._id} className="col-md-4 mb-3">
            <div className="card shadow-sm border-light">
              <img src={blog.BlogImg} alt={blog.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{blog.name}</h5>
                <p className="card-text"><strong>ID:</strong> {blog.Blogid}</p>
                <p className="card-text">{blog.BlogContent}</p>
                <div className="d-flex justify-content-between">
                  <button onClick={() => navigate(`/edit-blog/${blog._id}`)} className="btn text-primary">
                    <FaEdit /> {/* Edit icon */}
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents event bubbling
                      handleDelete(blog._id); // Call the SweetAlert confirmation
                    }} 
                    className="btn text-danger"
                  >
                    <FaTrash /> {/* Delete icon */}
                  </button>
                  <button onClick={() => handleViewDetails(blog._id)} className="btn text-warning">
                    <FaInfoCircle /> {/* Details icon */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="back-btn">Go Back</Link>
    </div>
  );
}

export default Blogs;
