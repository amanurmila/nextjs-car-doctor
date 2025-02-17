import Image from "next/image";
import React from "react";
import bannerImage from "../../../../public/assets/images/checkout/checkout.png";
import Link from "next/link";

const ServiceDetailsPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(`https://nextjs-car-doctor-mu.vercel.app/api/service/${p.id}`);
  const singleData = await res.json();
  return (
    <div>
      <section>
        <figure className="relative">
          <Image
            src={bannerImage}
            width={16}
            height={9}
            layout="responsive"
            alt="Banner Image"
          />
          <div className="absolute overlay-bg w-full h-full border text-white top-0">
            <div className="w-full h-full flex items-center font-bold text-3xl ps-16">
              <div>
                <h2>Service Details</h2>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <section className="w-10/12 mx-auto my-5 grid grid-cols-12 gap-10">
        <div className="col-span-9 p-4 border border-gray-300 rounded-md">
          <Image
            className="rounded-md"
            src={singleData.img}
            width={16}
            height={9}
            layout="responsive"
            alt={singleData.title}
          />
          <h2 className="font-bold text-3xl  my-4">{singleData.title}</h2>
          <p>{singleData.description}</p>
        </div>
        <div className="col-span-3">
          <Link href={`/checkout/${singleData._id}`}>
            <button className="btn bg-orange-600 w-full text-white">
              Checkout
            </button>
          </Link>
          <h3 className="text-center font-bold text-xl pt-3">
            Price: $ {singleData.price}
          </h3>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
