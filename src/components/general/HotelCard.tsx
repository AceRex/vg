import React from "react";
import { FiCalendar } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { PiMapPinBold, PiStarFill, PiSwimmingPoolBold } from "react-icons/pi";
import { TbGlassFull } from "react-icons/tb";
// @ts-ignore
import Hotel from "../../assets/image/hotelImg.png";

function HotelCard() {
  return (
    <div className="flex flex-col gap-3 my-4">
      <div className="w-full flex flex-row bg-white rounded-md overflow-hidden">
        <div className="w-[20%] h-full p-4">
          <div className="w-full h-[10rem] rounded-md overflow-hidden">
            <div className="h-full object-contain ">
              <img src={Hotel} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="absolute"></div>
        </div>
        <div className="w-[75%] h-full">
          <div className="flex flex-row justify-between border-b border-body gap-3 p-3">
            <div className="flex flex-col">
              <p className="text-sm text-dark font-semibold tracking-tighter mb-1">
                Riviera Resort, Lekki{" "}
              </p>
              <p className="text-xs font-light text-dark w-[70%] text-wrap">
                18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                Lekki Phase1
              </p>
              <div className="flex flex-row items-center gap-2 mt-2">
                <div className="flex flex-row  gap-1 items-center text-primary">
                  <PiMapPinBold size={16} />{" "}
                  <p className="text-xs">Show on map</p>
                </div>
                <div className="flex flex-row  gap-1 items-center">
                  <PiStarFill size={16} className="text-yellow" />{" "}
                  <p className="text-dark text-xs">{"(8.5)"}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-xl text-dark tracking-tighter font-semibold">
                <span className="font-light">₦</span> 123,450.00
              </p>
              <p className="text-xs text-dark font-light">
                Total Price: NGN 560,000
              </p>
              <p className="text-xs text-dark font-light">
                1 room x 10 nights incl. taxes
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3 p-3 border-b border-body">
            <div className="flex flex-row items-center">
              <p className="text-xs mr-2">Facilities:</p>
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row  gap-1 items-center text-dark">
                  <PiSwimmingPoolBold size={18} />{" "}
                  <p className="text-xs">Pool</p>
                </div>
                <div className="flex flex-row  gap-1 items-center">
                  <TbGlassFull size={18} className="text-dark" />{" "}
                  <p className="text-dark text-xs">Bar</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <p className="flex flex-row text-xs gap-1 text-dark font-light">
                <FiCalendar size={15} /> Check In: 20-04-2024
              </p>
              <p className="flex flex-row text-xs gap-1 text-dark font-light">
                <FiCalendar size={15} /> Check Out: 29-04-2024
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3 p-3 border-b border-body">
            <div className="flex flex-row items-center gap-5">
              <p className="text-xs text-primary">Hotel details</p>
              <p className="text-xs text-primary">Price details</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="text-xs text-primary">Edit details</p>
            </div>
          </div>
        </div>
        <div className="bg-accentRed h-fit text-center w-[5%] p-2">
          <IoMdClose size={20} className="text-accentRedD" />
        </div>
      </div>
    </div>
  );
}

export default HotelCard;