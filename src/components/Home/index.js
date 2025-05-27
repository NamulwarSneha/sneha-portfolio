import { Component } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

import Footer from "../Footer";

import "./index.css";
import Header from "../Header";
import EachProjectHome from "../EachProjectHome";
const ProjectsDeatails = [
  {
    id: 1,
    ProjectName: "JOBBY APP",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/JOBBY-APP-IMG_peos85.png",
    LiveLink: "https://shivasaipr22.ccbp.tech/login",
    GitHubUrl: "https://github.com/shivasai2828",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
  },

  {
    id: 2,
    ProjectName: "TASK MANAGEMENT SYSTEM",
    ImageUrl:
      "https://res.cloudinary.com/dtcscyzn5/image/upload/v1747820764/TMS_bvga5u.jpg",
    LiveLink: "https://task-management-system-ebon.vercel.app/",
    GitHubUrl: "https://github.com/NamulwarSneha/TaskManagementSystem",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "https://www.linkedin.com/in/sneha-namulwar-4b5374bb/",
  },
  {
    id: 3,
    ProjectName: "NXT WATCH",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/NXT-WACTH-IMG_dylayf.png",
    LiveLink: "https://shivasaipr22.ccbp.tech/login",
    GitHubUrl: "https://github.com/shivasai2828/Nxt-Watch-Mini-Project.git",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
  },
  {
    id: 4,
    ProjectName: "Rock-Paper-ScissorsRock-Paper-Scissor",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/ROCK-PAPER_p70f69.png",
    LiveLink: "https://shivasaipr22.ccbp.tech/login",
    GitHubUrl: "https://github.com/shivasai2828/Rock-Paper-Scissors.git",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
  },
  {
    id: 5,
    ProjectName: "Wikipedia Search Aplication",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/WIKI-IMG_cbi5e3.png",
    LiveLink: "https://shivasaiwikipr1.ccbp.tech/",
    GitHubUrl: "https://github.com/shivasai2828/",
    TechnologiesUsed: ["HTML5", "CSS3", "JS"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
  },
  {
    id: 6,
    ProjectName: "Todo Application",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/TODO-APP-IMG_dterc8.png",
    LiveLink: "https://shivasailudo.ccbp.tech/",
    GitHubUrl: "https://github.com/shivasai2828/",
    TechnologiesUsed: ["HTML5", "CSS3", "JS"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
  },
];
class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-bg">
          <div className="home-wrapper">
            <div className="home-row-sider">
              <article className="home-content">
                <h1 className="home-name">I am Sneha Namulwar</h1>
                <p className="home-role">Frontend Developer</p>
                <ul>
                  <li>
                    <a
                      className="links"
                      href="https://www.linkedin.com/in/sneha-namulwar-4b5374bb/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn className="social-icons" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/NamulwarSneha"
                      target="_blank"
                      className="links"
                      rel="noreferrer"
                    >
                      <ImGithub className="social-icons" />
                    </a>
                  </li>
                  
                </ul>
                <a href="/About">
                  <button className="btn">More About Sneha</button>
                </a>
              </article>
              <article>
                <img
                  className="user-img"
                  src="https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="user-img"
                />
              </article>
            </div>
          </div>
        </div>
        <div className="home-projects">
          <h1 className="projects-title">My Projects</h1>
          <ul className="home-projects-section">
            {ProjectsDeatails.map((eachprojectDetails) => (
              <EachProjectHome
                key={eachprojectDetails.id}
                eachprojectDetails={eachprojectDetails}
              />
            ))}
          </ul>
          <a href="/Projects">
            <button style={{ "margin-left": "120px" }} className="btn prg-btn">
              ALL MY PROJECTS
            </button>
          </a>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;