import React from 'react'
import profilePhoto from '../../assets/images/photo.jpg'

function Nav (props) {
    const {
        contactSelected,
        setContactSelected
    } = props

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
                            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About me</a>
                        </li>
                        <li>
                            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>Projects</a>
                        </li>
                        <li className={`${contactSelected && 'navActive'}`}>
                            <span onClick={() => setContactSelected(true)}>Contact</span>
                        </li>
                        <li>
                            <a data-testid="resume" href="https://drive.google.com/file/d/1o-eO67x3Mb3exlK_D9LFarj_NivBnDNv/view?usp=sharing" target="_blank" onClick={() => setContactSelected(false)}>Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </section>
    )
}

export default Nav