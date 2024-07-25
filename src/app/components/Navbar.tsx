import React from "react";
import Link from "next/link";
import { RiHomeSmileFill } from "react-icons/ri";

interface LinkData {
  href: string;
  label: string;
}

interface NavbarProps {
  links: LinkData[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className=" w-full flex   bg-sky-500">
      <Link className="flex items-center p-2" href="/">
        <h1 className="text-2xl text-center ">SMB</h1>
        <RiHomeSmileFill size="28" />
      </Link>
      <ul className="flex w-full flex-row justify-end gap-4 p-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
