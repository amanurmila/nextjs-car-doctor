// "use client";
import MyBookingsTable from "@/components/MyBookingsTable";
import { headers } from "next/headers";
import React from "react";

const fetchMyBookings = async () => {
  const res = await fetch(
    "https://nextjs-car-doctor-mu.vercel.app/api/service",
    {
      headers: new Headers(await headers()),
    }
  );
  const d = await res.json();
  // setData(d);
  return d;
};

const MyBookingsPage = async () => {
  const data = await fetchMyBookings();

  // const [data, setData] = useState([]);
  // useEffect(() => {

  //   fetchMyBookings();
  // }, []);
  return (
    <div>
      <MyBookingsTable data={data} />
    </div>
  );
};

export default MyBookingsPage;
