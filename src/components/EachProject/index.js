import "./index.css";
const EachProject = (props) => {
  const { eachList } = props;
  const { name, imageUrl } = eachList;
  return (
    <li className="each-list-item">
      <img className="project-img" src={imageUrl} alt={name} />
      <p>{name}</p>
    </li>
  );
};

export default EachProject;