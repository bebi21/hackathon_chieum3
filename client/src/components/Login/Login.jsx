import React, { useState } from "react";
import publicAxios from "../config/publicAxios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await publicAxios.post("/api/v1/login", user);
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log(token);
      alert(response.data.message);
      navigate("./todolist");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const handleTakeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div
        className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80")',
        }}
      >
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img
                src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg"
                width={150}
                alt
                srcSet
              />
              <h1 className="mb-2 text-2xl">Instagram</h1>
              <span className="text-gray-300">Enter Login Details</span>
            </div>
            <form action="#">
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="username"
                  placeholder="enter username"
                  onChange={handleTakeValue}
                />
              </div>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="password"
                  placeholder="Enter your password"
                  e
                  onChange={handleTakeValue}
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  onClick={handleLogin}
                  className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
