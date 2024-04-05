import React from 'react'

const ContactPage = () => {
  return (
    <form className="border-cyan-950 border-2 flex flex-col gap-2 md:grid md:grid-cols-4">
      <h1 className="text-center underline decoration-wavy text-cyan-100 md:text-3xl mt-5 text-xl col-span-full">Contact me</h1>
      <div className="flex flex-col  md:flex-row   gap-4 w-full px-3 md:col-span-full">
        <div className="w-full relative">
          <input className="w-full border-b-4 md:w-96 md:h-11 border-b-zinc-900 text-black  bg-secondary outline-none  h-8 peer placeholder:text-transparent placeholder:px-1" type="text" name="name" id="name" placeholder="Name" />
          <label className="absolute left-1 peer-placeholder-shown:text-base px-1 text-sm peer-placeholder-shown:translate-y-0 peer-focus:text-sm peer-focus-within:-translate-y-4 -translate-y-4 top-1 text-gray-50 border-x-2 border-transparent  peer-focus:border-primary transition-all duration-300 cursor-text " htmlFor="name">
            Name
          </label>
        </div>
        <div className="w-full relative">
          <input className="w-full border-b-4 md:w-96 md:h-11 border-b-zinc-900 text-black  bg-secondary outline-none  h-8 peer placeholder:text-transparent placeholder:px-1" type="email" name="email" id="email" placeholder="email" />
          <label className="absolute left-1 peer-placeholder-shown:text-base px-1 text-sm peer-placeholder-shown:translate-y-0 peer-focus:text-sm peer-focus-within:-translate-y-4 -translate-y-4 top-1 text-gray-50 border-x-2 border-transparent  peer-focus:border-primary transition-all duration-300 cursor-text " htmlFor="email">
            Email
          </label>
        </div>
      </div>
      <div className="w-full px-3 lg:col-span-full relative">
        <input className="w-full border-b-4 md:w-96 md:h-11 border-b-zinc-900 text-black  bg-secondary outline-none  h-8 peer placeholder:text-transparent placeholder:px-1" type="email" name="email" id="email" placeholder="email" />
        <label className="absolute left-1 peer-placeholder-shown:text-base px-1 text-sm peer-placeholder-shown:translate-y-0 peer-focus:text-sm peer-focus-within:-translate-y-4 -translate-y-4 top-1 text-gray-50 border-x-2 border-transparent  peer-focus:border-primary transition-all duration-300 cursor-text " htmlFor="email">
          Email
        </label>
      </div>
      <div className="w-full px-3 md:col-span-full relative">
        <textarea name="message" id="message" className="w-full h-32  border-b-zinc-900 text-black  bg-secondary outline-none md:h-11 md:w-96 peer placeholder:text-transparent placeholder:px-1"></textarea>
        <label className="absolute left-1 peer-placeholder-shown:text-base px-1 text-sm peer-placeholder-shown:translate-y-0 peer-focus:text-sm peer-focus-within:-translate-y-4 -translate-y-4 top-1 text-gray-50 border-x-2 border-transparent  peer-focus:border-primary transition-all duration-300 cursor-text " htmlFor="message">
          Message
        </label>
      </div>
    </form>
  );
}

export default ContactPage