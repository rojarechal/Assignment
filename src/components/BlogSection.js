import React from "react";
import "./BlogSection.css";

const BlogSection = () => {
  const blogs = [
    {
      category: "Design",
      title: "UX review presentations",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: "image1.jpg", // Replace with the image path
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Learn how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: "image2.jpg", // Replace with the image path
    },
    {
      category: "Software engineering",
      title: "Building your API stack",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: "image3.jpg", // Replace with the image path
    },
  ];

  return (
    <div className="blog-section">
      <div className="blog-header">
        <div>
            <h6>Our blog</h6>
          <h2>Lastest blog posts</h2>
          <p>Tools and strategies modern teams need to help their companies grow.</p>
        </div>
        <button className="view-all-button">View all posts</button>
      </div>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <p className="blog-category">{blog.category}</p>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
            <div className="blog-footer">
              <span>{blog.author}</span> · <span>{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
