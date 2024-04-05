import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="p-2 flex flex-col gap-5 mt-5 justify-center items-center text-cyan-100">
      <div>
        <Image className="rounded-md animate-tada md:size-80" src={"/cat.svg"} width={200} height={200} />
      </div>
      <h1 className="text-xl  md:text-3xl font-light animate-flip-y">
        <span className=" no-underline">Hello</span>, My name is <span className="font-light underline-offset-4 text-orange-500 text-3xl underline">Abdelrahman</span>
      </h1>
      <span className="inline-block animate-flip-y font-bold md:text-7xl text-cyan-100 text-4xl">Full Stack Web Devlopper</span>
      <div className="flex gap-1  w-full mt-5 pl-0 flex-wrap lg:pl-52 sm:pl-12 md:pl-7 motion-safe:animate-shake">
        <Link className="md:py-3 md:px-6 py-2 px-3 border-cyan-500 border-2 rounded-md text-cyan-50 hover:bg-cyan-300 hover:text-black hover:border-transparent font-semibold" href={"/projects"}>
          My projects
        </Link>
        <Link className="md:py-3 md:px-6 py-2 px-3 border-cyan-500 border-2 rounded-md text-cyan-50 hover:bg-cyan-300 hover:text-black hover:border-transparent font-semibold" href={"/contact"}>
          Contact me
        </Link>
      </div>
    </section>
  );
}
