import React from 'react'

const ServicesOverview = () => {
  return <>
  <section className="w-full bg-orange-50 flex flex-col items-center justify-center mt-5 lg:my-10 gap-5 py-10">
    <h2 className='text-3xl font-bold capitalize'>What makes us different</h2>
          <div className="w-4/5 flex flex-col lg:flex-row flex-wrap items-center justify-center h-full">
            <div className="w-full lg:w-1/3 lg:min-h-72 lg:invisible"></div>
            <div className="bg-white  w-full h-auto lg:w-1/3 lg:min-h-72 flex flex-col items-start justify-end p-5 gap-4 text-gray-500">
              <h6 className="w-full text-xl md:text-2xl text-center lg:text-start font-bold  capitalize">
              Exclusive<span className="lg:block">Opportunities</span>
              </h6>
              <p className="w-full text-center text-xs  lg:text-start leading-5 lg:w-11/12">
              As a member of BIZ E, you will have access to exclusive events, workshops, and seminars designed to address the specific challenges faced by business today. These opportunities are curated to provide you with the most relevant and actionable insights.
              </p>
            </div>
            <div className="bg-primary w-full lg:w-1/3 lg:min-h-72 flex flex-col shadow-xl  items-start justify-end p-5 gap-4 text-white">
              <h6 className="w-full text-xl md:text-2xl text-center lg:text-start font-bold  capitalize">
              Personalized <span className="lg:block">Support</span>
              </h6>
              <p className="w-full text-center text-xs  lg:text-start leading-5 lg:w-11/12">
              We understand that every business is unique that's why we offer personalized support and services that are tailored to your specific needs and goals. Whether you are looking to scale your operations refine your brand or explore new markets BIZ E provides the tools and guidance to help you succeed.
              </p>
            </div>

            <div className="bg-gray-50 w-full lg:w-1/3 lg:min-h-72 flex flex-col items-start  justify-end p-5 gap-4 text-gray-500">
              <h6 className="w-full text-xl md:text-2xl text-center lg:text-start font-bold capitalize">
              Visibility <span className="lg:block">and Influence</span>
              </h6>
              <p className="w-full text-center text-xs  lg:text-start leading-5 lg:w-11/12">
              BIZ E helps you amplify your business presence within the industry . Through our platform, your business gains visibility and credibility positioning you as a leader in your field. This influence can open doors to new partnerships, customers and growth opportunities.
              </p>
            </div>
            <div className="bg-secondary w-full lg:w-1/3 lg:min-h-72 flex flex-col shadow-xl items-start justify-end p-5 gap-4 text-white ">
              <h6 className="w-full text-xl md:text-2xl text-center lg:text-start font-bold  capitalize">
              Collaborative<span className="lg:block">Environment</span>
              </h6>
              <p className="w-full text-center text-xs  lg:text-start leading-5 lg:w-11/12 ">
              At BIZ E we believe in the power of collaboration. By joining our community you will be surrounded by like minded professionals who are as committed to business excellence as you are. This Collaborative environment fosters innovation and allows you to learn from the successes and challenges of others.
              </p>
            </div>
            <div className="bg-white w-full lg:w-1/3 lg:min-h-72 flex flex-col shadow-xl items-start justify-end p-5 gap-4 text-gray-500">
              <h6 className="w-full text-xl md:text-2xl text-center lg:text-start font-bold capitalize">
              Long Term <span className="lg:block">Growth</span>
              </h6>
              <p className="w-full text-center text-xs lg:text-start leading-5 lg:w-11/12">
              Our ultimate goal is to ensure your business thrives not just today but for years to come. BIZ E resources and connections are geared towards fostering sustainable long term growth helping you build a business that stands the test of time.
              </p>
            </div>
          </div>
        </section>
  </>
}

export default ServicesOverview;