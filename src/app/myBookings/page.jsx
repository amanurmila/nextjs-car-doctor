// "use client";
import MyBookingsTable from "@/components/MyBookingsTable";
import { headers } from "next/headers";
import React from "react";

const fetchMyBookings = async () => {
  const res = await fetch("http://localhost:3000/api/service", {
    headers: headers(),
  });
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
