function Skill() {
  return (
    <section id="skills" className="container my-5">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <h5>JavaScript</h5>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <h5>React.js</h5>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              65%
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <h5>Node.js</h5>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "45%" }}
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <h5>Html</h5>
          <div className="progress">
            <div
              className="progress-bar bg-secondary"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <h5>Express JS</h5>
          <div className="progress">
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: "35%" }}
              aria-valuenow="35"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              35%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
