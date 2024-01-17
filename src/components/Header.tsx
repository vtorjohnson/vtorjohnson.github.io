import { WorkReferences } from "@/constants";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Header = () => {
  return (
    <div className="w-full h-[65px] fixed top-0  shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/VictoryMobileDevelopmentIconLogo_Only.png"
            alt="logo"
            width={50}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Protfilio
          </span>
        </a>

        <div className="w-[400px] h-full flex flex-row items-center justify-between md:mr-20"></div>

        <div className="flex flex-row gap-5">
          {WorkReferences.map((reference) => (
            <Image
              src={reference.src}
              alt={reference.name}
              key={reference.name}
              width={24}
              height={24}
            />
          ))}
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
