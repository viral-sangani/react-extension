import React from "react";
import { goTo } from "react-chrome-extension-router";
import Home from "./Home";

function Login() {
  return (
    <div style={{ width: 380, height: 180 }}>
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="font-semibold text-2xl ">Note Letter</div>
        <div className="">
          <div
            className="cursor-pointer flex flex-row items-center py-2 px-4 border-transparent rounded-md text-xl text-white mt-6 hover:shadow-lg"
            style={{ backgroundColor: "#26A8ED" }}
            onClick={() => goTo(Home)}
          >
            <div className="bg-white h-full border-transparent rounded-lg">
              <img
                className="m-1"
                src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png"
                style={{ width: 35, height: 35 }}
                alt="Google"
              />
            </div>
            <span className="pl-4">Login with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
