import React from "react";
import Background from "../components/Background";

export default function Home() {
  return (
    <div
      style={{ width: 740, height: 520, backgroundColor: "#07003B" }}
      className="flex justify-center items-center"
    >
      <Background />
      <div
        className="bg-white flex flex-col"
        style={{ width: 630, height: 400, zIndex: 30, borderRadius: 20 }}
      >
        <div className="flex flex-row flex-no-wrap w-full mt-8">
          <div className="w-2/6 flex flex-col items-center justify-center">
            <div
              className="border-2 rounded-full flex items-center justify-center"
              style={{ width: 60, height: 60 }}
            >
              <img
                style={{ width: 40, height: 40 }}
                src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="w-4/6 flex flex-col flex-wrap justify-center mr-12">
            <div className="">
              <div>
                <lable className="text-sm font-bold">Name</lable>
              </div>
              <div className="border-red-500">
                <input
                  className="pl-4 border-2 border-grey-300 w-full h-8 rounded-lg shadow-sm"
                  type="text"
                  value="Viral Sangani"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 flex felx-wrap justify-center ">
          <div className="mt-8">
            <textarea cols="50" rows="4"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
