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
    ProjectName: "VISITED COUNTRIES",
    ImageUrl:
      "https://res.cloudinary.com/dtcscyzn5/image/upload/v1748338167/visitedCountries_ytrbde.jpg",
    LiveLink: "https://vercel.com/snehas-projects-70f8061b/visited-countries",
    GitHubUrl: "https://github.com/NamulwarSneha/visited-countries",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "https://www.linkedin.com/in/sneha-namulwar-4b5374bb/",
  },

  {
    id: 2,
    ProjectName: "TASK MANAGEMENT SYSTEM",
    ImageUrl:
      "https://res.cloudinary.com/dtcscyzn5/image/upload/v1747820764/TMS_bvga5u.jpg",
    LiveLink: "https://task-management-system-m13o.vercel.app/",
    GitHubUrl: "https://github.com/NamulwarSneha/TaskManagementSystem",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "https://www.linkedin.com/in/sneha-namulwar-4b5374bb/",
  },
  {
    id: 3,
    ProjectName: "NXT WATCH",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/NXT-WACTH-IMG_dylayf.png",
    LiveLink: "https://github.com/NamulwarSneha/nxt-watch",
    GitHubUrl: "https://github.com/NamulwarSneha/nxt-watch",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "https://www.linkedin.com/in/sneha-namulwar-4b5374bb/",
  },
  {
    id: 4,
    ProjectName: "Rock-Paper-Scissors",
    ImageUrl:
      "https://res.cloudinary.com/dtcscyzn5/image/upload/v1748335796/rps-image_q9lq3u.jpg",
    LiveLink: "https://rock-app-teal.vercel.app/",
    GitHubUrl: "https://vercel.com/snehas-projects-70f8061b/rock-app",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "https://www.linkedin.com/in/sneha-namulwar-4b5374bb/",
  },
  {
    id: 5,
    ProjectName: "Todo Application",
    ImageUrl:
      "https://res.cloudinary.com/dtcscyzn5/image/upload/v1748338167/visitedCountries_ytrbde.jpg",
    LiveLink: "https://todos-app-five-chi.vercel.app/",
    GitHubUrl: "https://github.com/NamulwarSneha/todos-app",
    TechnologiesUsed: ["HTML5", "CSS3", "JS"],
    VIEW: "https://www.linkedin.com/in/sneha-namulwar-4b5374bb/",
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
