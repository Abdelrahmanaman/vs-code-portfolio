import React from "react";

const ContactPage = () => {
  return (
    <form className="border-cyan-950 border-2 flex flex-col gap-5 md:grid md:grid-cols-4 ">
      <h1 className="text-center underline decoration-wavy text-cyan-100 md:text-3xl mt-5 text-xl col-span-full  animate-tada">Contact me</h1>
      <div className="flex flex-col gap-5   col-span-3 md:flex-row md:flex-wrap  w-full px-3 animate-expand-horizontally ">
        <div className="w-full relative">
          <input className="w-full border-2 border-b-4 md:w-96 md:h-11 border-primary text-gray-50 p-2  bg-secondary outline-none  h-11 peer placeholder:text-transparent placeholder:px-1" type="name" name="name" id="name" placeholder="name" />
          <label className="absolute bg-white text-primary  left-1 peer-placeholder-shown:text-base px-1 text-xs peer-placeholder-shown:translate-y-0 peer-focus:text-xs peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-50   peer-focus-within:-translate-y-7 -translate-y-7 top-3 peer-focus:text-primary peer-focus:bg-white transition-all duration-300 cursor-text " htmlFor="name">
            Name
          </label>
        </div>
        <div className="w-full relative animate-slide-in-right">
          <input className="w-full border-2 border-b-4 md:w-96 md:h-11 border-primary text-gray-50 p-2  bg-secondary outline-none  h-11 peer placeholder:text-transparent placeholder:px-1" type="email" name="email" id="email" placeholder="email" />
          <label className="absolute bg-white text-primary  left-1 peer-placeholder-shown:text-base px-1 text-xs peer-placeholder-shown:translate-y-0 peer-focus:text-xs peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-50  peer-focus-within:-translate-y-7 -translate-y-7 top-3 peer-focus:text-primary peer-focus:bg-white transition-all duration-300 cursor-text " htmlFor="email">
            Email
          </label>
        </div>
      </div>
      <div className="w-full px-3 md:col-span-full relative animate-slide-in-top">
        <input className="w-full bg-secondary border-b-4 border-2 md:w-96 md:h-11 border-primary text-gray-50 p-2  b outline-none  h-11 peer placeholder:text-transparent placeholder:px-1" type="subject" name="subject" id="subject" placeholder="subject" />
        <label className="absolute bg-white text-primary  left-4 peer-placeholder-shown:text-base px-1 text-xs peer-placeholder-shown:translate-y-0 peer-focus:text-xs peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-50  peer-focus-within:-translate-y-7 -translate-y-7 top-3 peer-focus:text-primary peer-focus:bg-white transition-all duration-300 cursor-text " htmlFor="subject">
          Subject
        </label>
      </div>
      <div className="w-full px-3 md:col-span-full relative animate-slide-in-top">
        <textarea
          className="w-full h-32
          md:w-1/2 md:h-52 border-b-4 bg-secondary   border-2 border-primary resize-none text-gray-50 p-2   outline-none  peer placeholder:text-transparent placeholder:px-1"
          name="message"
          id="message"
          placeholder="message"
        ></textarea>
        <label className="absolute bg-white text-primary  left-4 peer-placeholder-shown:text-base px-1 text-xs peer-placeholder-shown:translate-y-0 peer-focus:text-xs peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-50  peer-focus-within:-translate-y-7 -translate-y-7 top-3 peer-focus:text-primary peer-focus:bg-white transition-all duration-300 cursor-text " htmlFor="message">
          Message
        </label>
      </div>
      <div className="px-3 mb-5 font-semibold">
        <button className="py-2 px-3 border-cyan-500 bg-transparent border-2 text-cyan-50 hover:bg-cyan-500 hover:text-primary animate-slide-in-left">Submit</button>
      </div>
    </form>
  );
};

export default ContactPage;
