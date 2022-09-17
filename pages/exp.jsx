import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

export default function exp() {
  return (
    <div className="bg-light">
      <Navbar />
      <hr />
      <div className="project_exp">Project Experience</div>
      {/* <!-- exp card --> */}
      <div className="card">
        <img className="card-img-top" src="/capy2.jpg" />
        <div className="card-body">
          <h5 className="card-title">Capybarian</h5>
          <p className="card-text">This is my first digital art collection.</p>
          <a
            href="https://drive.google.com/drive/folders/16HHGrJtdTzC8AS7NcT4CXZ6RUENQ94ir?usp=sharing"
            target="_blank"
            className="btn btn-warning"
          >
            Check it out !
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" src="/hubie.png" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Hubie</h5>
          <p className="card-text">Hubie is my C++ text based game project.</p>
          <a
            href="https://github.com/ChonlananT/kidmaiaok"
            target="_blank"
            className="btn btn-warning"
          >
            Check it out !
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" src="/bosss.png" />
        <div className="card-body">
          <h5 className="card-title">Entaneer Dungeon</h5>
          <p className="card-text">
            Currently making scratch game with my team
          </p>
          <a
            href="https://scratch.mit.edu/projects/731801631/editor"
            target="_blank"
            className="btn btn-warning"
          >
            Check it out !
          </a>
        </div>
      </div>
    </div>
  );
}
