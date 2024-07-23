import React from "react";
import Link from "next/link";

interface LinkData {
  href: string;
  label: string;
}

interface NavbarProps {
  links: LinkData[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className=" w-full flex  justify-end bg-sky-500">
      <ul className="flex flex-row gap-4 p-4">
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
