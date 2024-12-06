"use client";
import React from "react";
import CompanyCard from "./CompanyCard";
import { companyData } from "@/data/companyData";
import Image from "next/image";
import { Icons } from "../common/Icons";

const Logo = () => (
  <div className="hidden col-span-1 lg:flex justify-center items-center">
    <div className="w-full max-w-md opacity-50">
      <Image
        src="/assets/primarylogo.png"
        alt="Infinite Group Logo"
        width={220}
        height={100}
        className="w-full h-full"
      />
    </div>
  </div>
);

const OurCompanies = () => {
  const targetPositions = new Set([2, 6, 10, 14]);
  return (
    <div className="p-4 py-12 lg:p-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-16 lg:gap-y-28 gap-x-8">
        {companyData?.map((data, index) => (
          <React.Fragment key={`parent-${index}`}>
            {targetPositions.has(index) && (
              <>
                <Logo key={`logo-A-${index}`} />
                <Logo key={`logo-B-${index}`} />
              </>
            )}
            <div key={`card-${index}`} className="col-span-2">
              <p className="flex uppercase gap-2 text-sm py-1">
                <Icons.handshake className="md:h-6 md:w-6" />
                {data?.subtitle}
              </p>
              <p className="text-xl pb-6 pt-2 lg:text-3xl max-w-2xl font-bricolage font-bold text-primary100">
                {data?.title}
              </p>
              <CompanyCard data={data} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default OurCompanies;