import React from 'react'
import profilePhoto from '../../assets/images/photo.jpg'

function Nav () {
    return (
    <section className="container"> 
        <header className="header row">
            <div className="col-4">
                <h1>Abigail Queen</h1>
                <h3>Teamwork, performance, adaptability</h3>
                <img src={profilePhoto} className="my-2" style={{ width: "30%" }} alt="Abi Queen profile"/>
            </div>
            <div className="col-8">
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="#about">About me</a>
                        </li>
                        <li>
                            <a href="#work">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1o-eO67x3Mb3exlK_D9LFarj_NivBnDNv/view?usp=sharing" target="_blank">Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </section>
    )
}

export default Nav