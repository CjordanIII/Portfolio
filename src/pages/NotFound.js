
import { Link } from "react-router-dom";


export default function NotFound(){
    return (
      <div>
        <h1>OOps did something wrong</h1>
        <h3>
          <Link to="/">Home</Link>
        </h3>
      </div>
    );
}