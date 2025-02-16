import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const bookingCollection = dbConnect(collectionNameObj.BOOKING_COLLECTION);
  const p = await params;
  const query = { _id: new ObjectId(p.id) };

  // Validation:-->
  const session = await getServerSession(authOptions);
  const currentBooking = await bookingCollection.findOne(query);

  const isOwnerOk = session?.user?.email == currentBooking.email;

  if (isOwnerOk) {
    // Deleting user specific booking from DB:-->
    const deleteResponse = await bookingCollection.deleteOne(query);
    revalidatePath("/myBookings");
    return NextResponse.json(deleteResponse);
  } else {
    return NextResponse.json(
      { success: false, message: "Forbidden Access" },
      { status: 401 }
    );
  }
};

export const GET = async (req, { params }) => {
  const p = await params;
  const singleData = await dbConnect(
    collectionNameObj.SERVICE_COLLECTION
  ).findOne({ _id: new ObjectId(p.id) });

  return NextResponse.json(singleData);
};
