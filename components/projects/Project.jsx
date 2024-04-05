import Image from "next/image";
import { Cpu, Link as LucideLink, Github } from "lucide-react";

import Link from "next/link";
const Project = (props) => {
  return (
    <article className=" lg:w-96 w-full">
      <div className="h-80 w-full  relative">
        <Image className="object-cover rounded-t-md size-full" src={props.src || "/default.svg"} fill sizes="100" />
      </div>
      <div className="flex flex-col gap-2 pb-2">
        <h2 className="text-orange-500 text-2xl underline decoration-wavy">{props.title}</h2>
        <div className="flex gap-4 items-center">
          {props?.link && (
            <Link href={props.link} className="flex items-center gap-1">
              Demo
              <LucideLink className="size-6" />
            </Link>
          )}
          <Link href={props.repo} className="flex items-center gap-1">
            Github Repo
            <Github className="size-6" />
          </Link>
        </div>
        <p className="text-xl">{props.description}</p>
        <h3 className="text-cyan-500 text-xl underline decoration-wavy">Challenges</h3>
        <p>{props.challenges}</p>
      </div>

      <div className="  flex flex-col gap-2">
        <span className="flex gap-1 items-center">
          Techs
          <Cpu />
        </span>
        <ul className="bg-zinc-900  rounded-b-md  flex gap-2 flex-wrap py-4 px-2">
          {props.techs?.map((tech, index) => (
            <li key={index} className="bg-zinc-800 rounded-md p-2 text-sm font-medium">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Project;
