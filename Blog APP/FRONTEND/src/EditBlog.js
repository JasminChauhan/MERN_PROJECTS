import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2 for notifications

function EditBlog() {
  const [formData, setFormData] = useState({ Blogid: '', name: '', BlogImg: '', BlogContent: '' });
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the blog details for the provided ID
    fetch(`http://localhost:8000/blog/${id}`)
      .then(response => response.json())
      .then(data => {
        setFormData({ Blogid: data.Blogid, name: data.name, BlogImg: data.BlogImg, BlogContent: data.BlogContent });
      })
      .catch(error => console.error('Error fetching blog:', error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/blog/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => {
        // Show SweetAlert after successful update
        Swal.fire({
          title: 'Success!',
          text: 'Your blog has been updated.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/blogs'); // Redirect back to the blog list after editing
        });
      })
      .catch(error => console.error('Error updating blog:', error));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Edit Blog</h2>
      <form onSubmit={handleSubmit}>
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
              disabled
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
            <textarea // Changed from input to textarea
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
        <button type="submit" className="btn btn-primary mt-3">Update Blog</button>
      </form>
    </div>
  );
}

export default EditBlog;
