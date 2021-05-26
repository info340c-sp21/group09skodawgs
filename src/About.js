import React, { Component } from 'react';


export class About extends Component { 
    render() { 
        return (
            <div className="about">
                <AboutText></AboutText>
            </div>
        ) 
        
    }
}

class AboutText extends Component { 
    render() { 
        return (
            <div className="about-text">
                <h1>About Our Project</h1>
                <p> We made this website to help people find drinks, and support the small businesses in their area.</p>
            </div>
        ) 
        
    }
}