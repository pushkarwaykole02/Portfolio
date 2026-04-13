import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I&apos;m</h2>
            <h1>
              PUSHKAR
              <br />
              <span>WAYKOLE</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Frontend / Full-Stack</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Web Developer</div>
              <div className="landing-h2-2">React.js</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Cloud & APIs</div>
              <div className="landing-h2-info-1">UI Development</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
