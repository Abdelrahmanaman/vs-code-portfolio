import  Image from "next/image";
import { Cpu, Link as LucideLink, Github } from "lucide-react";
import Link from "next/link";
import Project from "@/components/projects/Project";

const project1 = {
  title: "Hero Clash",
  src: "",
  description: "Hero Clash is a superhero Game where you can choose  your hero and battle against other heroes.",
  challenges: "As it was a group project the challenges I faced was in terms of micromanganging my work and coordinating tasks, this helped me to better understand Task managements apps like Trello ",
  repo: "/https://github.com/Abdelrahmanaman/Heroes-Clash",
  techs: ["HTML", "CSS", "JavaScript"],
};
const ProjectsPage = () => {
  return (
    <section className="px-4 flex flex-col gap-4 text-cyan-100 overflow-y-auto project-page">
      <h1 className="text-center underline decoration-wavy text-cyan-100 md:text-3xl mt-5 text-xl col-span-full  animate-tada">Projects</h1>
      <div className="flex flex-wrap  gap-4">
        <Project {...project1} />
        <article className=" lg:w-96 w-full flex-grow">
          <div className="h-80 w-full  relative">
            <Image className="object-cover rounded-t-md size-full" src={"/project1.png"} fill sizes="100" />
          </div>
          <div className="flex flex-col gap-2 pb-2 bg-zinc-900 ">
            <h2 className="text-orange-500 text-2xl underline decoration-wavy">Rentopia</h2>
            <div className="flex gap-4 items-center">
              <Link href={"https://rentopia0.vercel.app/"} className="flex items-center gap-1">
                Demo
                <LucideLink className="size-6" />
              </Link>
              <Link href={"https://github.com/Abdelrahmanaman/rentopia0"} className="flex items-center gap-1">
                Github Repo
                <Github className="size-6" />
              </Link>
            </div>
            <p className="text-xl">Rentopia is a website where you can book apartments, and list your apartments for rent.</p>
            <h3 className="text-cyan-500 text-xl underline decoration-wavy">Challenges</h3>
            <p>In terms of Challenges this project was one of the most challenging projects that I ever did, Setting S3 storage Bucket and storing the Link to the DB, and also using google map API to fetch depending on the location of the apartments.</p>
          </div>
          <div className="  flex flex-col gap-2">
            <span className="flex gap-1 items-center">
              Techs
              <Cpu />
            </span>
            <div className="bg-zinc-900  rounded-b-md  flex gap-2 flex-wrap py-4 px-2">
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">ReactJS - VITE</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">NodeJS</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">TailwindCSS</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">MongoDB</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">Mongoose</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">Amazon S3</span>
            </div>
          </div>
        </article>
        <article className="lg:w-96  flex-grow">
          <div className="h-80 w-full relative">
            <Image className="object-cover rounded-t-md size-full" src={"/project2.png"} fill sizes="100" />
          </div>
          <div className="flex flex-col gap-2 pb-2">
            <h2 className="text-orange-500 text-2xl underline decoration-wavy">Promptopia</h2>
            <div className="flex gap-4">
              <Link href={"https://promptopia-opal-two.vercel.app/"} className="flex items-center gap-1">
                Demo
                <LucideLink className="size-6" />
              </Link>
              <Link href={"https://github.com/Abdelrahmanaman/Promptopia"} className="flex items-center gap-1">
                Github Repo
                <Github className="size-6" />
              </Link>
            </div>
            <p className="text-xl">Promptopia is a website where you can Post the most efficient prompts to optimze your interaction with LLM Models.</p>
            <h3 className="text-cyan-500 text-xl underline decoration-wavy">Challenges</h3>
            <p>As this was my first NextJS project, the challenges I faced was setting up NEXT-AUTH, I found diffculties in navigating through their Doc.  </p>
          </div>
          <div className="  flex flex-col gap-2">
            <span className="flex gap-1 items-center">
              Techs
              <Cpu />
            </span>
            <div className="bg-zinc-900 rounded-b-md  flex gap-2 flex-wrap py-4 px-2">
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">NEXTJS</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">NodeJS</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">TailwindCSS</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">MongoDB</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">Mongoose</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">NEXT-AUTH</span>
            </div>
          </div>
        </article>
        <article className="lg:w-96 flex-grow-0 ">
          <div className="h-80 w-full  relative">
            <Image className="object-cover rounded-t-md size-full" src={"/project3.png"} fill sizes="100" />
          </div>
          <div className="flex flex-col gap-2 pb-2">
            <h2 className="text-orange-500 text-2xl underline decoration-wavy">Anime Library</h2>
            <div className="flex gap-4">
              <Link href={"https://anime-library-phi.vercel.app/"} className="flex items-center gap-1">
                Demo
                <LucideLink className="size-6" />
              </Link>
              <Link href={"https://github.com/Abdelrahmanaman/Anime-library"} className="flex items-center gap-1">
                Github Repo
                <Github className="size-6" />
              </Link>
            </div>
            <p className="text-xl">Anime Library was a personal project to test the new server action feature with NEXTJS, while fetching data with infinite scroll using framer-motion</p>
            <h3 className="text-cyan-500 text-xl underline decoration-wavy">Challenges</h3>
            <p>Since, I had no prior expierence with framer-motion and NextJS it proved to be a little tricky but once you get the hang of it, it becomes less complicated</p>
          </div>
          <div className="  flex flex-col gap-2">
            <span className="flex gap-1 items-center">
              Techs
              <Cpu />
            </span>
            <div className="bg-zinc-900 rounded-b-md  flex gap-2 flex-wrap py-4 px-2">
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">NEXTJS</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">TailwindCSS</span>
              <span className="bg-zinc-800 rounded-md p-2 text-sm font-medium">Framer-motion</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProjectsPage;
