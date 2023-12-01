import React from "react";
import CustomLink from "./custom-link";

const Navbar = () => {
  return (
    <nav className="container flex w-full p-10 bg-green-100 ">
      <CustomLink link="/" name="Home" />
      <CustomLink link="/dashboard" name="Dashboard" />
    </nav>
  );
};

export default Navbar;
