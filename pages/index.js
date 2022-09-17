import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-light">
      <Navbar />
      <hr />
      <div className="intro">
        <Image
          src="/me1.png"
          alt="me"
          width={250}
          height={250}
          className="p-3 rounded-circle left "
        />

        <div className="home_intro">
          <h4>Thian Suwannakul</h4>
          <div>
            Hello I'm Thian, I'm currently study in Computer Engineering at
            Chiangmai University. I love many things in this path of career so I
            keep improving my self all the time !
          </div>
          <Link href="/contact">
            <a>
              <button className="btn btn-secondary">knows me</button>
            </a>
          </Link>
        </div>
      </div>
      <hr />
      <div className="mt-5 d-flex justify-content-center mb-5">
        <h2>My Skills</h2>
      </div>
      <div className="skills">Programing Skills</div>
      <div className="images">
        <img src="/icon-1.png" alt="" />
        <img src="/icon-2.png" alt="" />
        <img src="/icon-3.png" alt="" />
        <img src="/icon-6.png" alt="" />
        <img src="/c++.png" alt="" />
        <img src="/python.png" alt="" />
      </div>
      <div className="skills">Soft Skills</div>
      <div className="softskills">
        <li>Fast learning</li>
        <li>Good in English</li>
        <li>Entertainment things</li>
        <li>Touch-typing</li>
      </div>
    </div>
  );
}
