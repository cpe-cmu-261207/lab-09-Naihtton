import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return(
  <body>
    <div className="bg-light">
      <Navbar />
      <div className="intro">
          <Image 
            src="/me1.png" 
            alt="me" 
            width={250}
            height={250}
            className="p-3 rounded-circle left " 
            />

          <div class="home_intro">
            <h4>Thian Suwannakul</h4>
            <div>Hello I'm Thian, I'm currently study in Computer Engineering at Chiangmai University. I love many things in this path of career so I keep improving my self all the time !</div>
            <Link href="/contact">
              <a>
                <button class="btn btn-secondary">knows me</button>
                </a>
          </Link>
          </div>
      </div>
    </div>
  </body>

  )
}
