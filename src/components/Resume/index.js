import React from 'react'
import plumTree from '../../assets/images/plum-tree.jpg'

function Resume () {
  return (
    <section className="container" id="resume">
        <div className="row" id="resume-list">
            <p id="resume-link">
                <a href="https://drive.google.com/file/d/1o-eO67x3Mb3exlK_D9LFarj_NivBnDNv/view?usp=sharing" target="_blank">View my resume here</a>
            </p>
            <div className="row">
                <div className="col-4">
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
                <div className="col-4 resume-photo">
                    <img id="resume-photo" src={plumTree} style={{ width: "80%" }} alt="Abi and little son smiling from behind a tree trunk"/>
                </div>
                <div className="col-4 smile">
                    <div className="row">
                        </div>
                        <h3>Other things that make me smile</h3>
                    <ul className="smile-list">
                        <li>My son and daughter</li>
                        <li>Teaching History at College of the Redwoods</li>
                        <li>My forest home</li>
                        <li>Running and working out</li>
                        <li>Silliness: Satire, irony, word play not excluding puns</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume