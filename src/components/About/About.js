import React from 'react';
import './About.css' 
import { Link } from 'react-router-dom'
import { GrFacebook } from 'react-icons/gr'
import { TiSocialInstagram } from 'react-icons/ti'
import { MdEmail } from 'react-icons/md'


function About() {
  
  return (
    <div className='header-container'>
        <button
              id="btn"
              size="lg"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1jdKGghlL0t8JoxwfYYijd2nw9DHfvYGQ/view?usp=sharing',
                  '_blank'
                )
              }
            >
              View Resume
            </button>{' '}
        
    </div>
  );
}

export default About;
