import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function TemporaryName() {
    return (
        <div>
            <div className='middle'>
                <img className='cat_image' src='./cat_image.jpg' alt='Cat Image' />
                <h1>Jin</h1>
                <h2>Frontend Developer</h2>
                <h3>jin.website</h3>
                <FontAwesomeIcon icon={faEnvelope} />
                <h2 id='about'>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

               
            </div>
        </div>
    );
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"));
