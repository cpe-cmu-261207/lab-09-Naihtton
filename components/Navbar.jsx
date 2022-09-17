import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
      <div 
      className="d-flex gap-5 justify-content-center fs-3 align-items-lg-center"
      style={{height:100}} >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/exp">
          <a>Experience</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/lab-07">
          <a>Lab-07</a>
        </Link>
      </div> 
  );
}