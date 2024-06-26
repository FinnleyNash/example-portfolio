import "./FooterStyles.css";

import React from 'react';

import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
              <div className="location">
                <FaHome size={28} style={{color: '#fff', marginRight: '2rem' }}/>
                <div>
                <p>Haycroft, Stack Lane</p>
                <p>Hartley, Kent</p>
                <p>DA3 8BL</p>
                </div>
            </div> 
            <div className="phone">
                <h4><FaPhone size={28} style={{color: '#fff', marginRight: '2rem' }}/>
                07469 219898</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={28} style={{color: '#fff', marginRight: '2rem' }}/>
                Finnleynash.nash@gmail.com</h4>
                </div>
        </div>
            
            <div className="right">
                <div className="social">
                <FaGithub size={40} style={{color: '#fff', marginRight: '1rem' }}/>
                <FaLinkedin size={40} style={{color: '#fff', marginRight: '1rem' }}/>
                <FaGithub size={40} style={{color: '#fff', marginRight: '1rem' }}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;