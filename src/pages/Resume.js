import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import style from './pagesCss/Resume.module.css'
export default function Resume(){
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={style.ResumeContainer}>
          <h1>
            <a
              href="/resume/software-engneering-Perscholas.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Resume PDF
            </a>
          </h1>
        </div>
      </motion.div>
    );
}