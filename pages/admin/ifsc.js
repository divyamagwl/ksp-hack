import React, { useState } from "react";

import axios from "axios";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function IFSC() {

    const [ifsc, setIfsc] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(ifsc)
        const res = await axios.post('https://63ae-119-161-98-68.in.ngrok.io/ifsc', {"ifscCode": "SBIN0002396"});
        console.log(res)
        console.log(res.data)
    }

  return (
    <>
    <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3" onSubmit={handleSubmit}>
        <div className="relative flex w-full flex-wrap items-stretch">
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <i className="fas fa-search"></i>
            </span>
            <input
            onChange={(e) => {setIfsc(e.target.value)}}
            type="text"
            placeholder="Enter IFSC Code..."
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
            />
        </div>
    </form>

    </>
  );
}

IFSC.layout = Admin;
