import React from "react";

import Education from "./Education";
import arrow from "../../images/arrow.png";
import JHP from "../../images/psp2.jpg";
import upArrow from "../../images/upArrow.png";
// import ProgressBar from "../../helpers/ProgressBar";

export default function About() {
  return (
    <div>
      {/* <ProgressBar /> */}
      <div>
        <div
          className="profilePicContent d-flex justify-content-center align-items-center flex-wrap m-5"
          id="mainSection"
        >
          <picture className="p-5 profilepic">
            <img
              src={JHP}
              alt="me"
              loading="lazy"
              className="rounded"
              style={{
                width: "330px",
                height: "330px",
              }}
            />
          </picture>
          <div className="mx-5">
            <h1 className="headings text-center my-4">About Me</h1>
            <p
              className="aboutDescription lh-lg"
              style={{ textAlign: "justify" }}
            >
              I'm a{" "}
              <span style={{ color: "#8ffbf7" }}>Full Stack Developer</span>,
              An enthusiastic hardworking self-confidence self-motivated and excited
          programmer, Who likes to involve in the projects all.I really interest
          to learn new technologies and implement them. I am focus on completing
          the work given to me on time
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <a href="#section1">
            <img src={arrow} alt="arrow" title="Scroll Down" />
          </a>
        </div>
        <div className="">
          <Education />
        </div>
        <div className="upArrow d-flex flex-column flex-wrap align-items-end">
          <div>
            <a href="#mainSection">
              <img src={upArrow} alt="upArrow" />
            </a>
          </div>
          <div className="mt-0 px-3">Top</div>
        </div>
      </div>
    </div>
  );
}
