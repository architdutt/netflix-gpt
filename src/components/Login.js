import React, { useRef, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    console.log("Sign up now");
    setIsSignInForm(!isSignInForm);
  };

  const handleSignIn = () => {
    console.log("Sign In");
    console.log(email.current.value);
    console.log(password.current.value);
    const validationMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    console.log(validationMessage);
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
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
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
