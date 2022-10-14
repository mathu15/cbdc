import React from "react";
// import Cards from "../../components/cards/Cards";
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { NavLink } from "react-router-dom";

import Header from "../../components/Header/Header";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Buttons from "../../components/buttons/Buttons";

const Home = () => {
  return (
    <>
      <Header />

      <Navbar />
      {/* <div class="card"> */}
      {/* <div class="flex flex-column  ">
          <div class="flex align-items-center justify-content-center h-4rem  font-bold text-black border-round m-2">
            Links below will take you to the sandbox!
          </div>
          <div class="flex align-items-center justify-content-center h-4rem  font-bold text-black border-round m-2">
            *(if the build just finished it may take a few more moments fo the
            web api services to come online)
          </div>
        </div> */}
      <div class="flex-column align-items-center border-bottom-1 surface-border w-full">
        <p class=" text-center line-height-2  ">
          Links below will take you to the sandbox!
        </p>
        <p class="line-height-2  text-center">
          *(if the build just finished it may take a few more moments fo the web
          api services to come online){" "}
        </p>
      </div>
      {/* </div> */}

      <Hero />
      <div class="flex-column align-items-center border-bottom-1 surface-border w-full">
        <p class=" text-center line-height-2  ">
          Click 'Restart Build' below to restat deployment (this will erase all
          of the data on the current Sandbox deployment).
        </p>
        <p class="line-height-2  text-center">
          *Build takes around 15 minutes to complete.{" "}
        </p>
      </div>
      <Buttons />
      <div class="flex-column align-items-center border-top-1 ">
        <div class="flex align-items-center justify-content-center mc-1 text-center line-height-0">
          <p class="text-s text center mr-1 ">Build Status:</p>
          <p class=" text-center  text-blue-500 ">Finished and Deployed</p>
        </div>
        <div class="flex align-items-center justify-content-center mc-1 text-center line-height-0">
          <p class="text-s text center mr-1 ">Build Duration:</p>
          <p class=" text-center  text-blue-500 ">14m:25s</p>
        </div>
        <div class="flex align-items-center justify-content-center mc-1 text-center line-height-0">
          <p class="text-s text center mr-1 ">Build ID:</p>
          <p class=" text-center  text-blue-500 ">8adf_ef521f_g455s</p>
        </div>
      </div>
    </>
  );
};

export default Home;
