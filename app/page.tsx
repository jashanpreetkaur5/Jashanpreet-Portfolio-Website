import Image from "next/image";

import Hero from "./components/Hero";
import Grid from "./components/Grid";
import { FloatingNavBar } from "./components/ui/FloatingNavBar";
import { FaHome } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import RecentProjects from "./components/RecentProjects";
import Experience from "./components/Experience";
import { navItems } from "@/data";
import MyApproach from "./components/MyApproach";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center
    items-center flex-col overflow-hidden mx-auto
    sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNavBar navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
        {/* <MyApproach /> */}
      </div>
    </main>
  );
}
