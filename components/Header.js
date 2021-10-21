import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-around sm:max-w-lg">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserCircleIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
