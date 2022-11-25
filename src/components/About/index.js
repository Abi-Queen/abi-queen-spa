import React from 'react'
import profilePhoto from '../../assets/images/photo.jpg'

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      <img src={profilePhoto} className="my-2" style={{ width: "15%" }} alt="headshot" />
    </section>
  )
}

export default About