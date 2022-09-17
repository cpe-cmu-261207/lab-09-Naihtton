import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function contact() {
  return (
        
  <body>   
    <div class="bg-light">
    <Navbar/>
      <div class="profile_container">
        <Image
          src="/profilepic.png"
          alt="me"
          width={250}
          height={250}
          className="p-1 rounded-circle"
        />
      </div>

      <div class="contact_info">
        <div>My contact</div>
      </div>

      <div className="social_media">
        <Link href="https://www.facebook.com/thiankul/"
          target="_blank"
          className='fa fa-facebook'
          >
          <a></a>
        </Link>
        <Link href="https://www.instagram.com/thian_pouse/"
          target="_blank"
          className="fa fa-instagram">  
          <a></a>
        </Link>
        <Link href="https://www.linkedin.com/in/thian-suwannakul-735a10236/"
          target="_blank"
          className="fa fa-linkedin">
          <a></a>
        </Link>
        <Link href="mailto: thian_s@cmu.ac.th" class="fa fa-envelope">
          <a></a>
        </Link>
      </div>
      <div className="tel">Tel. +66846984370</div>
    </div>
  </body>
  )
}
