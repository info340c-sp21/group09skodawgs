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
                <h2>About Our Project</h2>
                <p>Everyone deserves to be able to sit back and enjoy their time off after working for long periods. With so much energy put into daily tasks, how can you choose a drink that will feel rewarding and match what you need?</p>
                <p>There's no need to invest anymore energy that you may not have. In our app, you can get a selection of drinks (alcoholic or non-alcoholic) based on how you are feeling. Simply choose a "vibe" that you are feeling and we will suggest drinks that will hit the spot. It will also tell you where you can purchase the drink at a local business.</p>
                <p>Enjoy experimenting with drink choices. A reminder for alcoholic drinkers to <i>drink responsibly</i>!</p>

                <h2>Authors and Contact Information</h2>
                <ul>
                    <li>Jade D'Souza - jadedsou@uw.edu</li>
                    <li>Nicholas Liang - liangn@uw.edu</li>
                    <li>Kavya Iyer - kavyai@uw.edu</li>
                    <li>Israel Martinez - israelma@uw.edu</li>
                </ul>
                
            </div>
        ) 
        
    }
}