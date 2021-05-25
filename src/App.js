import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import { HashRouter as Router, Route, Link } from "react-router-dom";

class App2 extends Component {
    render() {
        return(<div className="container">
                    <Router>

                    </Router>
                </div>
        );
}
}

class TopBar extends Component {
    render() {
        return (
            <header class="container-fluid head">
                <div class="row">
                    <div class="col-lg-offset-2 col-lg-4">
                        <h1 class="top-logo drinkingchoices">Drink Choices</h1>
                    </div>
                    <div class="col-lg-offset-3 col-lg-3">
                        <div class='random-centered random-title'> can't decide?
                            <button class="random random-centered button main-title">Try Me!</button>
                        </div>
                    </div>
                </div>
		    </header>
        );
    }
}


class IngMidBox extends Component {
    render() {
        return (
            <div class='container-fluid ingredients-box'>
                <div class="row">
                    <div class="col-lg-9">
                        <form>
                            <label for="moods" class="main-title">How are you feeling today?</label><br/>
                            <select name="moods" id="moods">
                                <option disabled selected value>-- select a mood --</option>
                            </select><br/>
                            <br/>
                            <label for="types" class="main-title">What kind of drink?</label><br/>
                            <select name="types" id="types">
                                <option disabled selected value>-- select a type --</option>
                            </select><br/>
                            <br/>
                            <input type="submit" class="submit" value="Submit" style="color: #202427;"/>
                        </form>

                    </div>

                </div>
            </div>
        );
    }
}


class IngSidebar extends Component {
    render() {
        return (
            <aside class="sidebar green" id="container">
                <div class="ingredients-side">
                    <div class="title">Chosen feelings of your day</div>
                    <img src="./assets/media/cocktail_shaker.png" class="shaker"/>
                    <div class="sidebox">
                        <ul class='side-list' id='answer-list'></ul>
                    </div>
                    <div class="ingredients-confirm">
                    </div>
                </div>
            </aside>
        );
    }
}


class InstrMidBox extends Component {
    render() {
        return (
            <div class='container-fluid instructions-box'>
                <div class="row">
                    <div class="col-lg-9">

                        <label class="main-title">Here's Your Match:</label>
                        <div class="instructions-list">
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <label class="main-title">Other Options:</label>
                        <div class="drink-side-list">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class InstrSidebar extends Component {
    render() {
        return (
            <aside class="sidebar blue" id="container">
                <div class="ingredients-side">
                    <div class ="title links">Link to recipe:</div>
                    <div class="sidebox">
                        <ul class='links-side-list' id="links-list"></ul>
                    </div>
                </div><br/>
                <div class="suggestion-side">
                    <div class ="title links">Suggest a drink:</div>
                    <form id="suggestion-form">
                        <label for="drinkSug">What's the name?</label><br/>
                        <input type="text" id="drinkSug" name="drinkSug" required/>
                        <label for="moodSug">What mood does this fit?</label><br/>
                        <select name="moodSug" id="moodSug">
                            <option disabled selected value required>-- select a mood --</option>
                        </select><br/>
                        <label for="typeSug">What type of drink?</label><br/>
                        <select name="typeSug" id="typeSug">
                            <option disabled selected value required>-- select a type --</option>
                        </select><br/>
                        <label for="linkSug">Copy + Paste reciple link? [optional]</label><br/>
                        <input type="text" name="linkSug" id="linkSug"/><br/>
                        <br/>
                        <input type="submit" class="submitSug" value="Submit" style="color: #202427;"/>
                    </form>
                </div>
            </aside>
        );
    }
}


class cheersMidBox extends Component {
    render() {
        return (
            <div class='container-fluid cheers-box'>
                <div class="row">
                    <div class="col-lg-9">

                        <label class="main-title">Here's your drink:</label>
                        <div class="main-title drink" id="drinkName"></div>
                        <div class="main-title" id="drinkImg"></div>
                        <div class="main-title">That'll be $500.</div>

                    </div>
                    <div class="col-lg-3">
                    </div>

                </div>
            </div>
        );
    }
}


class rightPanel extends Component {
    render() {
        return (
            <div class="right-panel">
                <div class="ingredients-mini right-side">Describe:</div>
                <div class="instructions-mini right-side">Random Drink</div>
                <div class="results-mini right-side">Cheers</div>
            </div>
        );
    }
}
	

export default App2;