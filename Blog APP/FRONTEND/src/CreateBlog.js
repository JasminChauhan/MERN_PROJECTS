import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Ensure this path is correct for your project
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2

function CreateBlog() {
  const [formData, setFormData] = useState({ Blogid: '', name: '', BlogImg: '', BlogContent: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => {
        // Show SweetAlert after successful creation
        Swal.fire({
          title: 'Success!',
          text: 'Your blog has been created.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          // Clear the form
          setFormData({ Blogid: '', name: '', BlogImg: '', BlogContent: '' });
          navigate('/blogs'); // Redirect back to the blog list after submission
        });
      })
      .catch(error => console.error('Error creating blog:', error));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create New Blog</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="Blogid"
              placeholder="Blog ID"
              value={formData.Blogid}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Blog Title"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="BlogImg"
              placeholder="Image URL"
              value={formData.BlogImg}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12 mt-3">
            <textarea
              className="form-control"
              name="BlogContent"
              placeholder="Blog Content"
              value={formData.BlogContent}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Create Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
