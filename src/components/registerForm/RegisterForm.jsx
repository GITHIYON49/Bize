import React from "react";

const RegisterForm = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-16 my-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold my-1">Register</h2>
          <span className="text-sm">
            Register and discover a great amount of new opportunities!
          </span>
        </div>
        <div className="w-full flex items-center justify-center">
          <form action="" className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/3 flex flex-col gap-5">
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                user name
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 p-2.5 rounded-xs outline-none"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                first name
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 p-2.5 rounded-xs outline-none"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                last name
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 p-2.5 rounded-xs outline-none"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                e-mail address
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 p-2.5 rounded-xs outline-none"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                password
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 p-2.5 rounded-xs outline-none"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                confirm password
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 p-2.5 rounded-xs outline-none"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2">
              <button className="w-full md:w-1/2 capitalize text-white text-base py-3 rounded-md outline-none cursor-pointer transform transition-all duration-100 ease-in-out bg-primary hover:bg-primaryLight">
                register
              </button>
              <button className="w-full md:w-1/2 capitalize text-gray-500 text-base py-3 rounded-md outline-none cursor-pointer bg-gray-200">
                login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
