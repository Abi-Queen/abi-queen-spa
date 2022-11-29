import React from 'react'
import { FaGithub } from 'react-icons/fa'
import quizSS from '../../assets/images/coding-quiz-screenshot.jpg'
import regexSS from '../../assets/images/regex-ss.jpg'
import empDBSS from '../../assets/images/employeedb-ss.jpg'
import shopSS from '../../assets/images/shop-ss.jpg'
import teamSS from '../../assets/images/team-ss.jpg'
import wildfireSS from '../../assets/images/wildfire-screenshot.jpg'

function Portfolio () { 
    return (
        <section className="container" id="portfolio">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-6 project" id="project1">
                    <div className="card bg-dark text-white">
                    <a href="https://drive.google.com/file/d/1N6tmbxjLtrDPPkPcvb1f79KTqvoa9Rt5/view">
                            <img className="card-img" src={empDBSS} alt="screenshot of user input to database"></img>
                        </a>
                        <div class="card-img-overlay">
                            <h5 class="card-title"> 
                                <a href="https://drive.google.com/file/d/1N6tmbxjLtrDPPkPcvb1f79KTqvoa9Rt5/view">Employee Database</a>
                            </h5>
                            <h3><a href="https://github.com/Abi-Queen/Employee-Manager-DB">
                                <FaGithub /></a>
                            </h3>
                            <p class="card-text"> MySQL, Node, JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 project" id="project1">
                    <div className="card">
                    <a href="https://drive.google.com/file/d/1N6tmbxjLtrDPPkPcvb1f79KTqvoa9Rt5/view">
                            <img className="card-img" src={regexSS} alt="screenshot of tutorial text"></img>
                        </a>
                        <div class="card-img-overlay">
                            <h5 class="card-title"> 
                                <a href="https://gist.github.com/Abi-Queen/ddcd153227e8f24d09e2eb546e16a298">Gist: Regex Tutorial</a>
                            </h5>
                            <h3><a href="https://gist.github.com/Abi-Queen/ddcd153227e8f24d09e2eb546e16a298">
                                <FaGithub /></a>
                            </h3>
                            <p class="card-text">JavaScript</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-6 project" id="project3">
                    <div className="card">
                    <a href="https://abi-queen.github.io/Coding-Quiz/" className="btn btn-secondary btn-large">
                        <img className="card-img-top" src={quizSS} alt="screenshot of multiple choice question"></img>
                    </a>
                        <div className="card-body">
                            <h1>
                                Coding Quiz
                                <p><a href="https://github.com/Abi-Queen/Coding-Quiz">
                                <FaGithub /></a></p>
                            </h1>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">HTML, CSS, JavaScript</li>
                            <li className="list-group-item">Bootstrap, jQuery</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 project" id="project4">
                    <div className="card">
                    <a href="https://nverhulp.github.io/wildfire-app/" className="btn btn-secondary btn-large">
                        <img className="card-img-top" src={wildfireSS} alt="screenshot wildfire app UI"></img>
                    </a>
                        <div className="card-body">
                            <h1>
                                California Mobile Wildfire Readiness App
                                <p><a href="https://github.com/nverhulp/wildfire-app">
                                <FaGithub /></a></p>
                            </h1>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">HTML, CSS, JavaScript</li>
                            <li className="list-group-item">Pure.css</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-6 project" id="project5">
                    <div className="card">
                    <a href="https://youtu.be/ut7UswYo3GU" className="btn btn-secondary btn-large">
                        <img className="card-img-top" src={teamSS} alt="screenshot of html generated"></img>
                    </a>
                        <div className="card-body">
                            <h1>
                                Engineering Team HTML
                                <p><a href="https://github.com/Abi-Queen/engineers">
                                <FaGithub /></a></p>
                            </h1>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">OOP, TDD</li>
                            <li className="list-group-item">Node, Jest, HTML, CSS, JavaScript, Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 project" id="project6">
                    <div className="card">
                    <a href="https://drive.google.com/file/d/1fLKFMFc53YsFRjtBfuJGcRR69BETFGi0/view" className="btn btn-secondary btn-large">
                        <img className="card-img-top" src={shopSS} alt="screenshot of database query"></img>
                    </a>
                        <div className="card-body">
                            <h2>
                                Ecommerce Database
                                <p><a href="https://github.com/Abi-Queen/shop">
                                <FaGithub /></a></p>
                            </h2>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Express, MySQL, Sequelize</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio