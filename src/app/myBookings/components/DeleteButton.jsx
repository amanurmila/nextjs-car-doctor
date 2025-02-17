"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await fetch(`https://nextjs-car-doctor-mu.vercel.app/api/service/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    router.refresh();
    if (data.deletedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Booked Session Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "An Error Happened! Try Again Later",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <MdDelete onClick={() => handleDelete(id)} className="cursor-pointer" />
    </>
  );
};

export default DeleteButton;
