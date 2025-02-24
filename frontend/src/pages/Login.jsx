import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api_base_url } from '../helper';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    fetch(api_base_url + "/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, pwd })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "/";
      } else {
        toast.error(data.msg);
      }
    });
  };

  return (
    <>
      <div className="con flex flex-col items-center justify-center min-h-screen">
        <form 
          onSubmit={submitForm} 
          className="w-[25vw] h-auto flex flex-col items-center bg-[#0f0e0e] p-[20px] rounded-lg shadow-xl shadow-black/50"
        >
          {/* Replacing Logo with Gradient Text */}
          <Link to="/" className="w-[230px] text-center text-3xl font-bold 
            bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            KodeX
          </Link>

          <div className="inputBox">
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required />
          </div>

          <div className="inputBox">
            <input onChange={(e) => setPwd(e.target.value)} value={pwd} type="password" placeholder="Password" required />
          </div>

          <p className="text-gray-400 text-sm mt-3 self-start">
            Don't have an account? <Link to="/signUp" className="text-blue-500">Sign Up</Link>
          </p>

          <button className="btnNormal mt-3 bg-blue-500 transition-all hover:bg-blue-600">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
