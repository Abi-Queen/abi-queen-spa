import React from 'react'
// import resumeBackground from '../../assets/images/south-fog.jpg'

function Resume () {
  return (
    <section className="d-flex" id="resume">
        <div id="resume-list">
            <h1>Resume</h1>
            <p id="resume-link">
                <a href="https://drive.google.com/file/d/1o-eO67x3Mb3exlK_D9LFarj_NivBnDNv/view?usp=sharing" target="_blank">View my resume here</a>
            </p>
            <h3>Proficiencies</h3>
            <table class="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col">Front End</th>
                    <th scope="col">Back End</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HTML</td>
                        <td>Node.js</td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>Express.js</td>
                    </tr>
                    <tr>
                        <td>JavaScript</td>
                        <td>MySQL, Sequelize</td>
                    </tr>
                    <tr>
                        <td>APIs</td>
                        <td>MongoDB, Mongoose</td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>GraphQL, WebPack</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default Resume