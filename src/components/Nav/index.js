import React from 'react'
import heroPhoto from '../../assets/images/hero.jpg'

function Nav () {
    return (
<section> 
        <header className="header">
            <h1>Abigail Queen</h1>
            <h3>Teamwork, adaptability, performance</h3>
            <nav>
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
        </header>
    </section>
    )
}

export default Nav