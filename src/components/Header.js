import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign out successful");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptClick = () => {
    dispatch(toggleGptSearch());
  };
  return (
    <div className="absolute w-screen top-0 left-0 right-0 flex flex-col md:flex-row items-center justify-between p-5 bg-gradient-to-b from-black z-50 sm:bg-green-300 md:bg-blue-500 lg:bg-black">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center justify-between space-x-3 mr-10 ">
          <img src={user.photoURL} alt="" className="h-10 w-10 rounded-full" />
          <button
            className="py-2 px-4  mx-4 bg-orange-400 text-white rounded-lg"
            onClick={handleGptClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <button
            className="px-5 py-2 bg-red-600 text-white rounded-md mr-5 hover:bg-opacity-50"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
