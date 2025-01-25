// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-6 mb-3 text-start">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#about" className="text-light text-decoration-none">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-light text-decoration-none">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-light text-decoration-none">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-6 mb-3 text-start">
            <h5>Contact</h5>
            <p>
              Email:{" "}
              <a href="mailto:rohitrkj929@gmail.com" className="text-light">
                rohitrkj929@gmail.com
              </a>
            </p>
            <p>
              Phone:&nbsp;
              <a href="tel: +9779818417161 " className="text-light">
                +977-9818417161
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} RKJ. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
