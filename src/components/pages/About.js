import React from 'react';
import headshot from '../../img/closeup.png'

export default function About() {
  return (
    <div className="about">
      <div className="test3">
        <div className="about-title">
          <h1>About Me</h1>
          <div className="headshot-container">
            <img className="headshot" src={headshot} alt="A very handsome Ryan Scherr"></img>
          </div>
        </div>
        <p>
          I'm a web developer who specializes in front-end development. My passion and expertise are in creating web pages with responsive design and intuitive UI, with a focus on mobile-first design.
        </p>
        <p>
          I received a full-stack web development certificate through Johns Hopkins Coding Bootcamp. In that program, I learned a variety of languages, technologies, and frameworks, like JavaScript, Node.js, APIs, MySQL, and React, just to name a few.
        </p>
        <p>
          My near-decade of work as a leader and team player in the field of Applied Behavior Analysis gives me a unique edge in this field.
        </p>
      </div>
    </div>
  );
}
