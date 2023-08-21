import React from "react";
import "./Skill.css";
const Skill = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My Skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">INTERNSHIP</div>
              <p>
                <li className="intern">#MK Smart Technologies</li>
                <li className="intern">#Company Name "Where You work"</li>
                <li className="intern">#Company Name "Where You work"</li>
              </p>

              <br />
              <div className="text">PROJECT</div>

              <p>
                <li className="project">
                 Personal Portfolio (HTML, CSS, Bootstrap , React-Bootstrap ,React JS)
                </li>
                <li className="project">
                  MK Smart Technologies Website (HTML, CSS, React-Bootstrap,React JS)
                </li>
                <li className="project">
                  GPS Tracking (HTML, CSS, React-Bootstrap,React JS)
                </li>
                <li className="project">
                  Fully Responsive Design Email Subscribe form
                </li>
                <li className="project">Blog (HTML, CSS, Bootstraps)</li>
                
              </p>

              <br />
              <div className="text">DEVELOPMENT SKILLS</div>

              <p>
                I'm familiar & work on a daily basis with HTML, CSS, JavaScript,
                Bootstrap, React js and other modern frameworks.
              </p>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>Html</span>
                  <span>90%</span>
                </div>
                <div className="line python"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>CSS</span>
                  <span>90%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Bootstraps</span>
                  <span>80%</span>
                </div>
                <div className="line bootstraps"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>60%</span>
                </div>
                <div className="line js"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>React Js</span>
                  <span>50%</span>
                </div>
                <div className="line django"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
