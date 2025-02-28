import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Home(props) {
  return (
    <div className="container justify-content-center">
      <div className="row align-items-center my-4" id="home">
        {/* Text Section */}
        <div className="col-md-6 text-center">
          <img
            src="/pppp.JPG"
            className="img-fluid rounded-circle"
            alt="Rohit Kumar Jaiswal"
            style={props.image}
          />
        </div>
        <div className="col-md-6 text-center text-md-start my-3">
          <h1>Hello,</h1>
          <p>
            I'm <strong>Rohit Kumar Jaiswal</strong>.
          </p>
          <a type="button" href="#home" className="btn btn-dark btn-lg my-3">
            Connect Me
          </a>
          <div className="my-3">
            {/* Social Icons */}
            <a
              href="https://github.com/RkJaiswal3"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-k-jaiswal-655402200/"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100006174610268"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>

        {/* Image Section */}
      </div>
    </div>
  );
}

export default Home;
