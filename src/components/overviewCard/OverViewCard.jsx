import React from "react";
import { overViewData } from "../../data/OverViewCard";

const OverViewCard = ({data,className}) => {
  // const data = overViewData[0];
  return (
    <>
      <section className="w-full flex items-center justify-center my-10">
        <div className={className ?`w-11/12 flex  flex-col md:flex-row-reverse items-start lg:items-center justify-center gap-5` : `w-11/12 flex flex-col md:flex-row items-start lg:items-center justify-center gap-5`}>
          <div className="w-full md:w-1/2 h-auto rounded-xs overflow-hidden">
            <img
              src={data.picture}
              alt="team-meeting-image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-10">
            <h2 className="text-3xl font-bold capitalize">{data.heading}</h2>
            <p className="text-base">{data.description}</p>
            {
              data?.description2 && (
                <p>{data.description2}</p>
              )
            }
            {data?.buttonName && (
              <button className="bg-orange-500 text-white px-5 py-2 text-base capitalize outline-none">
                {data.buttonName}
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default OverViewCard;

