import { Link } from "react-router-dom";


export default function Resume(){
    return (
      <div>
        <h1>
          <a
            href="/resume/software-engneering-Perscholas.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Resume PDF
          </a>
        </h1>
        <h1>
          <Link to="/">Back</Link>
        </h1>
      </div>
    );
}