import { Component } from "react";

import "./index.css";
import Header from "../Header";
import Footer from "../Footer";
import TimelineView from "../TimelineView";
import Contact from "../Contact/Contact";
const skillsSet = [
  {
    id: 1,
    name: "HTML5",
    imgUrl:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1712139571/HTML5_Input_Types_Alternative-removebg-preview_nskafi.png",
  },
  {
    id: 2,
    name: "CSS3",
    imgUrl:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1712139571/CSS_Flip_Animation-removebg-preview_sh4fco.png",
  },
  {
    id: 3,
    name: "BOOTSTRAP",
    imgUrl:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1709472150/Bootstrap-removebg-preview_opsbke.png",
  },
  {
    id: 4,
    name: "JAVA SCRIPT",
    imgUrl:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1712139571/10_Best_Cheat_Sheets_That_A_Programmer_Must_Have-removebg-preview_daf4wt.png",
  },
  {
    id: 5,
    name: "REACT JS",
    imgUrl:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1712150985/Windows_Vista__70-620__Part_1__Install_and_Getting_Started-removebg-preview_dlar2d.png",
  },
  {
    id: 6,
    name: "NODE JS",
    imgUrl:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1709472150/NodeJS_logo-removebg-preview_xykl3k.png",
  },
  {
    id: 7,
    name: "EXPRESS JS",
    imgUrl:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1709472151/A_Quick_Guide_to_Handling_Express_js_Errors_in_Your_Application-removebg-preview_z3ud1h.png",
  },
  {
    id: 8,
    name: "SQL",
    imgUrl:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1709472150/SQL_Basics___Hands-On_Beginner_SQL_Tutorial_Analyzing_Bike-Sharing-removebg-preview_a0aug6.png",
  },
  {
    id: 9,
    name: "MONGO DB",
    imgUrl:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1709472151/MongoDB_affine_l_%C3%A9quilibrage_de_charge_avec_sa_version_2_4_-_Le_Monde_Informatique-removebg-preview_1_ppnpok.png",
  },
  {
    id: 10,
    name: "PYTHON",
    imgUrl:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1709472151/download__2_-removebg-preview_sjc7gv.png",
  },
];
const certificatesArray = [
  {
    id: 1,
    name: "STATIC-WEBDEV",
    img: "https://res.cloudinary.com/dtcscyzn5/image/upload/v1747723350/static_zcvdjp.png",
    LinkUrl:
      "https://certificates.ccbp.in/intensive/static-website?id=FBNFURQFVK",
  },
  {
    id: 2,
    name: "RESPONSIVE",
    img: "https://res.cloudinary.com/dtcscyzn5/image/upload/v1747723759/responsive_plq6e1.png",
    LinkUrl:
      "https://certificates.ccbp.in/intensive/responsive-website?id=FMKENWUUMM",
  },
  {
    id: 3,
    name: "JAVA-SCRIPT",
    img: "https://res.cloudinary.com/dtcscyzn5/image/upload/v1747724406/javascript_yy1inv.png",
    LinkUrl:
      "https://certificates.ccbp.in/intensive/javascript-essentials?id=TCVXHVEKSB",
  },
  {
    id: 4,
    name: "REACT-JS",
    img: "https://res.cloudinary.com/dtcscyzn5/image/upload/v1747724529/reactjs_nd71c9.png",
    LinkUrl: "https://certificates.ccbp.in/intensive/react-js?id=UAKBLOMZEF",
  },
  {
    id: 5,
    name: "NODE-JS",
    img: "https://res.cloudinary.com/dtcscyzn5/image/upload/v1747724484/nodejs_nynwea.png",
    LinkUrl: "https://certificates.ccbp.in/intensive/node-js?id=FYLVRNZMHU",
  },
  {
    id: 6,
    name: "SQL",
    img: "https://res.cloudinary.com/dtcscyzn5/image/upload/v1747724219/sql_vn5xvv.png",
    LinkUrl:
      "https://certificates.ccbp.in/intensive/introduction-to-databases?id=BBHVKUKHGZ",
  },
  {
    id: 7,
    name: "GIT",
    img: "https://res.cloudinary.com/dtcscyzn5/image/upload/v1747724301/git_hvuecf.png",
    LinkUrl:
      "https://certificates.ccbp.in/intensive/developer-foundations?id=WIXOZZWKSB",
  },
];
const timelineItemsList = [
  {
    id: "c6aad2fb-7673-45cf-9606-a335acc0cf4b",
    categoryId: "COURSE",
    title: "10 DECEMBER 2023",
    courseTitle: "Static Website",
    description:
      "Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.",
    duration: "10 days",
    tagsList: [
      {
        id: "c31b2ad8-f766-11eb-9a03-0242ac130003",
        name: "HTML Elements",
      },
      {
        id: "c31b2d08-f766-11eb-9a03-0242ac130003",
        name: "Class Attribute",
      },
      {
        id: "c31b2dee-f766-11eb-9a03-0242ac130003",
        name: "Text Properties",
      },
      {
        id: "c31b2eb6-f766-11eb-9a03-0242ac130003",
        name: "Bootstrap",
      },
      {
        id: "c31b2f6a-f766-11eb-9a03-0242ac130003",
        name: "Box Properties",
      },
      {
        id: "c31b347e-f766-11eb-9a03-0242ac130003",
        name: "Layout",
      },
      {
        id: "c31b358c-f766-11eb-9a03-0242ac130003",
        name: "Flexbox",
      },
    ],
  },
  {
    id: "a19d93d6-bdac-479e-b554-974ef9e6e66c",
    categoryId: "PROJECT",
    title: "21 DECEMBER 2023",
    projectTitle: "Tourism Website",
    description:
      "A tourism website enables the user to browse through the images of popular destinations.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",
    duration: "1 hr",
    projectUrl: "https://tourismapp.ccbp.tech/",
  },
  {
    id: "40b82899-fdf7-4a3e-a43a-41a9917b4582",
    categoryId: "COURSE",
    title: "5 JANUARY 2024",
    courseTitle: "Responsive Website",
    description:
      "Build a responsive website that appears beautifully on the screen of any size. Develop a personal portfolio website, an E-commerce product listing website and a website to host conferences and events.",
    duration: "12 days",
    tagsList: [
      {
        id: "551e2b7e-f767-11eb-9a03-0242ac130003",
        name: "Responsive Web Design",
      },
      {
        id: "551e2de0-f767-11eb-9a03-0242ac130003",
        name: "Multiple Layouts",
      },
      {
        id: "551e3114-f767-11eb-9a03-0242ac130003",
        name: "Column Wrapping",
      },
      {
        id: "551e31e6-f767-11eb-9a03-0242ac130003",
        name: "Navbar",
      },
      {
        id: "551e32a4-f767-11eb-9a03-0242ac130003",
        name: "Designing Layouts",
      },
      {
        id: "551e334e-f767-11eb-9a03-0242ac130003",
        name: "Inheritance",
      },
      {
        id: "551e3402-f767-11eb-9a03-0242ac130003",
        name: "CSS Gradients",
      },
    ],
  },
  {
    id: "ae2ede68-af77-427c-817c-0ce4beeb69c7",
    categoryId: "PROJECT",
    title: "7 JANUARY 2024",
    projectTitle: "Food Munch",
    description: "Food Much Website is a user-centric food tech website.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    duration: "2 hrs",
    projectUrl: "https://fm.ccbp.tech/",
  },
  {
    id: "4938c3d1-81cd-4729-9d2c-dcd50796aa4d",
    categoryId: "COURSE",
    title: "20 FEBRUARY 2024",
    courseTitle: "Dynamic Website",
    description:
      "Learn the fundamental concepts in JavaScript and apply them to build dynamic and interactive web applications like Counter, Guessing Game, Chat Web app, E-commerce web app, etc.",
    duration: "20 days",
    tagsList: [
      {
        id: "d4743c06-f767-11eb-9a03-0242ac130003",
        name: "Declaring Variables",
      },
      {
        id: "d4743ecc-f767-11eb-9a03-0242ac130003",
        name: "Comparison Operator",
      },
      {
        id: "d4743fe4-f767-11eb-9a03-0242ac130003",
        name: "Functions",
      },
      {
        id: "d47440d4-f767-11eb-9a03-0242ac130003",
        name: "Object",
      },
      {
        id: "d474434a-f767-11eb-9a03-0242ac130003",
        name: "DOM Manipulations",
      },
      {
        id: "d474443a-f767-11eb-9a03-0242ac130003",
        name: "Loops",
      },
      {
        id: "d4744516-f767-11eb-9a03-0242ac130003",
        name: "Local Storage",
      },
    ],
  },
  {
    id: "d6c4b3a5-7b1d-4906-aca8-823f44129004",
    categoryId: "PROJECT",
    title: "1 MARCH 2024",
    projectTitle: "Todos Application",
    description:
      "This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png",
    duration: "3 hrs",
    projectUrl: "https://todossapp.ccbp.tech/",
  },
  {
    id: "0a35abbe-22ca-40a1-81da-613f656b7702",
    categoryId: "PROJECT",
    title: "15 MARCH 2024",
    projectTitle: "Wikipedia Search Application",
    description:
      "Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png",
    duration: "4 hrs",
    projectUrl: "https://wikiseaarch.ccbp.tech/",
  },
  {
    id: "d80781c3-980e-4ab9-96ca-9ad1a9cdf93d",
    categoryId: "COURSE",
    title: "15 APRIL 2024",
    courseTitle: "RWD using Flexbox",
    description:
      "Learn to develop responsive layouts using CSS Flexbox and CSS Media Queries.",
    duration: "7 days",
    tagsList: [
      {
        id: "34e6b208-f768-11eb-9a03-0242ac130003",
        name: "Sizing Elements",
      },
      {
        id: "34e6b460-f768-11eb-9a03-0242ac130003",
        name: "Flexbox Layout",
      },
      {
        id: "34e6b76c-f768-11eb-9a03-0242ac130003",
        name: "Min & Max sizes",
      },
      {
        id: "34e6b83e-f768-11eb-9a03-0242ac130003",
        name: "Media Query Syntax",
      },
      {
        id: "34e6b8fc-f768-11eb-9a03-0242ac130003",
        name: "Logical Operators",
      },
      {
        id: "34e6ba28-f768-11eb-9a03-0242ac130003",
        name: "CSS box-sizing property",
      },
      {
        id: "34e6baf0-f768-11eb-9a03-0242ac130003",
        name: "Media Features",
      },
    ],
  },
  {
    id: "7bc3f006-f0f1-4574-924b-17c480556727",
    categoryId: "PROJECT",
    title: "20 MAY 2024",
    projectTitle: "Move Messenger",
    description:
      "The landing page of Move Messenger gives you a brief intro of Move Messenger. The landing page is responsive enabling to view it across various devices.",
    imageUrl:
      "https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png",
    duration: "5 hr",
    projectUrl: "https://movemessengers.ccbp.tech/",
  },
  {
    id: "e681e826-260c-4540-9ee5-f53d0e6ecba0",
    categoryId: "COURSE",
    title: "30 MAY 2024",
    courseTitle: "React JS - Getting Started",
    description:
      "Learn how to build dynamic web applications with the React JS library. When you finish this course, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.",
    duration: "18 days",
    tagsList: [
      {
        id: "94947ad2-f768-11eb-9a03-0242ac130003",
        name: "Components",
      },
      {
        id: "94947d52-f768-11eb-9a03-0242ac130003",
        name: "Lists",
      },
      {
        id: "94947e4c-f768-11eb-9a03-0242ac130003",
        name: "Conditional Rendering",
      },
      {
        id: "94947f14-f768-11eb-9a03-0242ac130003",
        name: "setState()",
      },
      {
        id: "94948270-f768-11eb-9a03-0242ac130003",
        name: "Updating Phase",
      },
      {
        id: "94948342-f768-11eb-9a03-0242ac130003",
        name: "Routing",
      },
      {
        id: "94948400-f768-11eb-9a03-0242ac130003",
        name: "API Calls",
      },
    ],
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "26 JUNE 2024",
    projectTitle: "Nxt Trendz",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://nxtz.ccbp.tech/",
  },
];

