import React, { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGIN_BG } from "../utils/constant";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleButtonClick = () => {
    const message = checkValidateData(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMsg(message);
    if (message) return;
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          console.log(userCredential);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <img src={LOGIN_BG} alt="logo" className="w-full h-full opacity-85" />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-[30%]  px-10 bg-black bg-opacity-70 top-1/2 left-1/2 h-[60%] transform -translate-x-1/2 -translate-y-1/2 text-white "
      >
        <h1 className="font-bold text-3xl p-10 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 w-full mt- 5 bg-gray-600 rounded-lg"
          ref={email}
        />
        {/* {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 w-full mt-10 bg-gray-600 rounded-lg"
          />
        )} */}

        <input
          type="password"
          placeholder="Password"
          className="p-4 w-full mt-10  bg-gray-600 rounded-lg"
          ref={password}
        />
        <p className="text-red-600 mt-5 font-bold text-1.5xl">{errorMsg}</p>

        <button
          className="p-4  bg-red-700 w-full mt-10 rounded-lg text-2xl"
          onClick={handleButtonClick}
        >
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
