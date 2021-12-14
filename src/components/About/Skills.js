import React from "react";
import "./Skills.css";
import bootstrap from "../../Assets/Skills/bootstrap.png";
import c from "../../Assets/Skills/c.svg";
import cpp from "../../Assets/Skills/cpp.png";
import css3 from "../../Assets/Skills/css3.png";
import expressjs from "../../Assets/Skills/expressjs.png";
import git from "../../Assets/Skills/git.png";
import heroku from "../../Assets/Skills/heroku.png";
import html5 from "../../Assets/Skills/html5.svg";
import postman from "../../Assets/Skills/postman.svg";
import linux from "../../Assets/Skills/linux.svg";
import js from "../../Assets/Skills/js.svg";
import nodejs from "../../Assets/Skills/nodejs.png";
import npm from "../../Assets/Skills/npm.png";
import react from "../../Assets/Skills/react.svg";
import redux from "../../Assets/Skills/redux.png";
import mongo from "../../Assets/Skills/mongo.svg";
import terminal from "../../Assets/Skills/terminal.png";
import windows from "../../Assets/Skills/windows.png";
import vercel from "../../Assets/Skills/vercel.svg";

const Skills = () => {
  return (
    <div className="set-icons">
      <img
        src={react}
        className="skill-icons pa3 small"
        alt="React"
        title="React"
      />
      <img src={redux} className="skill-icons pa3" alt="Redux" title="Redux" />
      <img
        src={nodejs}
        className="skill-icons ph4 pa3 small2"
        alt="NodeJS"
        title="NodeJS"
      />

      <img src={js} className="skill-icons pa3" alt="JS" title="JavaScript" />
      <img
        src={bootstrap}
        className="skill-icons pa3 small"
        alt="Bootstrap"
        title="Bootstrap"
      />
      <img src={npm} className="skill-icons pa3 small" alt="NPM" title="NPM" />

      <img
        src={expressjs}
        className="skill-icons skill-icons pa3"
        alt="ExpressJS"
        title="ExpressJS"
      />
      <img src={mongo} className="skill-icons" alt="mongo" title="mongo" />
      <img
        src={postman}
        className="skill-icons skill-icons pa3"
        alt="postman"
        title="postman"
      />
      <img
        src={linux}
        className="skill-icons skill-icons pa3"
        alt="linux"
        title="linux"
      />

      <img src={html5} className="skill-icons pa3" alt="HTML5" title="HTML5" />
      <img src={css3} className="skill-icons pa3" alt="CSS3" title="CSS3" />

      <img
        src={heroku}
        className="skill-icons pl4 pa3 small"
        alt="Heroku"
        title="Heroku"
      />
          
      <img
        src={vercel}
        className="skill-icons pl4 pa3 small"
        alt="Vercel"
        title="Vercel"
      />

      <img src={c} className="skill-icons pa3 small" alt="C" title="C" />
      <img src={cpp} className="skill-icons pa3" alt="C++" title="C++" />

      <img src={git} className="skill-icons pa3" alt="Git" title="Git" />

      <img
        src={terminal}
        className="skill-icons pa3"
        alt="Terminal"
        title="Terminal"
      />
      <img
        src={windows}
        className="skill-icons pa3"
        alt="Windows"
        title="Windows"
      />
    </div>
  );
};

export default Skills;
