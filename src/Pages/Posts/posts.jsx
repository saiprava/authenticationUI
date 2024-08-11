import React, { useEffect, useState } from "react";
import Thersa from "../../theresa.png";
import Marvin from "../../kevin.png";
import shape from "../../Shape.png";
import chat from "../../💬.png";
import { useSelector } from "react-redux";
import { selectLoginData } from "../Auth/AuthSlice";

function Posts() {
  const user = useSelector(selectLoginData);
  console.log(user);
  const postList = [
    {
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      name: "Theresa Webb",
      comments: "24",
      time: "5",
      edited: false,
    },
    {
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      name: "Marvin McKinney",
      comments: "24",
      time: "8",
      edited: true,
    },
  ];

  return (
    <>
      <div className="h-screen max-h-screen overflow-scroll justify-center flex flex-col text-white dark:bg-black items-center rounded">
        <div className="h-full flex flex-col m-20 mt-44 w-1/2 ">
          <p className="text-2xl text-gray-700 ">
            Hello{" "}
            {user.userName.includes(".")
              ? user.userName.split(".")[0]
              : user.userName}
          </p>
          <p className="text-base text-gray-500">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
          <div className="bg-gray-600 my-8 w-full border-gray-400 rounded flex flex-col">
            <label className="text-base text-gray-700 m-4 mb-0 font-normal">
              Create Post
            </label>
            <div className="relative m-6">
              <div className="absolute w-11 h-11 bg-gray-600 rounded-full start-2 top-6 flex p-4 items-center  ml-4 pointer-events-none">
                <img src={chat} />
              </div>

              <textarea
                type="text"
                placeholder="How are you feeling today?"
                className="border text-sm font-light w-full border-gray-500 text-gray-500 rounded bg-black p-6 pl-24"
              />
            </div>
            <div className=" flex justify-end w-98 m-2">
              <button className=" bg-sky-500 w-16 p-1.5 m-2 rounded">
                Post
              </button>
            </div>
          </div>
          <div>
            {postList.map((item) => (
              <div className="bg-gray-600 my-8 w-full border-gray-400 rounded p-4 flex flex-col">
                <div className="flex flex-row items-center">
                  <img
                    src={
                      item.name.split(" ")[0] === "Theresa" ? Thersa : Marvin
                    }
                    className="w-11 h-11"
                  />
                  <div className="m-4">
                    <p className="text-base text-gray-700  mb-0 font-normal">
                      {item.name}
                    </p>
                    <p className=" text-gray-700 text-xs mb-0 font-normal">
                      {item.time} minutes ago {item.edited ? `• Edited` : ""}
                    </p>
                  </div>
                </div>
                <p className="border font-light text-sm border-gray-500 text-gray-500 rounded bg-black m-2 p-6">
                  {item.body}
                </p>
                <div className="flex flex-row items-center ml-2 mt-2">
                  <img src={shape} className="w-4 h-4 " />
                  <p className=" text-gray-500 text-xs ml-2 font-light">
                    {item.comments} comments
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
