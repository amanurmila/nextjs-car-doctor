"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const navMenu = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blogs"}>Blogs</Link>
      </li>
      <li>
        <Link href={"/myBookings"}>My Bookings</Link>
      </li>
      <ul className="flex items-center justify-end gap-3">
        {status === "authenticated" ? (
          <>
            <li>
              <Image
              className="rounded-full"
                src={session?.user?.image}
                width={70}
                height={70}
                alt="user"
              />{" "}
            </li>
            <li onClick={() => signOut()} className="btn btn-neutral btn-sm">
              Logout
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="btn btn-neutral btn-sm" href="/auth/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="btn btn-neutral btn-sm" href="/auth/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <Link href={"/"} className="text-xl">
            <Image src={"/assets/logo.svg"} width={70} height={65} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
