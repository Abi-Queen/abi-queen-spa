import React from 'react'

function Portfolio () { 
    return (
        <section className="container">
            <div className="row">
                <div className="col-6 project" id="project1">
                    <h2>
                        <span><a href="https://abi-queen.github.io/Coding-Quiz/">Coding Quiz </a></span>
                        <span>
                            <a href="https://github.com/Abi-Queen/Coding-Quiz">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </span>
                    </h2>
                    <h4>HTML, CSS, JavaScript</h4>
                </div>
                <div className="col-6 project" id="project2">
                    <h2>
                        <span><a href="https://github.com/Abi-Queen/engineers">Team Builder </a></span>
                        <span>
                            <a href="https://github.com/Abi-Queen/engineers">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </span>
                    </h2>
                    <h4>Node, Jest, OOP, TDD</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-6 project" id="project3">
                    <h2>Project 3 Name</h2>
                    <h4>Description</h4>
                </div>
                <div className="col-6 project" id="project4">
                    <h2>Project 4 Name</h2>
                    <h4>Description</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-6 project" id="project5">
                    <h2>Project 5 Name</h2>
                    <h4>Description</h4>
                </div>
                <div className="col-6 project" id="project6">
                    <h2>Project 6 Name</h2>
                    <h4>Description</h4>
                </div>
            </div>
        </section>
    )
}

export default Portfolio