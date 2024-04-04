
import { Minus, Square, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const links = [
  {
    title: "File",
  },

  {
    title: "Edit",
  },
  {
    title: "View",
  },
  {
    title: "Run",
  },
  {
    title: "Terminal",
  },
  {
    title: "Help",
  },
];
const Nav = () => {
  return (
    <header className="h-full px-2 py-2 bg-primary text-gray-200  border-b-[1px] border-zinc-900">
      <nav className="flex justify-between items-center text-sm">
        <ul className="flex items-center gap-4">
          <li className="hover:bg-ps">
            <Image width={20} height={20} alt="Vs-code" src={"/vscode.svg"} />
          </li>
          {links.map((link, index) => (
            <li key={link.title} className="hidden md:block">
              <Link href={"/"}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="w-1/2  text-center">
          <span className="text-[.75em] md:text-sm">Abdelrahman - Visual Studio Code</span>
        </div>
        <div className="flex gap-2 items-center">
          <Minus className="size-4 md:size-5" />
          <Square className="size-4 md:size-5" />
          <X className="size-4 md:size-5" />
        </div>
      </nav>
    </header>
  );
}

export default Nav