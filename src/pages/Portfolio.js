import {Link} from 'react-router-dom'
import style from './pagesCss/Portfolio.module.css'
import { motion } from "framer-motion";
import { useSelector } from 'react-redux/es/hooks/useSelector';
export default function Portfilio(){
  // Move logic to a componit later
  const projects = useSelector((state) => state.project.projectsData);
  console.log(projects)

  const projectsName = projects.map((nameData) => (
    <div className={style.projectNameContainer}>
      
        <a href={nameData.deployed} target="_blank">
          {nameData.name}
        </a>
        <a href={nameData.repo} target='_blank'>repo</a>
      
    </div>
  ));

 
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={style.portfilioContainer}>
          <h1>Portfolio</h1>
          
            {projectsName}
          

          <h1>
            <Link
              style={{ textDecorationLine: "none", color: "#fdfffe" }}
              to="/portfolio/additional-info"
            >
              Additional info
            </Link>
          </h1>
        </div>
      </motion.div>
    );
}