import React from 'react';
import resume from '../../img/resume.pdf';

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <h3>View my resume below or download it <a href={resume} target="_blank" className="bob">right here</a></h3>
      <div className="resume-container">
        <div className="resume-box">
          <h2>Summary</h2>
          <p>Web developer who specializes in front-end development and draws upon almost a decade of work as a leader and team player in the field Applied behavior Analysis. Through the Coding Bootcamp at Johns Hopkins Engineering, have learned a variety of skills, languages, and frameworks, including Browser-Based Technology, API Interaction, Databases, and Server-Side Development.</p>
          <p>Passion and expertise in creating web pages with responsive design and intuitive UI, with a focus on mobile-first design and development. Looking forward to finding creative solutions to give users the best possible experience on any project.</p>
        </div>
        <div className="resume-box">
          <h2>Technical Skills</h2>
          <p>HTML, CSS, JavaScript, jQuery, jQuery UI, Node.js, Moment.js, Bootstrap, Materialize, GIT, GitHub, APIs, JSON, MySQL, React.js</p>
        </div>
        <div className="resume-box">
          <h2>Applications Built</h2>
          <h3><b>Tech Blog</b> | Lead Developer</h3>
          <h3>https://whispering-sea-48503.herokuapp.com/</h3>
          <ul>
            <li>A blog where users can post questions and reply to others’ questions, with full login functionality</li>
            <li>HTML, CSS, JavaScript, jQuery, Express, MySQL, Sequelize, Handlebars.js, Dotenv, Bcrypt, React</li>
            <li>GitHub Repository: https://github.com/ryanascherr/tech-blog</li>
          </ul>
          <h3><b>Yoda Advice</b> | Co-Developer</h3>
          <h3>https://caitbopp.github.io/yoda-advice/</h3>
          <ul>
            <li>A language translator, translating advice into Yoda Speak</li>
            <li>HTML, CSS, JavaScript, jQuery, Materialize, Fun Translations API, Advice Slip JSON API</li>
            <li>GitHub Repository: https://github.com/caitbopp/yoda-advice</li>
          </ul>
          <h3><b>Weather Dashboard</b> | Lead Developer</h3>
          <h3>https://ryanascherr.github.io/weather-dashboard/</h3>
          <ul>
            <li>Displays current weather and 5-day forecast of any city</li>
            <li>HTML, CSS, JavaScript, jQuery, OpenWeatherMap API</li>
            <li>GitHub Repository: https://github.com/ryanascherr/weather-dashboard</li>
          </ul>
          <h3><b>Work Day Scheduler</b> | Lead Developer</h3>
          <h3>https://ryanascherr.github.io/work-day-scheduler/</h3>
          <ul>
            <li>A scheduler with time slots and fillable fields for each work hour</li>
            <li>HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js</li>
            <li>GitHub Repository: https://github.com/ryanascherr/work-day-scheduler</li>
          </ul>
          <h3><b>Password Generator</b> | Lead Developer</h3>
          <h3>https://ryanascherr.github.io/password-generator/</h3>
          <ul>
            <li>Allows creation of a password using a series of customizable specifications</li>
            <li>HTML, CSS, JavaScript, jQuery</li>
            <li>GitHub Repository: https://github.com/ryanascherr/password-generator</li>
          </ul>
        </div>
        <div className="resume-box">
          <h2>Experience</h2>
          <h3><b>Behavior Analyst</b>, August 2020 – Present</h3>
          <h3>Attain ABA – Baltimore, MD</h3>
          <ul>
            <li>Communicated frequently with families to discuss client progress and train on behavioral interventions</li>
            <li>Collaborated with and supervised Registered Behavior Technicians</li>
            <li>Problem solved and collaborated with co-workers to develop treatment plans for clients</li>
          </ul>
          <h3><b>Behavior Analyst I</b>, July 2019 – March 2020</h3>
          <h3>Trellis Services – Columbia, MD</h3>
          <ul>
            <li>Designed data collection systems to track and evaluate client progress on treatment plan objectives</li>
            <li>Conducted functional behavioral assessments and wrote progress reports in a timely manner</li>
            <li>Developed treatment plans to address communication, feeding, behavior, ADLs, and social skills</li>
            <li>Supervised and gave feedback to Technicians implementing treatment plans</li>
          </ul>
          <h3><b>Clinical Specialist I</b>, July 2018 – June 2019</h3>
          <h3>Kennedy Krieger Institute, Pediatric Feeding Disorders Program – Baltimore, MD</h3>
          <ul>
            <li>Relayed pertinent information to parents / supervisors daily regarding patient progress and setbacks</li>
            <li>Assisted in the development of individual assessments and treatment plans</li>
            <li>Completed evaluation reports, progress notes, and correspondence in a timely manner</li>
            <li>Initiated and maintained contact with KKI disciplines and outside agencies</li>
            <li>Provided training for parents, teachers, and/or staff</li>
          </ul>
        </div>
        <div className="resume-box">
          <h2>Education</h2>
          <h3><b>Johns Hopkins Coding Boot Camp</b> – Baltimore, MD</h3>
          <h4>Certificate – Full Stack Web Development (August 2021)</h4>
          <h3><b>Behavior Analyst Certification Board</b></h3>
          <h4>Board Certified Behavior Analyst (May 2019)</h4>
          <h3><b>University of Maryland, Baltimore County</b> – Baltimore, MD</h3>
          <h4>M.A. in Human Services, Applied Behavior Analysis (December 2018)</h4>
          <h3><b>Stevenson University</b> – Owings Mills, MD</h3>
          <h4>B.S. in Psychology (May 2015)</h4>
        </div>
      </div>
    </div>
  );
}
