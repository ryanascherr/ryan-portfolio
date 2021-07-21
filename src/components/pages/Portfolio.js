import React from 'react';
import techPic from '../../img/tech-blog.png';
import yodaPic from '../../img/yoda.png';
import weatherPic from '../../img/weather.png';
import calendarPic from '../../img/calendar.png';
import workoutPic from '../../img/workout.png';
import passwordPic from '../../img/password.png';
import $ from "jquery";

export default function Portfolio() {

    const toggleProjectOne = () => {
        $(".one").slideToggle();
        $(".two").slideUp();
        $(".three").slideUp();
        $(".four").slideUp();
        $(".five").slideUp();
        $(".six").slideUp();
    }

    const toggleProjectTwo = () => {
        $(".two").slideToggle();
        $(".one").slideUp();
        $(".three").slideUp();
        $(".four").slideUp();
        $(".five").slideUp();
        $(".six").slideUp();
    }

    const toggleProjectThree = () => {
        $(".three").slideToggle();
        $(".one").slideUp();
        $(".two").slideUp();
        $(".four").slideUp();
        $(".five").slideUp();
        $(".six").slideUp();
    }

    const toggleProjectFour = () => {
        $(".four").slideToggle();
        $(".one").slideUp();
        $(".two").slideUp();
        $(".three").slideUp();
        $(".five").slideUp();
        $(".six").slideUp();
    }

    const toggleProjectFive = () => {
        $(".five").slideToggle();
        $(".one").slideUp();
        $(".two").slideUp();
        $(".three").slideUp();
        $(".four").slideUp();
        $(".six").slideUp();
    }

    const toggleProjectSix = () => {
        $(".six").slideToggle();
        $(".one").slideUp();
        $(".two").slideUp();
        $(".three").slideUp();
        $(".four").slideUp();
        $(".five").slideUp();
    }

    return (
        <div className="portfolio">
            <h1>My Portfolio</h1>
            <h2>Click on a project to learn more</h2>
            <div className="projects">
                <div className="project project-one" onClick={toggleProjectOne}>
                    <div className="project-name">
                        <h3>Tech Blog</h3>
                    </div>
                    <div className="pic-container">
                        <img src={techPic} alt=""></img>
                    </div>
                    <div className="image-label hidden one">
                        <h4>Description:</h4>
                        <p className="bottom">This application allows users to create posts about web development and reply to other users' posts. Users can also log in and edit or delete their own posts.</p>
                        <h4>Technologies Used:</h4>
                        <p className="bottom">HTML, CSS, JS, JQuery, Express, MySQL, Sequelize, Handlebars.js, Dotenv, Bcrypt</p>
                        <div className="buttons">
                            <button className="button"><a href="https://github.com/ryanascherr/tech-blog" target="_blank">Repo</a></button>
                            <button className="button"><a href="https://whispering-sea-48503.herokuapp.com/" target="_blank">Web Page</a></button>
                        </div>
                    </div>
                </div>
                <div className="project project-two" onClick={toggleProjectTwo}>
                    <div className="project-name">
                        <h3>Yoda Translator</h3>
                    </div>
                    <div className="pic-container">
                        <img src={yodaPic} alt=""></img>
                    </div>
                    <div className="image-label hidden two">
                        <h4>Description:</h4>
                        <p className="bottom">This application allows a user to generate a random piece of advice or make their own, then have it translated by the Jedi Master Yoda.</p>
                        <h4>Technologies Used:</h4>
                        <p className="bottom">HTML, CSS, JS, JQuery, MaterializeCSS, Fun Translations API, Advice Slip JSON API</p>
                        <div className="buttons">
                            <button className="button"><a href="https://github.com/caitbopp/yoda-advice" target="_blank">Repo</a></button>
                            <button className="button"><a href="https://caitbopp.github.io/yoda-advice/" target="_blank">Web Page</a></button>
                        </div>
                    </div>
                </div>
                <div className="project project-three" onClick={toggleProjectThree}>
                    <div className="project-name">
                        <h3>Weather Finder</h3>
                    </div>
                    <div className="pic-container">
                        <img src={weatherPic} alt=""></img>
                    </div>
                    <div className="image-label hidden three">
                        <h4>Description:</h4>
                        <p className="bottom">This application allows a user to find weather information for any city across the world, as well as a 5-day forecast.</p>
                        <h4>Technologies Used:</h4>
                        <p className="bottom">HTML, CSS, JS, JQuery, OpenWeatherMap API</p>
                        <div className="buttons">
                            <button className="button"><a href="https://github.com/ryanascherr/weather-dashboard" target="_blank">Repo</a></button>
                            <button className="button"><a href="https://ryanascherr.github.io/weather-dashboard/" target="_blank">Web Page</a></button>
                        </div>
                    </div>
                </div>
                <div className="project project-four" onClick={toggleProjectFour}>
                    <div className="project-name">
                        <h3>Workday Scheduler</h3>
                    </div>
                    <div className="pic-container">
                        <img src={calendarPic} alt=""></img>
                    </div>
                    <div className="image-label hidden four">
                        <h4>Description:</h4>
                        <p className="bottom">This application allows users to plan out a workday by logging events into a daily calendar. Users can then save the text written in each time block, causing it to persist even if the page refreshes.</p>
                        <h4>Technologies Used:</h4>
                        <p className="bottom">HTML, CSS, JS, JQuery, Bootstrap</p>
                        <div className="buttons">
                            <button className="button"><a href="https://github.com/ryanascherr/work-day-scheduler" target="_blank">Repo</a></button>
                            <button className="button"><a href="https://ryanascherr.github.io/work-day-scheduler/" target="_blank">Web Page</a></button>
                        </div>
                    </div>
                </div>
                <div className="project project-five" onClick={toggleProjectFive}>
                    <div className="project-name">
                        <h3>Fitness Tracker</h3>
                    </div>
                    <div className="pic-container">
                        <img src={workoutPic} alt=""></img>
                    </div>
                    <div className="image-label hidden five">
                        <h4>Description:</h4>
                        <p className="bottom">This application allows users to add exercisses to a workout plan and to view the combined weight and total duration of the last 7 workouts.</p>
                        <h4>Technologies Used:</h4>
                        <p className="bottom">NoSQL, MongoDB, Mongoose.js</p>
                        <div className="buttons">
                            <button className="button"><a href="https://github.com/ryanascherr/workout-tracker" target="_blank">Repo</a></button>
                            <button className="button"><a href="https://metric-loon-80521.herokuapp.com/" target="_blank">Web Page</a></button>
                        </div>
                    </div>
                </div>
                <div className="project project-six" onClick={toggleProjectSix}>
                    <div className="project-name">
                        <h3>Password Generator</h3>
                    </div>
                    <div className="pic-container">
                        <img src={passwordPic} alt=""></img>
                    </div>
                    <div className="image-label hidden six">
                        <h4>Description:</h4>
                        <p className="bottom">This application allows users to create a random password using a set of five parameters. </p>
                        <h4>Technologies Used:</h4>
                        <p className="bottom">HTML, CSS, JS, JQuery</p>
                        <div className="buttons">
                            <button className="button"><a href="https://github.com/ryanascherr/password-generator" target="_blank">Repo</a></button>
                            <button className="button"><a href="https://ryanascherr.github.io/password-generator/" target="_blank">Web Page</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
}
