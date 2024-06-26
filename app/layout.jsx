 import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import Sidebar from "@/components/sidebar/Sidebar";
import { Tabs } from "@/components/tabs/Tabs";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400" , "500", "700", "900"] });

export const metadata = {
  title: "My Portfolio | Abdelrahman",
  description: "My name is Abdelrahman Aman Bourka, I am full-stack  developer and a software engineer. This is a website demostrarting my skills and expierence as a full-stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          <div className="h-14 md:h-10 ">
            <Nav />
          </div>
          <div className="flex  h-[calc(100vh-2.5rem)] bg-secondary">
            <div className="h-full bg-slate-400">
              <Sidebar />
            </div>
            <div className="flex flex-col size-full overflow-hidden">
              <div>
                <Tabs />
              </div>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
