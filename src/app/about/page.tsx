import React from "react";
import "../../style/about.css";

export default function About() {
  return (
    <div className="main">
      <div className="intro">
        <h2 className="about_heading">About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          provident consequuntur. Commodi fugit veritatis eaque repellat velit
          sint temporibus iste vitae ipsam iusto rerum expedita laudantium,
          voluptates sed officiis? Architecto? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Sunt delectus vero doloremque dolore
          enim. Officiis autem enim ex odio distinctio maiores nemo expedita
          ratione saepe, aspernatur quas quae tenetur corrupti.
        </p>
      </div>
      <div className="skillscontainer">
        <h2>My Skills</h2>
        <div className="skills">
          <li>
            <h3>HTML</h3>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
          {/* <!--skill bar 1--> */}
          <li>
            <h3>CSS</h3>
            <span className="bar">
              <span className="css"></span>
            </span>
          </li>
          {/* <!--skill bar 2--> */}
          <li>
            <h3>JavaScript</h3>
            <span className="bar">
              <span className="js"></span>
            </span>
          </li>
          {/* <!--skill bar 3--> */}
          <li>
            <h3>Typescript</h3>
            <span className="bar">
              <span className="typescript"></span>
            </span>
          </li>
          {/* <!--skill bar 4--> */}
          <li>
            <h3>React</h3>
            <span className="bar">
              <span className="react"></span>
            </span>
          </li>
          {/* <!--skill bar 5--> */}
        </div>
      </div>
    </div>
  );
}
