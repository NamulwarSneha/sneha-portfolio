import { Component } from "react";
import { TailSpin } from 'react-loader-spinner';
import EachProject from "../EachProject";
import EachProjectHome from "../EachProjectHome";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";
import Contact from "../Contact/Contact";
const categoriesList = [
  { id: "ALL", displayText: "All" },
  { id: "STATIC", displayText: "Static" },
  { id: "RESPONSIVE", displayText: "Responsive" },
  { id: "DYNAMIC", displayText: "Dynamic" },
  { id: "REACT", displayText: "React" },
];
const apiStatusList = {
  initial: "INITIAL",
  inprogress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};
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
    ProjectName: "NXT TRENDS",
    ImageUrl:
      "https://res.cloudinary.com/dhsz1cq0y/image/upload/v1720418308/NXT-TRENDS-IMG_jqibix.png",
    LiveLink: "https://shivasaipr22.ccbp.tech/login",
    GitHubUrl: "https://github.com/shivasai2828",
    TechnologiesUsed: ["react", "flexBox", "Grid"],
    VIEW: "www.linkedin.com/in/shivasai-boddu",
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
class ProjectSection extends Component {
  state = {
    apiStatus: apiStatusList.initial,
    dataList: [],
    tabId: "ALL",
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    this.setState({
      apiStatus: apiStatusList.inprogress,
    });
    const { tabId } = this.state;
    const api = `https://apis.ccbp.in/ps/projects?category=${tabId}`;
    const response = await fetch(api);

    if (response.ok) {
      const data = await response.json();
      const updateData = data.projects.map((eachList) => ({
        id: eachList.id,
        name: eachList.name,
        imageUrl: eachList.image_url,
      }));
      console.log(updateData);
      this.setState({ apiStatus: apiStatusList.success, dataList: updateData });
    } else {
      this.setState({ apiStatus: apiStatusList.failure });
    }
  };
  setTab = (event) => {
    console.log(event.target.value);

    this.setState({ tabId: event.target.value }, this.getData);
  };
  renderSuccessView = () => {
    const { dataList } = this.state;
    return (
      <ul className="success-view">
        {dataList.map((eachList) => (
          <EachProject key={eachList.id} eachList={eachList} />
        ))}
      </ul>
    );
  };
  renderLoader = () => (
    <div data-testid="loader" className="products-loader-container">
      <TailSpin
        height={50}
        width={50}
        color="blue"
        riaLabel="loading"
      />

    </div>
  );
  retry = () => {
    this.getData();
  };
  failureView = () => {
    return (
      <div className="failure-view-box">
        <img
          className="failure-img"
          src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
          alt="failure view"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>We cannot seem to find the page you are looking for.</p>
        <button onClick={this.retry} type="button" className="btn">
          Retry
        </button>
      </div>
    );
  };
  getFinelView = () => {
    const { apiStatus } = this.state;
    // eslint-disable-next-line default-case
    switch (apiStatus) {
      case apiStatusList.inprogress:
        return this.renderLoader();
      case apiStatusList.success:
        return this.renderSuccessView();
      case apiStatusList.failure:
        return this.failureView();
    }
  };
  moreProjects = () => {
    return (
      <>
        <h1 className="more-pr-title">
          More <span>Fav</span> Projects
        </h1>
        <ul className="home-projects-section">
          {ProjectsDeatails.map((eachprojectDetails) => (
            <EachProjectHome
              key={eachprojectDetails.id}
              eachprojectDetails={eachprojectDetails}
            />
          ))}
        </ul>
      </>
    );
  };
  render() {
    return (
      <>
        <Header />
        <ul className="nav-box">
          <li>
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
              alt="website logo"
            />
          </li>
        </ul>
        <div className="bg-main">
          <select className="select-input" onChange={this.setTab}>
            {categoriesList.map((eachList) => (
              <option key={eachList.id} value={eachList.id}>
                {eachList.displayText}
              </option>
            ))}
          </select>
          {this.getFinelView()}
        </div>
        <this.moreProjects />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default ProjectSection;