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
            <div className="col-5">
                <h1>
                    <a data-testid="link" href="/">Abigail Queen
                    </a>
                </h1>
                <h3>Teamwork, performance, adaptability</h3>
                <img src={profilePhoto} style={{ width: "30%" }} alt="Abi Queen profile"/>
            </div>
            <div className="col-7">
                <nav>
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
                        <li
                        className={`${!contactSelected && 'navActive'}`}>
                            <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </section>
    )
}

export default Nav