class About extends Component {
  certificateSection = () => {
    return (
      <>
        <h1 className="certificates-title">certifications</h1>
        <div className="certificates-each-section">
          {certificatesArray.map((each) => (
            <a
              className="each-box-certi"
              href={each.LinkUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img src={each.img} alt="img" />
              <p>{each.name}</p>
            </a>
          ))}
        </div>
      </>
    );
  };
  reactChronoSection = () => {
    return <TimelineView timelineItemsList={timelineItemsList} />;
  };
  contactSection = () => {
    return <div className="contact-bg"></div>;
  };
  skillsSection = () => {
    return (
      <>
        <div className="skills-main">
          <h1 className="skills-title">
            Technical <span className="skills-span">skills</span>
          </h1>
          <hr />
          <ul className="skills-container">
            {skillsSet.map((eachSkill) => (
              <li className="each-skill" key={eachSkill.id}>
                <img
                  className="skill-img"
                  src={eachSkill.imgUrl}
                  alt="skill-img"
                />
                <p>{eachSkill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  render() {
    return (
      <>
        <Header />
        <div className="bg-about">
          <div className="about-wrapper">
            <div className="about-rower">
              <article className="about-content">
                <h1 className="user-title-about"> My name is </h1>
                <h2 className="name-user">Sneha Namulwar</h2>
                <p>
                  Hi There, I'm Sneha and I am Mern-stack Web Developer. I
                  have developed many websites. I'm also learning more about frontend
                  Development Like Typescript and looking forward to be a Full
                  Stack Web Developer
                </p>
                <button className="btn ">Explore More</button>
              </article>
              <article className="about-img-box">
                <img
                  className="about-user-img"
                  alt="user-img"
                  src="https://res.cloudinary.com/dtcscyzn5/image/upload/v1748418128/snehaa-img_xmevzq.jpg"
                />
              </article>
            </div>
          </div>
        </div>
        {this.skillsSection()}
        {this.certificateSection()}
        <TimelineView timelineItemsList={timelineItemsList} />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default About;
