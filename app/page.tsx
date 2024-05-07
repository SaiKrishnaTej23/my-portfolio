import Image from "next/image";
import profile from '../public/images/profile/profile.png'
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-between p-24">
      <div className="w-1/2 px-20">
        <Image src={profile} alt="teja" className="w-full h-auto" />
      </div>
      <div className="w-1/2 px-4 flex flex-col">
        <AnimatedText text="Turning Vision Into Reality With Code And Design." className="text-6xl text-left" />
        <p className="font-medium mt-4">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
          Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>

        <div className="flex items-center self-start mt-2">
          <Link href="/SKTReact.pdf" target="_blank" download={true}
            className="flex items-center bg-black text-white 
            font-semibold border-solid border-2 border-transparent border-black rounded-full px-6 py-2
            hover:bg-white hover:text-black mr-2 hover:border-black">
            Resume
            <LinkArrow className="w-6 ml-2" />
          </Link>
          <Link href="mailto:teja.pothapragada@gmail.com" target="_blank"
          className="ml-4 text-lg font-medium capitalize text-black underline">Contact</Link>
        </div>
      </div>
    </div>
  );
}
