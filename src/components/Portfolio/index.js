import React from 'react'
import { FaGithub } from 'react-icons/fa'
import quizSS from '../../assets/images/coding-quiz-screenshot.jpg'
import regexSS from '../../assets/images/regex-ss.jpg'
import empDBSS from '../../assets/images/employeedb-ss.jpg'
// import shopSS from '../../assets/images/shop-ss.jpg'
import teamSS from '../../assets/images/team-ss.jpg'
import wildfireSS from '../../assets/images/wildfire-screenshot.jpg'
import socialSS from '../../assets/images/social-network-ss.jpg'

function Portfolio () { 
    return (
        <section className="container project-grid">
            <div className="row project-row">
                <div className="col-md-6 mb-3 d-flex justify-content-around">
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
                <div className="col-md-6 mb-3 d-flex justify-content-around">
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
                <div className="col-md-6 mb-3 d-flex justify-content-around">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">
                                <a href="https://drive.google.com/file/d/1N6tmbxjLtrDPPkPcvb1f79KTqvoa9Rt5/view">Gist: Email Regex Tutorial</a>
                                <a href="https://drive.google.com/file/d/1N6tmbxjLtrDPPkPcvb1f79KTqvoa9Rt5/view">
                                <FaGithub /></a>
                            </h4>
                            <h5 className="card-text">
                                JavaScript
                            </h5>
                        </div>
                        <div className="card-body">
                            <img className="card-img" src={regexSS} alt="screenshot of tutorial"></img>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3 d-flex justify-content-around">
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
                <div className="col-md-6 mb-3 d-flex justify-content-around">
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
                <div className="col-md-6 mb-3 d-flex justify-content-around">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">
                                <a href="https://youtu.be/ut7UswYo3GU">HTML Generator, OOP</a>
                                <a href="https://github.com/Abi-Queen/engineers">
                            <FaGithub /></a>
                            </h4>
                            <h5 className="card-text">
                                HTML, CSS, JavaScript, Node, Jest
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