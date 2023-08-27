import { useSelector } from "react-redux/es/hooks/useSelector";
import style from "../pages/pagesCss/Portfolio.module.css";




export default function Projects() {
  const projects = useSelector((state) => state.project.projectsData);
  console.log(projects);

  const projectsName = projects.map((nameData) => (
    <div className={style.projectNameContainer}>
      <a href={nameData.deployed} target="_blank" rel="noreferrer">
        {nameData.name}
      </a>
      <a href={nameData.repo} target="_blank" rel="noreferrer">
        repo
      </a>
    </div>
  ));
  return(
  <>
    {projectsName}
  
  
  
  </>);
}
