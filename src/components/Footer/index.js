import React from 'react';

function Footer() {
    return (
        <footer>
            <a href='https://github.com/bsolis6878' target='_blank'>
                <img src={require('../../assets/github.png')} alt='Github icon' />
            </a>
            <a href='https://www.linkedin.com/in/bryan-solis-54b859243/' target='_blank'>
                <img src={require('../../assets/linkedin.png')} alt='Linkedin icon' />
            </a>
            <a href='https://twitter.com/bsolis6878' target='_blank'>
                <img src={require('../../assets/twitter.png')} alt='Twitter icon' />
            </a>
        </footer>
    )
}

export default Footer;