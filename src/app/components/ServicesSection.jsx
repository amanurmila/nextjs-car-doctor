import React from "react";
import Image from "next/image";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ServicesSection = async () => {
  const servicesData = await dbConnect(collectionNameObj.SERVICE_COLLECTION)
    .find({})
    .toArray();

  return (
    <div className="grid grid-cols-12 gap-6 justify-center items-center w-11/12 mx-auto">
      {servicesData.map((item) => {
        return (
          <div
            key={item._id}
            className="col-span-12 md:col-span-6 lg:col-span-4 p-4 border border-gray-400 flex flex-row items-center justify-center rounded-md"
          >
            <div>
              <Image
                className="rounded-md"
                src={item.img}
                width={314}
                height={208}
                alt={item.title}
              />
              <div className="flex justify-between my-5">
                <div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <h3 className="text-base font-semibold text-orange-600">
                    Price: {item.price}
                  </h3>
                </div>
                <Link href={`/services/${item._id}`} className="btn">
                  <FaArrowRight className="text-2xl text-orange-600" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
