import Image from "next/image";
import Button from "./buttons/Button";
import { SiteInfo } from "../app/data";

function Card({ item, imageStyle }) {
  return (
    <div className="flex flex-col items-center themeBgColor hoverBgColor hover:bg-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-500 pb-4 overflow-hidden text-white group cursor-pointer hover:transform hover:translate-y-3 group">
      <Image
        src={item.image}
        alt={item.title}
        width={100}
        height={100}
        className={imageStyle}
      />

      <h3 className="text-xl font-bold my-4">{item.title}</h3>

      <p className="text-right mb-8 text-white  text-[16px] font-semibold leading-6 px-3">
        {item.description}
      </p>
      <Button
        href={`tel:${SiteInfo.mobileNumber}`}
        text="اتصل الان"
        styles="themeBgColor text-black font-bold text-lg rounded-xl p-2 w-28 flex items-center justify-center group-hover:themeBgColor group-hover:text-white"
      />
    </div>
  );
}

export default Card;
