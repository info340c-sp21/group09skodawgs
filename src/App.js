import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';

class App2 extends Component {
    render() {
    return(<div class="landing-text">
        <h1 class="logo text">
            <span class='drinkingchoices'>Drink Choices</span>
        </h1>
        <h3 class="slogan text">
            <span>Woop Woop!</span><span></span>
        </h3>
        
        <p class="landing-instructions text">Let's figure out how to customize drinks together!</p>
        
    
        <div class='martini-box'>
        
        <div class='whoosh'>Let's begin.</div>
    </div>
    </div>);
}
}

export default App2;