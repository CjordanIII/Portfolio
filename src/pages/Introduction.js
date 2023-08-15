import {Link} from 'react-router-dom'


export default function Interduction(){
    return (
      <div>
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
        <h1>
          <Link to="/portfolio">Portfolio</Link>
        </h1>
        <h1>
          <Link to="/portfolio/resume">Resume</Link>
        </h1>
      </div>
    );
}