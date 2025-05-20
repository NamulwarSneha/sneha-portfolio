import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./index.css";
const EachProjectHome = (props) => {
  const { eachprojectDetails } = props;
  const { ProjectName, GitHubUrl, LiveLink, ImageUrl, TechnologiesUsed } =
    eachprojectDetails;
  return (
    <li className="each-project-list-item">
      <img className="each-project-home-img" src={ImageUrl} alt="projectImg" />
      <div className="each-project-content">
        <h1 className="each-project-name">{ProjectName}</h1>
        <ul className="tech-names-ul">
          {TechnologiesUsed.map((eachTech) => (
            <li className="names-of-techs">{eachTech}</li>
          ))}
        </ul>
        <div className="each-projects-links">
          <Link className="links tech-names" to={LiveLink}>
            LIVE <FaExternalLinkAlt />
          </Link>
          <Link className="links tech-names" to={LiveLink}>
            VIEW
          </Link>
          <Link className="links tech-names" to={GitHubUrl}>
            GITHUB <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EachProjectHome;