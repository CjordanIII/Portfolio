import {Link} from 'react-router-dom'
import style from './pagesCss/Portfolio.module.css'
import { motion } from "framer-motion";
import Projects from '../components/Projects';
export default function Portfilio(){

 
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={style.portfilioContainer}>
          <h1>Portfolio</h1>

          <Projects />

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