import React from "react";
import "/node_modules/primeflex/primeflex.css";
import { NavLink } from "react-router-dom";

import { IconName } from "react-icons/ri";

const Hero = () => {
  return (
    <div class="card">
      <div class="flex justify-content-center flex-wrap card-container yellow-container">
        <div class="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
          <div
            class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
          >
            Central Bank
          </div>
          <div icon="pi pi pencil"> </div>
        </div>
        <div class="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
          <div
            class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
          >
            Wholesale Bank One
          </div>
        </div>
        <div class="border-round bg-blue-100 w-12rem h-6rem p-3 m-3">
          <div
            class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
          >
            Wholesale Bank Two
          </div>
        </div>
        <div class="border-round bg-blue-200 w-12rem h-6rem p-3 m-3">
          <div
            class="transition-colors transition-duration-500 bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900
     cursor-pointer text-center h-full w-auto border-round bg-blue-500 text-white font-bold p-3 flex align-items-center justify-content-center"
          >
            Wholesale Bank Three
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
