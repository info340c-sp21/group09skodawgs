import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


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
        const mystyle = {
            border: '1px white',
            marginTop: '10px',
            marginBottom: '10px',
            marginLeft: '20px',
            float: 'center'
        };
        return (
            <div className="about-text">
                <h2>About Our Project</h2>
                <p>Everyone deserves to be able to sit back and enjoy their time off after working for long periods. With so much energy put into daily tasks, how can you choose a drink that will feel rewarding and match what you need?</p>
                <p>There's no need to invest anymore energy that you may not have. In our app, you can get a selection of drinks (alcoholic or non-alcoholic) based on how you are feeling. Simply choose a "vibe" that you are feeling and we will suggest drinks that will hit the spot. It will also tell you where you can purchase the drink at a local business.</p>
                <p>Enjoy experimenting with drink choices. A reminder for alcoholic drinkers to <i>drink responsibly</i>!</p>

                <h2>Authors and Contact Information</h2>
                <ul>
                <div class = "flex-container2">
                <div class="flex1">
                <Card style={mystyle}>
                <CardImg className="about-images" src={"jade.png"} alt="image of woman with short hair and hoop earrings" />
                <CardBody>
                    <CardTitle>Jade D'Souza</CardTitle>
                    <CardText>email: jadedsou@uw.edu </CardText>
                    <CardText>favorite drink: pina colada </CardText>
                </CardBody>
                </Card>
                </div>
                <div class="flex1">
                <Card style={mystyle}>
                <CardImg className="about-images" img src={"./img/nick.png"} alt="image of girl with short hair and hoop earrings" />
                <CardBody>
                    <CardTitle>Nicholas Liang</CardTitle>
                    <CardText>email: liangn@uw.edu </CardText>
                    <CardText>favorite drink: tequila shot, salt + lime</CardText>
                </CardBody>
                </Card>
                </div>
                </div>
                    <li>Kavya Iyer - kavyai@uw.edu</li>
                    <li>Israel Martinez - israelma@uw.edu</li>
                </ul>
                
            </div>
        ) 
        
    }
}