import React from 'react'
import { FaGithub } from 'react-icons/fa'
import quizSS from '../../assets/images/coding-quiz-screenshot.jpg'
import regexSS from '../../assets/images/regex-ss.jpg'
import empDBSS from '../../assets/images/employeedb-ss.jpg'
// import shopSS from '../../assets/images/shop-ss.jpg'
import teamSS from '../../assets/images/team-ss.jpg'
import wildfireSS from '../../assets/images/wildfire-screenshot.jpg'
import socialSS from '../../assets/images/social-network-ss.jpg'
import breakAwaySS from '../../assets/images/break-away-SS.jpg'

function Portfolio() {
    return (
        <section className="container project-grid">
            <h2>A sample of my projects</h2>
            <div className="row project-row">
                <div className="col-md-6 col-sm mb-3 d-flex justify-content-around">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">
                                <a href="https://drive.google.com/file/d/1N6tmbxjLtrDPPkPcvb1f79KTqvoa9Rt5/view">Employee Database</a>
                                <a href="https://github.com/Abi-Queen/Employee-Manager-DB">
                                    <FaGithub /></a>
                            </h4>
                            <h5 className="card-text">
                                MySQL, Node, JavaScript
                            </h5>
                        </div>
                        <div className="card-body">
                            <img className="card-img" src={empDBSS} alt="screenshot of user input to database"></img>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm mb-3 d-flex justify-content-around">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">
                                <a href="https://nverhulp.github.io/wildfire-app/">California Wildfire Readiness App</a>
                                <a href="https://github.com/nverhulp/wildfire-app">
                                    <FaGithub /></a>
                            </h4>
                            <h5 className="card-text">
                                HTML, CSS, JavaScript
                            </h5>
                        </div>
                        <div className="card-body">
                            <img className="card-img" src={wildfireSS} alt="screenshot of user input to database"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row project-row">
                <div className="col-md-6 col-sm mb-3 d-flex justify-content-around">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">
                                <a href="https://breakaway.herokuapp.com/">Break Away</a>
                                <a href="https://github.com/laceyaguigam/Break-Away">
                                    <FaGithub /></a>
                            </h4>
                            <h5 className="card-text">
                                MERN Stack
                            </h5>
                        </div>
                        <div className="card-body">
                            <img className="card-img" src={breakAwaySS} alt="screenshot of deployed Break Away app"></img>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm mb-3 d-flex justify-content-around">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">
                                <a href="https://abi-queen.github.io/Coding-Quiz/">Coding Quiz</a>
                                <a href="https://github.com/Abi-Queen/Coding-Quiz">
                                    <FaGithub /></a>
                            </h4>
                            <h5 className="card-text">
                                HTML, CSS, JavaScript
                            </h5>
                        </div>
                        <div className="card-body">
                            <img className="card-img" src={quizSS} alt="screenshot of multiple choice question"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row project-row">
                <div className="col-md-6 col-sm mb-3 d-flex justify-content-around">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">
                                <a href="https://youtu.be/Ru98SC457gA">Social Network API</a>
                                <a href="https://github.com/Abi-Queen/social-network-API">
                                    <FaGithub /></a>
                            </h4>
                            <h5 className="card-text">
                                MongoDB, Mongoose, Express, Node
                            </h5>
                        </div>
                        <div className="card-body">
                            <img className="card-img" src={socialSS} alt="screenshot of user input to database"></img>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm mb-3 d-flex justify-content-around">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">
                                <a href="https://youtu.be/ut7UswYo3GU">HTML Generator</a>
                                <a href="https://github.com/Abi-Queen/engineers">
                                    <FaGithub /></a>
                            </h4>
                            <h5 className="card-text">
                                OOP, TDD
                            </h5>
                        </div>
                        <div className="card-body">
                            <img className="card-img" src={teamSS} alt="screenshot of user input to database"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio