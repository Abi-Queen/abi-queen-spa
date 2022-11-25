import React from 'react'
import profilePhoto from '../../assets/images/photo.jpg'

function About() {
  return (
    <section>
            <img src={profilePhoto} className="my-2" style={{ width: "15%" }} alt="Abi Queen profile"/>
            <h1 id="about">About me</h1>
            <div>
                <p>Full stack web developer working from the coast of Humboldt County, California. Solid record of delivering quality content on schedule while adapting and innovating. Strengths in communication, collaboration, creating an inclusive and empowering group dynamic, learning and applying new tools, project management and meeting deadlines.</p>
            </div>
        </section>
  )
}

export default About