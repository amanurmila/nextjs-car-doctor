import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

export const collectionNameObj = {
  SERVICE_COLLECTION: "test-service",
  USERS_COLLECTION: "test-users",
  BOOKING_COLLECTION: "test-booking",
};

export default function dbConnect(collectionName) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
}
