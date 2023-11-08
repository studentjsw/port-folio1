import React from "react";

import cap from "../../images/cap.png";
import exp from "../../images/exp.png";
import school from "../../images/school.png";
import onlineClass from "../../images/training.png";

export default function Education() {
  const titles = [
    {
      refer: "#section1",
      name: "-Education",
    },
    {
      refer: "#section2",
      name: "-Training & Certification",
    },
    {
      refer: "#section3",
      name: "-Experience",
    },
  ];

  const schools = [
    {
      image: cap,
      name: "computer science ",
      degree: "Master of engineering",
      place: "salem, Tamil nadu.",
      year: "2013",
      aggregate: "Percentage - 91%",
    },
    {
      image: school,
      name: "computer science ",
      degree: "Bachelor of Engineering",
      place: "salem , Tamilnadu.",
      year: "2011",
      aggregate: "Percentage - 82%",
    },
    {
      image: school,
      name: "Diploma in electronics and communication engineering",
      degree: "Mahendra polytechnic College ",
      place: "Nammakkal, Tamilnadu.",
      year: "2008",
      aggregate: "CGPA - 62%",
    },
  ];

  const training = [
    {
      image: onlineClass,
      course: "Full Stack Developer | MERN Stack",
      institute: "Guvi Geek Network Private Ltd.",
      certificate: "https://drive.google.com/file/d/1RSk4vuCavlY0KsmX6_AX1MeL57xZEstc/view?usp=drive_link",
    },
  ];

  const workPlace = [
    {
      image: exp,
      role: "Full stack projects",
     
    }
  ];

  return (
    <div className="d-flex flex-row justify-content-evenly flex-wrap">
      <div className="eduTitles mt-5 pt-5">
        {titles.map((title, index) => (
          <div className="mb-2" key={index}>
            <a className="text-decoration-none" href={title.refer}>
              {title.name}
            </a>
          </div>
        ))}
      </div>
      <div className="mt-5 d-flex flex-column flex-wrap align-content-around">
        <div className="main m-3" id="section1">
          <p style={{ visibility: "hidden" }}>.</p>
          <br />
          <h1 className="headings">Education</h1>
          {schools.map((school, index) => (
            <div key={index}>
              <div className="eduIconAndTitle mt-5 d-flex align-items-center">
                <div className="mx-2 pe-3">
                  <img src={school.image} alt="icons" />
                </div>
                <div>
                  <h2 className="degree">{school.degree}</h2>
                </div>
              </div>
              <div className="mx-5 px-4">
                <h5>
                  {school.name}, {school.place}
                </h5>
                <p>{school.course}</p>
                <p className="sizing">{school.aggregate}</p>
                <p className="sizing">{school.year}</p>
              </div>
              <hr className="w=100" />
            </div>
          ))}
        </div>

        <div className="main m-3" id="section2">
          <p style={{ visibility: "hidden" }}>.</p>
          <br />
          <h1 className="headings">Training & Certification</h1>
          {training.map((school, index) => (
            <div key={index}>
              <div className="eduIconAndTitle mt-5 d-flex align-items-center">
                <div className="mx-2 pe-2">
                  <img src={school.image} alt="icons" />
                </div>
                <div>
                  <h3 className="degree">{school.course}</h3>
                </div>
              </div>
              <div className="mx-5 px-4">
                <p className="sizing">{school.institute}</p>
                <a
                  href="https://drive.google.com/file/d/1RSk4vuCavlY0KsmX6_AX1MeL57xZEstc/view?usp=drive_link"
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="text-decoration-none"
                >
                  Certificate
                </a>
              </div>
              <hr className="w=100" />
            </div>
          ))}
        </div>

        <div className="main m-3" id="section3">
          <h1 className="headings my-5">Experience</h1>
          {workPlace.map((work, index) => (
            <div key={index}>
              <div className="mt-5 d-flex align-items-center">
                <div className="mx-2 pe-3">
                  <img src={work.image} alt="icon" />
                </div>
                <div>
                  <h2 className="degree">{work.role}</h2>
                </div>
              </div>
              <div className="mx-5 px-4">
                <h5>
                  {work.company}, {work.place}
                </h5>
                <p className="sizing">{work.year}</p>
              </div>
              <hr className="w-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
