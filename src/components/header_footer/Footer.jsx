import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'100px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">React Quiz</div>
                <div className="footer_copyright">
                    Made with  
                <span style={{color : 'crimson'}}>♥</span> By 
                <a href="http://www.github.com/travelwor1d" target="_blank" rel="noopener noreferrer">Michael K.</a>
                
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;