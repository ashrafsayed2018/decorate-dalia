import { ContactInfo } from "../app/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function FixedMobileCall() {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full themeBgColor hoverBgColor flex items-center justify-center md:hidden h-16 z-50">
      {ContactInfo.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.id}
            className="text-white flex-1 flex items-center justify-center flex-col "
          >
            <FontAwesomeIcon
              icon={link.icon}
              className={`mb-[5px] ${
                link.name === "الهاتف"
                  ? "text-xl"
                  : "bg-green-900 rounded-full text-2xl"
              }`}
            />
            <span className="text-sm">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default FixedMobileCall;
