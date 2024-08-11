import React, { useState } from "react";
import logo from "../../Logo.png";
import Login from "./Login";
import SignIn from "./Sign-in";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className=" h-screen justify-center flex flex-col text-white dark:bg-black items-center rounded">
      <img src={logo} alt="logo" className="mb-4 animate-wiggle" />
      <div
        className={`  w-30 p-4 m-5 dark:bg-gray-800 border-gray-400 border-2  ${
          isLogin ? `h-2/4` : `h-2/3`
        } rounded `}
      >
        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <SignIn setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
}

export default Auth;
