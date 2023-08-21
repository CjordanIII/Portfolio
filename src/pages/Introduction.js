import {Link} from 'react-router-dom'
import style from './pagesCss/Introduction.module.css'
export default function Interduction(){
 
    return (
      <div className={style.AppContainer}>
        <p>
          Hi, I'm Clarence, a passionate software engineer. With a knack for
          <br />
          problem-solving and a love for coding, I'm on a journey to create
          <br />
          innovative solutions that make an impact. My education and experience
          <br />
          have equipped me with a diverse skill set. I thrive on challenges and
          <br />
          believe in the power of technology to transform ideas into reality.
          <br />
          Let's connect and explore how we can bring creativity and
          <br />
          functionality to the digital world!
          <br />
        </p>
        <div className= {style.Links}>
          <Link
            style={{ textDecorationLine: "none", color: "#fdfffe" }}
            to="/portfolio"
          >
            <h1 className={style.Link}>Portfolio</h1>
          </Link>

          <Link
            style={{ textDecorationLine: "none", color: "#fdfffe" }}
            to="/portfolio/resume"
          >
            <h1 className={style.Link}>Resume</h1>
          </Link>
        </div>
      </div>
    );
    
}