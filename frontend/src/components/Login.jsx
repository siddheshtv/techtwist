import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ipaddress } from "../constants";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    uname: "",
    pwd: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.pwd) {
      alert("Password must not be empty.");
      return;
    }

    const formDataObject = new FormData();
    formDataObject.append("uname", formData.uname);
    formDataObject.append("pwd", formData.pwd);

    try {
      const response = await axios.post(
        `http://${ipaddress}:5002/login`,
        formDataObject,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response data:", response.data);

      if (response.status === 200) {
        console.log("Login successful");
        navigate(`/quiz/${response.data.uname}/${response.data.uid}`);
      } else {
        console.error("Login failed");
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
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="/"
          className="mb-6 font-bold flex justify-center items-center text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100"
        >
          TechTwist
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="uname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="text"
                  name="uname"
                  id="uname"
                  value={formData.uname}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="cooluser384"
                  required=""
                />
              </div>
              <div>
                <label
                  for="pwd"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  name="pwd"
                  id="pwd"
                  value={formData.pwd}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="/signup"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Register Here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
