"use client";
import { ChevronDown, CodeXml, File, Github, Mail, Settings, UserCircle2 } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
const Sidebar = () => {
  const [dropdown, setDropDown] = useState(false);
  const pathName = usePathname();
  const handleDropDown = () => {
    setDropDown((prev) => !prev);
  };
  return (
    <aside className="flex h-full">
      <div className="flex justify-between items-center flex-col h-full bg-secondary">
        <ul className="h-full md:py-2 p-1 md:px-4 flex flex-col gap-5">
          <li>
            <File className="size-8" />
          </li>
          <li>
            <Github className="size-8" />
          </li>
          <li>
            <CodeXml className="size-8" />
          </li>
          <li>
            <Mail className="size-8" />
          </li>
        </ul>
        <div className="flex flex-col gap-5 mb-3">
          <UserCircle2 className="size-8" />
          <Settings className="size-8" />
        </div>
      </div>
      <div className="px-3 bg-primary flex-col gap-5 hidden sm:flex md:flex w-52">
        <h1>EXPLORER</h1>
        <ul className="text-sm">
          <li onClick={handleDropDown} className="cursor-pointer">
            <span className="flex items-center">
              <ChevronDown className={`size-5 ${dropdown ? "" : "-rotate-90"} transition-all duration-300   `} />
              PORTFOLIO
            </span>
            <ul className={`${dropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-10"} mt-3 flex flex-col gap-1 transition-all duration-300`}>
              <li className={`${pathName === "/" ? "bg-secondary" : ""} flex items-center hover:bg-secondary p-1 rounded-md`}>
                <div>
                  <Image src={"/react.svg"} width={24} height={24} alt="React Logo" />
                </div>
                <Link href={"/"}>home.jsx</Link>
              </li>
              <li className={`${pathName === "/about" ? "bg-secondary" : ""} flex items-center hover:bg-secondary p-1 rounded-md`}>
                <div>
                  <Image src={"/html.svg"} width={24} height={24} alt="HTML Logo" />
                </div>
                <Link href={"/about"}>about.html</Link>
              </li>
              <li className={`${pathName === "/contact" ? "bg-secondary" : ""} flex items-center hover:bg-secondary p-1 rounded-md`}>
                <div>
                  <Image src={"/css.svg"} width={24} height={24} alt="CSS Logo" />
                </div>
                <Link href={"/contact"}>contact.css</Link>
              </li>
              <li className={`${pathName === "/projects" ? "bg-secondary" : ""} flex items-center hover:bg-secondary p-1 rounded-md`}>
                <div>
                  <Image src={"/js.svg"} width={24} height={24} alt="Javascript Logo" />
                </div>
                <Link href={"/projects"} >projects.js</Link>
              </li>
              <li className={`${pathName === "/github" ? "bg-secondary" : ""} flex items-center hover:bg-secondary p-1 rounded-md`}>
                <div>
                  <Image src={"/md.svg"} width={24} height={24} alt="Markdown Logo" />
                </div>
                <Link href={"/github"}>github.md</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
