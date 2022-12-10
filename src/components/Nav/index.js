import React from 'react'
import { Link } from 'react-router-dom'
import profilePhoto from '../../assets/images/photo.jpg'

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props

    return (
        <nav className="container navbar navbar-expand-lg">
            <header className="header row">
                <div className="col-5">
                    <h1>
                        <a data-testid="link" href="https://abi-queen.github.io/abi-queen-spa/">Abigail Queen
                        </a>
                    </h1>
                    <h3>Teamwork, performance, adaptability</h3>
                    <img src={profilePhoto} style={{ width: "30%" }} alt="Abi Queen profile" />
                </div>
                <div className="col-7">
                    <nav>
                        <ul>
                            <li>
                                <Link to="about" onClick={() => setContactSelected(false)}>About me</Link>
                            </li>
                            <li>
                                <Link to="portfolio" onClick={() => setContactSelected(false)}>Projects</Link>
                            </li>
                            <li className={`${contactSelected && 'navActive'}`}>
                                <Link to="contact" onClick={() => setContactSelected(true)}>Contact</Link>
                            </li>
                            <li
                                className={`${!contactSelected && 'navActive'}`}>
                                <Link to="resume" onClick={() => setContactSelected(false)}>Resume</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </nav>
    )
}

export default Nav