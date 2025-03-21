import BookingUpdateForm from "@/components/BookingUpdateForm";
import { headers } from "next/headers";
import React from "react";

const UpdateBookingPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(
    `http://localhost:3000/api/myBookings/${p.id}`,
    {
      headers: new Headers(await headers()),
    }
  );
  const data = await res.json();
  return (
    <div>
      <BookingUpdateForm data={data} />
    </div>
  );
};

export default UpdateBookingPage;
