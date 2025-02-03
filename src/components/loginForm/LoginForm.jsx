import React from "react";

const LoginForm = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-20 my-20">
        <div className="text-center">
          <h2 className="text-3xl capitalize font-semibold my-1">login</h2>
          <span>Hi, Welcome back</span>
        </div>
        <div className="w-full flex items-center justify-center">
          <form
            action=""
            className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4 flex flex-col gap-5 items-center justify-center"
          >
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label
                htmlFor="userName-email"
                className="capitalize text-sm font-medium text-gray-700"
              >
                Username or E-mail
              </label>
              <input
                type="text"
                id="userName-email"
                className="w-full border-[1px] border-gray-400 p-2 rounded-xs outline-none"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label
                htmlFor="password"
                className="capitalize text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                className="w-full border-[1px] border-gray-400 p-2 rounded-xs outline-none"
              />
            </div>
            <div className="w-3/5">
              <button className="capitalize w-full py-3 bg-orange-500 hover:bg-orange-400 text-sm rounded-sm  text-white cursor-pointer">
                login
              </button>
              <span className="block w-full text-gray-500 text-center text-sm cursor-pointer my-5">
                Forgot your password?
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
