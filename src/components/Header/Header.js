import {React, useState} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { GrFacebook } from 'react-icons/gr';
import { TiSocialInstagram } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);



  return (
    <>
      <header className="nav-bar">
        <nav className='nav-container'>
          <h1 className="nav-logo">
            <a href="#about">Ben Perry</a>
          </h1>
          <ul className="primary-navigation underline-indicators nav-list">
            <li onClick={handleClick} className={click ? "active" : "null"}>
              <a  href="#about">
                About
              </a>
            </li>
            <li>
              <a className="" href="#technology">
                Technology
              </a>
            </li>
            <li>
              <a className="" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
