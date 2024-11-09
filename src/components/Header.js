import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { HEADER_IMG } from "../utils/constant";
import "./styles.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isGptSearchEnabled = useSelector((store) => store?.gpt?.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or signed up
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        console.log("Remove User");
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleGptSearchView = () => {
    // dispatch(toggleGptSearchView());
  };

  return (
    <div className="Header-Container">
      <div className="Header">
        <img
          src={HEADER_IMG}
          className="h-10 w-10 sm:h-15 sm:w-15 md:h-20 sm:w-20"
        />
        <button
          className="w-1/4 h-12 self-center bg-transparent
           border border-1 bg-red-600 border-red-600
           rounded-lg px-5 text-white sm:bg-black md:bg-red-500
           text-0.2xl sm:text-1xl md:text-2xl"
          onClick={handleGptSearchView}
        >
          {isGptSearchEnabled ? "Go To Home Page" : "Gpt Search"}
        </button>
        <button className="Sign-Out" onClick={handleSignOut}>
          <p className="SignOutText">Sign Out</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
