import React, { Component } from 'react';
import * as d3c from 'd3-collection';
import * as d3 from 'd3';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.updateSelection = this.updateSelection.bind(this);
        this.state = {
            data: [],
            keys: [],
            mood: 'Mood',
            type: 'Type'
        }
    }

    updateSelection = (s) => {
        this.setState({ mood: s.mood, type: s.type });
    }

    componentDidMount() {
        d3.csv('/data.csv').then((d) => {
            this.setState({ data: d, keys: d3c.keys(d[0]) })
        })
    }
    render() {
        return (
            <div className="home-elements">
                <IntroText></IntroText>
                <br />
                <DrinkSelection></DrinkSelection>

            </div>
        );
    }
}

class DrinkSelection extends Component {
    render() {
        let dataItems = this.props.keys.map((item) => {
            return (
                <option
                    key={item}
                text={item}
                onClick={() => this.props.clickHandler(item)}>
                    {item}
                </option>
            )
        })
        return (
            <div className='drink-selection'>
                <div className='container-fluid ingredients-box'>
                    <div className="row">
                        <div className="col-lg-9">
                            <form>
                                <label htmlFor="moods" className="main-title">How are you feeling today?</label><br />
                                <select name="moods" id="moods">
                                    <option value="DEFAULT" disabled>-- select a mood --</option>
                                    <option value="1"> Happy </option>
                                    <option value="2"> Sad </option>
                                    <option value="3"> Excited </option>
                                    <option value="4"> Tired </option>
                                    <option value="5"> Angry </option>
                                </select><br />
                                {/* <br />
                                <label htmlFor="types" className="main-title">What kind of drink?</label><br />
                                <select name="types" id="types">
                                    <option value="DEFAULT" disabled>-- select a type --</option>
                                    <option value="1"> Alcoholic </option>
                                    <option value="2"> Non-Alcoholic </option>
                                </select><br />
                                <br /> */}

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

/*function MyButton() {

    let handleClick = function (event) {
        console.log("clicky clicky");
    }
    //this.props.name, this.props.soup
    //make a button with an `onClick` attribute!
    //this "registers" the listener and sets the callback
    return <input onClick={handleClick} type="submit" className="submit" value="Submit" style={{ color: '#202427' }} />;
}*/

class IntroText extends Component {
    render() {
        return (
            <div className="landing-text">
                <h1 className="logo text">
                    <span className='drinkingchoices'>Drink Choices</span>
                </h1>
                <h3 className="slogan text">
                    <span>Woop Woop!</span><span></span>
                </h3>

                <p className="landing-instructions text">Let's figure out how to customize drinks together!</p>
                <div className='martini-box'>
                    <div className='whoosh'>Let's begin.</div>
                </div>
            </div>
        );
    }
}

/*class IngMidBox extends Component {
    render() {
        return (
            <div className='container-fluid ingredients-box'>
                <div className="row">
                    <div className="col-lg-9">
                        <MoodForm></MoodForm>
                    </div>

                </div>

            </div>
        );
    }
}*/

/*class MoodForm extends Component {

    render() {
        return (
            <form>
                <label htmlFor="moods" className="main-title">How are you feeling today?</label><br />
                <select name="moods" id="moods">
                    <option disabled selected value>-- select a mood --</option>
                </select><br />
                <br />
                <label htmlFor="types" className="main-title">What kind of drink?</label><br />
                <select name="types" id="types">
                    <option disabled selected value>-- select a type --</option>
                </select><br />
                <br />
                <input type="submit" className="submit" value="Submit" style="color: #202427;" />
            </form>
        );
    }
}*/


