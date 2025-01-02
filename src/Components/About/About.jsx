import React from 'react';
import './about.scss';

import aboutImage from '../../aboutImage.jpg';

const About = () => {
    return (
        <section className="about section container">
            <div className="secContainer">
                <div className="secHeader">
                    <h2 className="secTitle">About Us</h2>
                    <p>Learn more about our mission, vision, and what drives us to deliver exceptional service.</p>
                </div>

                <div className="aboutContent flex">
                    <div className="aboutText">
                        <h3>Our Mission</h3>
                        <p>
                            We are committed to providing top-notch rental solutions that cater to your unique needs. 
                            Our team strives to ensure every experience is seamless, from finding the perfect home 
                            to managing your rental efficiently.
                        </p>
                        <p>
                            With a focus on customer satisfaction, we continuously improve our services to meet 
                            the evolving needs of our clients and to exceed their expectations.
                        </p>
                    </div>
                    
                    <div className="aboutImage">
                        <img src={aboutImage} alt="About Us" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
