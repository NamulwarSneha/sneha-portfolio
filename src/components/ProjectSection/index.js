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
    id: 6,
    ProjectName: "Todo Application",
    ImageUrl:
      "https://res.cloudinary.com/dtcscyzn5/image/upload/v1748338167/visitedCountries_ytrbde.jpg",
    LiveLink: "https://todos-app-five-chi.vercel.app/",
    GitHubUrl: "https://github.com/NamulwarSneha/todos-app",
    TechnologiesUsed: ["HTML5", "CSS3", "JS"],
    VIEW: "https://www.linkedin.com/in/sneha-namulwar-4b5374bb/",
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