"use client";

import Lottie from "lottie-react";
import React from "react";
import registerLottie from "../../../../public/registerLottie.json";
import RegisterForm from "./components/RegisterForm";
import SocialLogin from "./components/SocialLogin";

const Register = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-4xl text-center font-bold">Register</h2>
      <div className=" flex flex-col-reverse md:grid grid-cols-12">
        <div className="col-span-6">
          <RegisterForm />
          <SocialLogin />
        </div>
        <div className="w-[70%] col-span-6">
          <Lottie animationData={registerLottie} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Register;
