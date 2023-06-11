import React from "react";
import Link from "next/link";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Logo />
      <nav>
        <Link href="/" target={"_blank"}>
          Linkedin
        </Link>
        <Link href="/" target={"_blank"}>
          GitHub
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
