import React from 'react'
import plumTree from '../../assets/images/plum-tree.jpg'

function Resume() {
    return (
        <section className="container" id="resume">
            <div className="row" id="resume-list">
                <div className="col-45">
                    <h3>Coding Proficiencies</h3>
                </div>
                <div className="col-2">
                    <p id="resume-link">
                        <a href="https://drive.google.com/file/d/1o-eO67x3Mb3exlK_D9LFarj_NivBnDNv/view?usp=sharing" target="_blank">View Resume</a>
                    </p>
                </div>
                <div className="col-5">
                    <h3>Other things that make me smile</h3>
                </div>
                <div className="row">
                    <div className="col-5">
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Front End</th>
                                    <th scope="col">Back End</th>
                                    <th scope="col">Soft Skills</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HTML</td>
                                    <td>Node.js</td>
                                    <td>Teamwork</td>
                                </tr>
                                <tr>
                                    <td>CSS</td>
                                    <td>Express.js</td>
                                    <td>Communication</td>
                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                    <td>MySQL, Sequelize</td>
                                    <td>Planning, Organization</td>
                                </tr>
                                <tr>
                                    <td>APIs</td>
                                    <td>MongoDB, Mongoose</td>
                                    <td>Workflow</td>
                                </tr>
                                <tr>
                                    <td>React</td>
                                    <td>GraphQL, WebPack</td>
                                    <td> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-2 resume-photo">
                        <img id="resume-photo" src={plumTree} style={{ width: "80%" }} alt="Abi and little son smiling from behind a tree trunk" />
                    </div>
                    <div className="col-5 smile">
                        <div className="row">
                            <ul className="smile-list">
                                <li>My son and daughter</li>
                                <li>Teaching History at College of the Redwoods</li>
                                <li>My forest home</li>
                                <li>Running and working out</li>
                                <li>Silliness: Satire, irony, word play not excluding puns</li>
                            </ul>
                            <p>Good books like:</p>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <a href="https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari-ebook/dp/B00ICN066A/ref=sr_1_1?crid=1LCUS9FH1Z1QU&keywords=harari+sapiens&qid=1670684368&sprefix=harari+sapiens%2Caps%2C245&sr=8-1" target="_blank">
                                    <img src={bookSapiens} alt="cover of book" />
                                </a>
                            </div>
                            <div className="col-2">
                                <a href="https://www.amazon.com/After-Silicon-Valley-Rob-Reid-ebook/dp/B06XZSNB3W/ref=sr_1_1?crid=1LPPL7D4RUXXF&keywords=after+on&qid=1670684513&sprefix=after+on%2Caps%2C181&sr=8-1" target="_blank">
                                    <img src={bookOn} alt="cover of book" />
                                </a>
                            </div>
                            <div className="col-2">
                                <a href="https://www.amazon.com/After-Silicon-Valley-Rob-Reid-ebook/dp/B06XZSNB3W/ref=sr_1_1?crid=1LPPL7D4RUXXF&keywords=after+on&qid=1670684513&sprefix=after+on%2Caps%2C181&sr=8-1" target="_blank">
                                    <img src={bookOn} alt="cover of book" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume