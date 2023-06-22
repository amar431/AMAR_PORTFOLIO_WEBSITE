import React from 'react';
import './SocialMedia.scss'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app_social">
      <div style={iconStyle}>
        <a href="https://twitter.com/Amar143431" target="_blank" rel="noopener noreferrer">
          <BsTwitter className="social_icon" />
        </a>
      </div>
      <div style={iconStyle}>
        <a href="https://www.instagram.com/iamar_431/" target="_blank" rel="noopener noreferrer">
          <BsInstagram className="social_icon" />
        </a>
      </div>
      <div style={iconStyle}>
        <a href="https://www.linkedin.com/in/amarnath-guptha/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social_icon" />
        </a>
      </div>
    </div>
  );
};

const iconStyle = {
  marginRight: '10px',
};

export default SocialMedia;
