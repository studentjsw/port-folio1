import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import github_icon from "../../images/github-icon.png";
import live from "../../images/live.png";
import stack from "../../images/crm.jpg";
import krm from "../../images/travel.png";
import foodApp from "../../images/pizza.png";
import chatApp from "../../images/url.jpg";

function Projects() {
  const data = [
    {
      img: stack,
      title: "CRM APP",
      description:
        "(CRM) is a technology for managing all your company's relationships",
      tech: ["MongoDB |", "ExpressJS |", "React |", "Redux-Toolkit."],
      github:
        "https://github.com/studentjsw/crm-frontend.git",
      live: "https://crm-front-ttw5.onrender.com/",
    },
    {
      img: foodApp,
      title: "PIZZA APP",
      description:
        "pizza delivery app development has gotten more demanding",
      tech: [
        "MongoDB |",
        "ExpressJS |",
        "React |",
        "Context-API |",
        "Razorpay.",
      ],
      github: "https://github.com/studentjsw/pizza-front.git",
      live: "https://candid-florentine-b6b5e8.netlify.app/",
    },
    {
      img: krm,
      title: "TRAVEL DIARY APP",
      description:
        "Easily add stories to your diary in our online editor or app",
      tech: ["MongoDB |", "ExpressJS |", "React |", "Context-API."],
      github:
        "https://github.com/studentjsw/road-front.git",
      live: "https://6489b7100d4c4b21246ec22a--creative-fudge-6529a9.netlify.app/",
    },
    {
      img: chatApp,
      title: "URL APP",
      description:
        "User authentication - Users are able to sign up, login and logout.",
      tech: [
        "MongoDB |",
        "ExpressJS |",
        "React |",
        "Context-API |",
        "Socket.io",
      ],
      github: "https://github.com/studentjsw/url-front.git",
      live: "https://main--ornate-marzipan-2d6e32.netlify.app/",
    },
  ];

  return (
    <div>
      <h2 className="text-center">Projects</h2>
      <div className="container-fluid d-flex flex-wrap justify-content-center ">
        {data.map((item) => {
          return (
            <Card
              className="text-black m-4 card_wrapper"
              style={{ width: "35rem" }}
              key={item.title}
            >
              <Card.Img
                variant="top"
                width="200px"
                height="300px"
                src={item.img}
                className="shadow"
              />
              <Card.Body>
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <Card.Title className="fw-bold mt-2">{item.title}</Card.Title>
                  <div className="d-flex ">
                    <OverlayTrigger
                      key={"bottom1"}
                      placement={"bottom"}
                      overlay={
                        <Tooltip id={`tooltip-${"bottom"}`}>
                          github repo!
                        </Tooltip>
                      }
                    >
                      <a href={item.github} target="_blank" rel="noreferrer">
                        <Button variant="light">
                          <img
                            src={github_icon}
                            alt="github_icon"
                            width={"25px"}
                            height={"25px"}
                          />
                        </Button>
                      </a>
                    </OverlayTrigger>
                    <OverlayTrigger
                      key={"bottom2"}
                      placement={"bottom"}
                      overlay={
                        <Tooltip id={`tooltip-${"bottom"}`}>
                          see it live!
                        </Tooltip>
                      }
                    >
                      <a href={item.live} target="_blank" rel="noreferrer">
                        <Button variant="light">
                          <img
                            src={live}
                            alt="live"
                            width={"25px"}
                            height={"25px"}
                          />
                        </Button>
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
                <hr />
                <Card.Text>{item.description}</Card.Text>                                             
                <div className="d-flex flex-wrap align-items-center">
                  Tech Stack used-
                  {item.tech.map((e) => {
                    return (
                      <Card.Text className="mx-1 fw-bolder mb-0" key={e}>
                        {e}
                      </Card.Text>
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
