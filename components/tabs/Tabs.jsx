"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
export const Tabs = () => {
  const pathName = usePathname();
  const router = useRouter();

  const handleRoute = (url) => {
    router.push(url);
  };

  return (
  
        <ul className={`text-sm flex   transition-all duration-300 w-full bg-primary border-t-2 border-secondary overflow-x-auto`}>
          <li className={`${pathName === "/" ? "bg-secondary border-t-orange-600" : ""} border-[1px] border-secondary flex  items-center bg-primary`}>
            <Link href={"/"} className="flex px-5 py-1 text-xs items-center gap-1">
              <div>
                <Image src={"/react.svg"} width={20} height={20} alt="React Logo" />
              </div>
              home.jsx
            </Link>
          </li>
          <li className={`${pathName === "/about" ? "bg-secondary border-t-orange-600" : ""} border-[1px] border-secondary flex px-5 py-1 text-xs items-center gap-1 items-center bg-primary`}>
            <Link className="flex px-5 py-1 text-xs items-center gap-1" href={"/about"}>
              <div>
                <Image src={"/html.svg"} width={20} height={20} alt="HTML Logo" />
              </div>
              about.html
            </Link>
          </li>
          <li className={`${pathName === "/contact" ? "bg-secondary border-t-orange-600" : ""} border-[1px] border-secondary flex px-5 py-1 text-xs items-center gap-1 items-center bg-primary`}>
            <Link className="flex px-5 py-1 text-xs items-center gap-1" href={"/contact"}>
              <div>
                <Image src={"/css.svg"} width={20} height={20} alt="CSS Logo" />
              </div>
              contact.css
            </Link>
          </li>
          <li className={`${pathName === "/projects" ? "bg-secondary border-t-orange-600" : ""} border-[1px] border-secondary flex px-5 py-1 text-xs items-center gap-1 items-center bg-primary`}>
            <Link className="flex px-5 py-1 text-xs items-center gap-1" href={"/projects"}>
              <div>
                <Image src={"/js.svg"} width={20} height={20} alt="Javascript Logo" />
              </div>
              projects.js
            </Link>
          </li>
          <li className={`${pathName === "/github" ? "bg-secondary border-t-orange-600" : ""} border-[1px] border-secondary flex px-5 py-1 text-xs items-center gap-1 items-center bg-primary`}>
            <Link className="flex px-5 py-1 text-xs items-center gap-1" href={"/github"}>
              <div>
                <Image src={"/md.svg"} width={20} height={20} alt="Markdown Logo" />
              </div>
              github.md
            </Link>
          </li>
        </ul>
  );
};
