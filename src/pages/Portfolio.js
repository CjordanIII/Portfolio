import {Link} from 'react-router-dom'
import style from './pagesCss/Portfolio.module.css'


export default function Portfilio(){
    return (
      <div>
   
        <h1>Portfolio</h1>
        <h1>
          <Link to="/">Back</Link>
        </h1>
        <h1>
          <Link to="/portfolio/additional-info">Additional info</Link>
        </h1>
      </div>
    );
}