import {Link} from 'react-router-dom'
import style from './pagesCss/Introduction.module.css'
import {motion} from "framer-motion"
import QuotesAPI  from "../components/QuotesAPI";
export default function Interduction(){
 
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={style.AppContainer}>
          <p>
            Hi, I'm Clarence, a passionate software engineer. With a knack for
            <br />
            problem-solving and a love for coding, I'm on a journey to create
            <br />
            innovative solutions that make an impact. My education and
            experience
            <br />
            have equipped me with a diverse skill set. I thrive on challenges
            and
            <br />
            believe in the power of technology to transform ideas into reality.
            <br />
            Let's connect and explore how we can bring creativity and
            <br />
            functionality to the digital world!
            <br />
          </p>
          <div className={style.Links}>
            <Link
              style={{ textDecorationLine: "none", color: "#fdfffe" }}
              to="/portfolio"
            >
              <h1 className={style.Link}>Portfolio</h1>
            </Link>
            {/* add icons */}
            <div className={style.icon}>
              <i
                className="devicon-github-original-wordmark "
                style={{ fontSize: "100px" }}
              ></i>
              <i
                class="devicon-react-original-wordmark"
                style={{ fontSize: "100px" }}
              ></i>

              <i
                class="devicon-javascript-plain"
                style={{ fontSize: "100px" }}
              ></i>

              <i
                class="devicon-mysql-plain-wordmark"
                style={{ fontSize: "100px" }}
              ></i>

              <i
                class="devicon-python-plain-wordmark"
                style={{ fontSize: "100px" }}
              ></i>

              <i
                class="devicon-html5-plain-wordmark"
                style={{ fontSize: "100px" }}
              ></i>

              <i
                class="devicon-css3-plain-wordmark"
                style={{ fontSize: "100px" }}
              ></i>
            </div>

            <Link
              style={{ textDecorationLine: "none", color: "#fdfffe" }}
              to="/portfolio/resume"
            >
              <h1 className={style.Link}>Resume</h1>
            </Link>
          </div>
          <QuotesAPI />
        </div>
      </motion.div>
    );
    
}