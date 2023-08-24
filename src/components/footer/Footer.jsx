import React from "react";
import {
    FaFacebookF,
    FaGithub,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    // Define the links to your social media profiles
    const facebookLink = "https://www.facebook.com/sparsh.ruhela.58/";
    const twitterLink = "https://twitter.com/your-twitter-profile";
    const linkedinLink = "https://www.linkedin.com/in/your-linkedin-profile";
    const githubLink = "https://github.com/06-03-01";

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    {/* Your info text here */}
                </div>
                <div className="socialIcons">
                    {/* Facebook */}
                    <a href={facebookLink} target="_blank" className="icon">
                        <FaFacebookF />
                    </a>
                    
                    {/* GitHub */}
                    <a href={githubLink} target="_blank" className="icon">
                        <FaGithub />
                    </a>

                    {/* Twitter */}
                    <a href={twitterLink} target="_blank" className="icon">
                        <FaTwitter />
                    </a>

                    {/* LinkedIn */}
                    <a href={linkedinLink} target="_blank" className="icon">
                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
