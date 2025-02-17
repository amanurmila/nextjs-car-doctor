"use client";

import dynamic from "next/dynamic";
import React from "react";
import registerLottieData from "../../../../public/registerLottie.json";
import RegisterForm from "./components/RegisterForm";
import SocialLogin from "./components/SocialLogin";

// ✅ Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Register = () => {
  // ✅ Prevent empty animation data
  const registerLottie = registerLottieData ? registerLottieData : null;

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-4xl text-center font-bold">Register</h2>
      <div className="flex flex-col-reverse md:grid grid-cols-12">
        <div className="col-span-6">
          <RegisterForm />
          <SocialLogin />
        </div>
        <div className="w-[70%] col-span-6">
          {registerLottie ? (
            <Lottie animationData={registerLottie} loop={true} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Register;
