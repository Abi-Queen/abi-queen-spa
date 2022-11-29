import React from 'react'
// import resumeBackground from '../../assets/images/south-fog.jpg'

function Resume () {
  return (
    <section className="container" id="resume">
            <h1>Resume</h1>
            <div className="row">
                <h2><a href="https://drive.google.com/file/d/1o-eO67x3Mb3exlK_D9LFarj_NivBnDNv/view?usp=sharing" target="_blank">View my resume here</a></h2>
            </div>
            <div className="row d-flex align-items-end">
                <div className="col d-flex justify-content-end">
                    <h2>Proficiencies</h2>
                    <h3>Front end</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>APIs</li>
                        <li>React</li>
                    </ul>
                    <h3>Back end</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default Resume