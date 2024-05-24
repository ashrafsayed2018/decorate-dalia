import Image from "next/image";

function Close({ styles, handleClose }) {
  return (
    <div
      className="close hover:bg-red-400 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer"
      onClick={handleClose}
    >
      <Image
        src="/icons/times.svg"
        alt="close"
        width={22}
        height={22}
        priority={true}
        className="text-white h-8 w-8"
      />
    </div>
  );
}

export default Close;
