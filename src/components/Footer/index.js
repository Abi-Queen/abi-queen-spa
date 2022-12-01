import React from "react"
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaAtlassian } from 'react-icons/fa'

function Footer() {
  return (
  <section className="footer">
    <ul>
        <li>
            <a href="https://github.com/Abi-Queen/engineers"><FaGithub /></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/abigail-queen-0040a9243/"><FaLinkedin /></a>
        </li>
        <li>
            <a href="https://community.atlassian.com/t5/user/viewprofilepage/user-id/5092026"><FaAtlassian /></a>
        </li>
    </ul>
  </section>
  )
}

export default Footer