"use client";

import Lottie from "lottie-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import loginLottie from "../../../../public/loginLottie.json";
import SocialLogin from "../register/components/SocialLogin";

const Login = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (response.ok) {
        router.push("/");
        form.reset();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully!",
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Authentication Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to Login",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-4xl text-center font-bold">Login</h2>
      <div className=" flex flex-col-reverse md:grid grid-cols-12">
        <div className="w-[70%] col-span-6">
          <Lottie animationData={loginLottie} loop={true} />
        </div>
        <div className="col-span-6">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-600 text-white text-xl">
                Login
              </button>
            </div>
          </form>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
