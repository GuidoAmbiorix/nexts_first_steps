import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "..";

const temporalAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = async () => {
  await temporalAsync();
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-4 m-2 rounded-lg gap-3">
      <Link href={"/"} className="flex items-center ">
        <HomeIcon className="mr-1" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
