import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconRecordMail,
  IconSend,
} from "@tabler/icons";

export default function contact() {
  return (
    <div className="bg-light">
      <Navbar />
      <hr />
      <div className="profile_container">
        <Image
          src="/profilepic.png"
          alt="me"
          width={250}
          height={250}
          className="p-1 rounded-circle"
        />
      </div>

      <div className="contact_info">
        <div>My contact</div>
      </div>

      <div className="social_media">
        <Link href="https://www.facebook.com/thiankul/">
          <a target="_blank" rel="noreferrer" className="fa">
            <IconBrandFacebook />
          </a>
        </Link>
        <Link href="https://www.instagram.com/thian_pouse/">
          <a target="_blank" className="fa">
            <IconBrandInstagram />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/thian-suwannakul-735a10236/">
          <a target="_blank" className="fa">
            <IconBrandLinkedin />
          </a>
        </Link>
        <Link href="mailto: thian_s@cmu.ac.th">
          <a className="fa">
            <IconMail />
          </a>
        </Link>
      </div>
      <div className="tel">Tel. +66846984370</div>
    </div>
  );
}
