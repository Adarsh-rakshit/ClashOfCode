"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../../lib/utils";
import Link from "next/link";
import Image from "next/image";

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  
  return (
    <div className={cn("fixed top-2 inset-x-0 max-w-md mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Image
          src=""
          alt="logo"
          width={35}
          height={35}
        />
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Contests">
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Hackathons">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/coming-soon">Coming soon</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
