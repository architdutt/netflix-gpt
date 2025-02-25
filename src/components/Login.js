import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_IMAGE } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    console.log("Sign up now");
    setIsSignInForm(!isSignInForm);
  };

  const handleSignIn = () => {
    console.log("Sign In");
    console.log(email.current.value);
    console.log(password.current.value);
    const nameValue = name.current ? name.current.value : null;

    console.log("isSignInForm", isSignInForm);
    const validationMessage = checkValidData(
      email.current.value,
      password.current.value,
      nameValue,
      isSignInForm
    );
    console.log(validationMessage);
    setErrorMessage(validationMessage);
    if (validationMessage) return;
    //sign in / sign up logic
    if (!isSignInForm) {
      console.log("Sign Up");

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("signed up user =>", user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_IMAGE,
          })
            .then(() => {
              // Profile updated!
              console.log("Profile updated");

              const { uid, displayName, email, photoURL } = auth.currentUser;
              console.log("User is signed in", user);
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      console.log("Sign In");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signed in the  user =>", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center w-3/12 absolute p-12 my-36 mx-auto bg-black right-0 left-0 bg-opacity-50 text-white"
      >
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        />
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600 border border-white"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 m-4 bg-red-500 w-full rounded-lg"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? `New to Netflix?
         Sign up now.`
            : "Already a member? Sign in now."}
        </p>
      </form>
    </>
  );
};

export default Login;
