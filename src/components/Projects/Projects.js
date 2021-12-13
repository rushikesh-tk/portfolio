import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import adsoul from "../../Assets/Projects/adsoul.png";
import bkgenerator from "../../Assets/Projects/bkgenerator.png";
import dancingrobo from "../../Assets/Projects/dancingrobo.png";
import instagram from "../../Assets/Projects/instagram.png";
import proshop from "../../Assets/Projects/proshop.png";
import robofriend from "../../Assets/Projects/robofriend.png";
import votenet from "../../Assets/Projects/votenet.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proshop}
              isBlog={false}
              title="Proshopy"
              description="The basic idea is to provide the user with a service that he/she can see the various products and place an order."
              link="https://github.com/rushikesh-tk/ProshopApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagram}
              isBlog={false}
              title="Instagram Clone"
              description="An instagram clone with basic functionalities like signin, signup, creating post, see other's profile, follow/unfollow, like posts, comment on posts."
              link="https://github.com/rushikesh-tk/Instagram"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={votenet}
              isBlog={false}
              title="Votenet"
              description="A secure online voting system on using IPFS & Face Recognition. "
              link="https://github.com/rushikesh-tk/hackAASF-VoteNet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adsoul}
              isBlog={false}
              title="AdSoul"
              description="Dashboard for your Ad Stats "
              link="https://github.com/rushikesh-tk/AdSoul"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robofriend}
              isBlog={false}
              title="Robofriend"
              description="A simple React Web Application , which dynamically searches your robot friend. "
              link="https://github.com/rushikesh-tk/robofriends"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dancingrobo}
              isBlog={false}
              title="Dancing Robot"
              description="A dancing Robot made using HTML and CSS "
              link="https://github.com/rushikesh-tk/robot-friend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bkgenerator}
              isBlog={false}
              title="Background Generator"
              description="Web application which generates backgrounds gradient from chosen colours. Made using HTML, CSS and JavaScript."
              link="https://github.com/rushikesh-tk/background-generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="This is my personal website made from scratch using ReactJS. It intends to showcase information about me."
              link="https://github.com/rushikesh-tk/portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
