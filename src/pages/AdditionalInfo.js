import {Link} from 'react-router-dom'
import { motion } from "framer-motion";
import style from './pagesCss/Additional.module.css'

export default function AdditionalInfo(){
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={style.additionalInfoContainer}>
          <h1>Additional Info</h1>
          <p>
            coming soon ...
          </p>
          <h1>
            <Link
              style={{ textDecorationLine: "none", color: "#fdfffe" }}
              to="/portfolio"
            >
              Back
            </Link>
          </h1>
        </div>
      </motion.div>
    );
}