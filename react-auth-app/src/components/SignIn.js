import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Authentication failed", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-light-green-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-light-green-500"
        />
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-light-green-500"
        >
          Sign In
        </button>
        <h2 className=" font-bold text-center text-gray-800 mb-6">Don't have an account</h2>
        <Link to="/signup">
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-light-green-500"
        > 
          Sign up
        </button>
        </Link>
      </form>
    </div>
  </div>
);
};

export default SignIn;
