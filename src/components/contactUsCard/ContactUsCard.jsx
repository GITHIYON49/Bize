import { contactUsData } from "../../data/ContactUsCard";

const ContactUsCard = () => {
  return (
    <>
      <section className="my-10 flex items-center justify-center">
        <div className="w-11/12 flex flex-col md:flex-row items-center justify-center gap-7 md:gap-10">
          {contactUsData.map((data, i) => {
            return (
              <div
                key={i}
                className="w-full md:w-1/3 p-3 lg:p-10 shadow-2xl flex flex-col items-center justify-center gap-5"
              >
                <span className="w-fit flex items-center justify-center p-2 lg:p-3  rounded-full border-2 border-black">
                  <data.icon className="w-6 h-6 lg:h-8 lg:w-8" />
                </span>
                <div className="flex flex-col items-center justify-center gap-2">
                  <h3 className="text-xl lg:text-2xl font-semibold">
                    {data.name}
                  </h3>
                  <span className="text-sm lg:text-lg">{data.address}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ContactUsCard;
