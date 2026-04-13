import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Engineering</h4>
                <h5>Vidyalankar Institute of Technology, Mumbai</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Currently pursuing B.Tech with a CGPA of 9.3. Learning core
              computer science fundamentals along with modern web development,
              data structures & algorithms, and software engineering practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC</h4>
                <h5>New English High School &amp; Junior College, Ulhasnagar</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Completed Higher Secondary education with a score of 63%, laying
              the foundation for my engineering journey.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSC</h4>
                <h5>New English High School &amp; Junior College, Ulhasnagar</h5>
              </div>
              <h3>2011 - 2021</h3>
            </div>
            <p>
              Completed Secondary School with a score of 90%, with strong
              fundamentals in mathematics and science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
