import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    uname: "",
    pwd: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.pwd) {
      alert("Password must not be empty.");
      return;
    }

    // Create a FormData object and append form fields to it
    const formDataObject = new FormData();
    formDataObject.append("uname", formData.uname);
    formDataObject.append("pwd", formData.pwd);
    formDataObject.append("email", formData.email);

    try {
      // Make the POST request using Axios
      const response = await axios.post(
        "http://44.206.134.88:5002/register",
        formDataObject,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content-type to multipart/form-data
          },
        }
      );

      console.log("Response data:", response.data);

      if (response.status === 201) {
        console.log("Registration successful");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      {/* ... Rest of your JSX code ... */}
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            name="uname"
            id="uname"
            value={formData.uname}
            onChange={handleInputChange}
            // Rest of your input field attributes
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            // Rest of your input field attributes
          />
        </div>
        <div>
          <label
            htmlFor="pwd"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="pwd"
            id="pwd"
            placeholder="••••••••"
            value={formData.pwd}
            onChange={handleInputChange}
            // Rest of your input field attributes
          />
        </div>
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          name="registerButton"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Login here
          </a>
        </p>
      </form>
    </section>
  );
};

export default Signup;
