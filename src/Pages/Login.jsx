// Importing necessary modules and components
import React, { useState } from "react";
import axios from "axios";
import "../index"; // Importing index.css or index.js file

// Login component handling user login form
const Login = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    YourName: "",
    email: "",
    password: "",
    mobile: "",
  });

  // Function to update form data based on user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to post form data to an API endpoint
  const postData = async () => {
    try {
      const { YourName, email, password, mobile } = formData;

      // Sending form data to the specified API endpoint using axios
      await axios.post(
        "https://newsappreactjs-default-rtdb.firebaseio.com/newsappreactjs.json",
        {
          YourName,
          email,
          password,
          mobile,
        }
      );

      // Alert on successful form submission and resetting form data
      alert("Form submitted successfully!");
      setFormData({
        YourName: "",
        email: "",
        password: "",
        mobile: "",
      });
    } catch (error) {
      // Handling errors in form submission
      console.error("Error:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.YourName === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.mobile === ""
    ) {
      // Alert if any field is empty
      alert("Please fill in all fields.");
      return;
    }

    // Process form data (e.g., send it to an API)
    console.log("Form submitted:", formData);
    postData();
  };

  // Rendering the login form
  return (
    <div className="container-LoginPage100">
      <div>
        {/* Header for login page */}
        <h2 className="login-heading">Login Page</h2>
        {/* Form for user login */}
        <form onSubmit={handleSubmit} method="POST">
          {/* Input fields for login form */}
          {/* Your Name */}
          <div>
            <span>Your Name</span>
            <input
              type="text"
              name="YourName"
              placeholder="Enter your name"
              value={formData.YourName}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <span>Email Address</span>
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          {/* Password */}
          <div>
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          {/* Mobile No. */}
          <div>
            <span>Mobile No.</span>
            <input
              type="tel"
              name="mobile"
              placeholder="+91 0000000000"
              value={formData.mobile}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          {/* Submit button */}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Exporting the Login component as the default export
export default Login;
