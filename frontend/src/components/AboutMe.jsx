function AboutMe(props) {
  return (
    <div className="container">
      <div
        className="row my-4"
        style={{ ...props.row, backgroundColor: "#e3f2fd", height: "300px" }}
        id="about"
      >
        <div className="col-md-12 my-4">
          <h3>
            <center>About Me</center>
          </h3>
          <p
            style={{ fontFamily: "sans-serif", textAlign: "center" }}
            className="my-2"
          >
            Hi, I'm <strong> Rohit K.J</strong>, a passionate{" "}
            <strong>React Developer </strong>
            with a strong foundation in front-end development, committed to
            creating responsive, dynamic, and user-friendly web applications.
            Seeking to contribute my skills in React.js and modern web
            technologies to a forward-thinking development team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
