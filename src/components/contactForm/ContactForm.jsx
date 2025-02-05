import React from 'react'

const ContactForm = () => {
  return <>
  <section className='w-full flex flex-col items-center justify-center gap-10 my-10'>
    <h2 className='text-3xl font-semibold'>Send Us a Message</h2>
    <form action="" className='w-11/12 md:w-[700px] flex flex-col items-center justify-center gap-7 px-10 py-20  shadow-2xl'>
        <div className='w-11/12 md:w-4/5 flex flex-col items-start justify-center'>
            <label htmlFor="fullName" className='capitalize font-bold text-base'>full name<span className='text-red-500'>*</span></label>
            <input type="text" id='fullName' className='w-full border-2 border-gray-300 p-3 rounded-md outline-none' placeholder='Enter Your Full Name' />
        </div>
        <div className='w-11/12 md:w-4/5 flex flex-col items-start justify-center'>
            <label htmlFor="email" className='capitalize font-bold text-base'>Email<span className='text-red-500'>*</span></label>
            <input type="text" id='email' className='w-full border-2 border-gray-300 p-3 rounded-md outline-none' placeholder='Enter Your Full Name' />
        </div>
        <div className='w-11/12 md:w-4/5 flex flex-col items-start justify-center'>
            <label htmlFor="message" className='capitalize font-bold text-base'>message <span className='text-red-500'>*</span></label>
            <textarea name="message" id="message" className='w-full border-2 border-gray-300 p-3 rounded-md outline-none min-h-40'></textarea>
        </div>
        <div className='w-11/12 md:w-4/5 flex items-center justify-start'>
            <button type='submit' className='text-base capitalize w-full sm:w-fit px-5 py-3 rounded-lg outline-none cursor-pointer transform transition-all duration-100 ease-in-out bg-primary hover:bg-primaryLight text-white'>send message</button>
        </div>
    </form>
  </section>
  </>
}

export default ContactForm;