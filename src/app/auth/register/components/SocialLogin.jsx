"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = async (providerName) => {
    signIn(providerName);
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logged in successfully!",
        timer: 1500,
      });
    }
  }, [session?.status]);

  return (
    <div className="text-center">
      <button
        onClick={() => handleSocialLogin("google")}
        className="btn btn-outline mr-4"
      >
        Login with Google <FaGoogle className="text-2xl" />
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="btn btn-neutral hover:bg-white hover:text-black"
      >
        Login with GitHub <FaGithub className="text-2xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
