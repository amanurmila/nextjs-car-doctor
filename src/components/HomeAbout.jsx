import Image from "next/image";
import React from "react";
import aboutPerson from "../../public/assets/images/about_us/person.jpg";
import aboutParts from "../../public/assets/images/about_us/parts.jpg";
import { FaArrowRight } from "react-icons/fa";

const HomeAbout = () => {
  return (
    <div className="md:grid space-y-56 md:space-y-0 grid-cols-12 mt-14 md:mt-20 md:my-28 w-11/12 mx-auto">
      <div className="relative col-span-7">
        <div className="md:mr-12 rounded-md">
          <Image
            src={aboutPerson}
            width={500}
            height={500}
            alt="About-Person"
          />
        </div>
        <div className="rounded-md border-8 border-white absolute md:right-20 md:top-56 top-44 right-4">
          <Image src={aboutParts} width={300} height={300} alt="About-parts" />
        </div>
      </div>
      <div className="col-span-5 space-y-5">
        <p className="text-orange-600 font-semibold">About</p>
        <h2 className="text-4xl font-bold md:w-7/12">
          We are qualified & of experience in this field
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          explicabo corrupti accusantium veniam dolorem neque deleniti
          voluptates. Repellendus alias porro tempora tempore voluptas?
          Reprehenderit dolorem, consequuntur itaque placeat non facilis
          accusamus architecto? Ipsa eius illum corrupti sint doloremque
          architecto provident voluptatum, accusamus ea minus rem consequatur
          esse exercitationem praesentium quasi.
        </p>
        <button className="btn btn-outline text-white bg-orange-600 hover:bg-orange-600 flex items-center gap-2 transition-all duration-300 group">
          <span className="transition-all duration-300 group-hover:pr-1">
            Explore More
          </span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

export default HomeAbout;
