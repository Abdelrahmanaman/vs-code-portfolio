import Link from "next/link";
import Image from "next/image";
const GithubPage = async () => {
  let github;
  try {
    const response = await fetch("https://api.github.com/users/abdelrahmanaman");
    const data = await response.json();
    github = data;
  } catch (error) {}
  return (
    <section className="p-2 flex flex-col gap-5  text-cyan-100">
      <h1 className="text-center underline decoration-wavy text-cyan-100 md:text-3xl mt-5 text-xl col-span-full  animate-tada">Github</h1>
      <div className="flex items-center animate-zoom-in gap-2 justify-center bg-primary rounded-md py-4">
        <div className="size-14 relative animate-swing rounded-full">
          <Image className="object-cover rounded-full" src={github.avatar_url} fill sizes="100" />
        </div>
        <Link className="text-xl animate-fade-in md:text-2xl border-x-4 border-orange-500 h-20 flex items-center justify-center px-1" href={"https://github.com/Abdelrahmanaman"}>
          Abdelrahmanaman
        </Link>
        <p className="flex items-center flex-wrap gap-1 animate-shake">
          Repos:
          <span className="text-xl md:text-2xl">{github.public_repos}</span>
        </p>
      </div>
    </section>
  );
};

export default GithubPage;
