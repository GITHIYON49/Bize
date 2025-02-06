import React from "react";
import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import { titleCardData } from "../../data/TitleCard";

const TitleCard = () => {
  const navigation = useNavigate();

  function handleClick(route) {
    navigation(route);
  }
  return (
    <>
      <div className="my-20 flex flex-col md:flex-row items-center justify-evenly gap-16 md:gap-5">
        {titleCardData.map((data, i) => (
          <div
            key={i}
            className={`w-11/12 md:w-1/3 lg:w-1/4 h-48 sm:h-52 lg:h-56 flex flex-col items-center justify-end gap-2 shadow-xl border-b-4 relative pb-3 rounded-t-sm`}
            style={{ borderBottomColor: data.theam }}
          >
            <div
              className="text-white rounded-full p-0.5 flex items-center justify-center absolute -top-8 md:-top-10 lg:-top-12"
              style={{ backgroundColor: data.theam }}
            >
              <data.icon className="w-20 h-20 sm:w-24 sm:h-24" />
            </div>
            <h2 className="text-center text-xl sm:text-2xl lg:text-3xl capitalize font-bold">
              {data.title}
            </h2>
            <span className="text-sm sm:text-base lg:text-xl text-gray-600">
              {data.text}
            </span>
            <span
              className="rounded-full font-bold flex items-center justify-center cursor-pointer w-8 h-8 lg:w-10 lg:h-10"
              style={{ backgroundColor: data.theam }}
              onClick={() => {
                handleClick(data.pageLink);
              }}
            >
              <ChevronRight className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TitleCard;
