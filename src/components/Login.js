import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  return (
    <div>
      {/* <Header /> */}

      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/58ec2cfc-98b3-43c0-b864-a48b1d8f42fd/d64ey9z-7875e270-0dc7-4e55-8c04-2dbf22557272.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4ZWMyY2ZjLTk4YjMtNDNjMC1iODY0LWE0OGIxZDhmNDJmZFwvZDY0ZXk5ei03ODc1ZTI3MC0wZGM3LTRlNTUtOGMwNC0yZGJmMjI1NTcyNzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6fzwXFW8b3cr4JsI_fDBGdZwWb-YtbpnB-TZid-Yc5Y"
        alt="logo"
      />

      <form className="absolute w-[30%]  px-10 bg-black bg-opacity-70 top-1/2 left-1/2 h-[60%] transform -translate-x-1/2 -translate-y-1/2 text-white ">
        <h1 className="font-bold text-3xl p-10 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 w-full mt- 5 bg-gray-600 rounded-lg"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 w-full mt-10 bg-gray-600 rounded-lg"
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="p-4 w-full mt-10  bg-gray-600 rounded-lg"
        />

        <button className="p-4  bg-red-700 w-full mt-10 rounded-lg text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={() => setIsSignInForm(!isSignInForm)}
          className="mx-8 my-8 cursor-pointer"
        >
          {isSignInForm
            ? "New to My Ott platform? Sign Up Now"
            : "Already Registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
