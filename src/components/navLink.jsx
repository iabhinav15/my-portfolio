"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`flex items-center justify-center gap-0.5 rounded p-2  font-medium hover:bg-black hover:text-white ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
      {link.icon}  {link.title}
    </Link>
  );
};

export default NavLink;
