import React from "react";

const AboutPage = () => {
  return (
    <section className="p-2 flex flex-col gap-5 mt-5 justify-center items-center text-cyan-100">
      <h1 className="text-center text-2xl md:text-3xl underline decoration-wavy decoration-cyan-300 text-cyan-100">About me</h1>
      <p className="text-xl md:text-3xl text-balance text-center">I am a Full-Stack devloper, although, I am inclined towards Front-end as a visual person, I am passionate about bringing ideas to life and experimenting with new technologies for better understanding. I thrive on creating seamless, user-friendly experience. I am not afraid to learn new approachs and concepts. Currently I am working with NextJS stack.  </p>
      <article className="w-full">
        <h2 className="text-center text-2xl md:text-3xl underline decoration-wavy decoration-cyan-300 text-cyan-100">Hobbies</h2>
        <ul className="text-2xl pl-0 sm:pl-10">
          <li>- Badminton</li>
          <li>- Watching Animes</li>
          <li>- E-Sports</li>
          <li>- Football (Arsneal fan)</li>
        </ul>
      </article>
    </section>
  );
};

export default AboutPage;
