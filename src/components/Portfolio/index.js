import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Portfolio () { 
    return (
        <section className="container" id="portfolio">
            <div className="row">
                <div className="col project" id="project1">
                    <h2>
                        <span><a href="https://abi-queen.github.io/Coding-Quiz/">Coding Quiz </a></span>
                        <span>
                            <a href="https://github.com/Abi-Queen/Coding-Quiz">
                            <FaGithub />
                            </a>
                        </span>
                    </h2>
                    <h4>HTML, CSS, JavaScript</h4>
                </div>
                <div className="col project" id="project2">
                    <h2>
                        <span><a href="https://github.com/Abi-Queen/engineers">Team Builder </a></span>
                        <span>
                            <a href="https://github.com/Abi-Queen/engineers">
                            <FaGithub />
                            </a>
                        </span>
                    </h2>
                    <h4>Node, Jest, OOP, TDD</h4>
                </div>
            </div>
            <div className="row">
                <div className="col project" id="project3">
                    <h2>
                        <span><a href="https://github.com/Abi-Queen/engineers">Team Builder </a></span>
                        <span>
                            <a href="https://github.com/Abi-Queen/engineers">
                            <FaGithub />
                            </a>
                        </span>
                    </h2>
                    <h4>Description</h4>
                </div>
                <div className="col project" id="project4">
                    <h2>
                        <span><a href="https://github.com/Abi-Queen/engineers">Team Builder </a></span>
                        <span>
                            <a href="https://github.com/Abi-Queen/engineers">
                            <FaGithub />
                            </a>
                        </span>
                    </h2>
                    <h4>Description</h4>
                </div>
            </div>
            <div className="row">
                <div className="col project" id="project5">
                    <h2>
                        <span><a href="https://github.com/Abi-Queen/engineers">Team Builder </a></span>
                        <span>
                            <a href="https://github.com/Abi-Queen/engineers">
                            <FaGithub />
                            </a>
                        </span>
                    </h2>
                    <h4>Description</h4>
                </div>
                <div className="col project" id="project6">
                    <h2>
                        <span><a href="https://github.com/Abi-Queen/engineers">Team Builder </a></span>
                        <span>
                            <a href="https://github.com/Abi-Queen/engineers">
                            <FaGithub />
                            </a>
                        </span>
                    </h2>
                    <h4>Description</h4>
                </div>
            </div>
        </section>
    )
}

export default Portfolio