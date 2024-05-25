"use client";
import { ServicesList } from "../app/data";
import Card from "./Card";

function Services() {
  return (
    <div className="mt-20 px-4 md:px-6 lg:px-8 xl:px-10">
      <h2 className="headingColor">خدماتنا</h2>
      <span className="block w-14 h-[2px] themeBgColor  mx-auto mb-8"></span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {ServicesList.map((service) => {
          return (
            <Card key={service.id} item={service} imageStyle="h-80 w-full" />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
