import DeleteButton from "@/app/myBookings/components/DeleteButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";

const MyBookingsTable = ({ data }) => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <Image
                    src={item.service_img}
                    width={50}
                    height={50}
                    alt={item.service_name}
                  />
                </td>
                <td>{item.service_name}</td>
                <td>{item.service_price}</td>
                <td>{item.date}</td>
                <td className="flex justify-center items-center gap-2 text-2xl">
                  <Link href={`/myBookings/${item._id}`}>
                    <FaEdit className="cursor-pointer" />
                  </Link>
                  <DeleteButton id={item._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingsTable;
