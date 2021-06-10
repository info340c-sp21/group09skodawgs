import React, { Component } from 'react';
import * as d3c from 'd3-collection';
import * as d3 from 'd3';
import _ from 'lodash';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import firebase from 'firebase/app';
import './index.css'; //import css file!

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.updateSelection = this.updateSelection.bind(this);
        this.state = {
            drinks: [],
            keys: [],
            selectedDrink: ''
        };
    }

    updateSelection = (selection) => {
        this.setState({ selectedDrink: selection });

    }

    componentDidMount() {
        d3.csv('data/data.csv').then((d) => {
            this.setState({ drinks: d, keys: d3c.keys(d[0]) });
        });
        // this.data = firebase.database().ref('data');
    }
    render() {
        return (
            <div className="home-elements">
                <DrinkCardRow drink={this.state} />
                <IntroText selDrink={this.state.selectedDrink}></IntroText>
                <br />
                <DrinkSelection drink={this.state} updateSelection={this.updateSelection} />
                <br />
            </div>
        );
    }
}



/*function MyButton() {

    let handleClick = function (event) {
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
                </h1>
                <h3 className="slogan text">
                    <span>Woop Woop!</span><span></span>
                </h3>

                <p className="landing-instructions text">Let's figure out how to customize drinks together</p>
                <div className='martini-box'>
                    <div className='whoosh'>Let's begin.</div>
                </div>
            </div>
        );
    }
}


class DrinkCard extends Component {
    render() {
        const mystyle = {
            border: '1px black',
            marginTop: '10px',
            float: 'center'
        };
        return (
            <Card style={mystyle}>
                <CardImg className="bar-card-images" src={this.props.value.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle> Your Drink is: {this.props.value.drink}</CardTitle>
                    <CardText> Recipe created by: {this.props.value.author}</CardText>
                    <Button><a href={this.props.value.link} target="_blank">{'View Recipe!'}</a></Button>
                </CardBody>
            </Card>

        );
    }
}

class DrinkCardRow extends Component {
    render() {
        let drinkKeys = this.props.drink.drinks.map((item) => {
            return item;
        });

        let num = Math.floor(Math.random() * drinkKeys.length);

        let drinkCardArray = this.props.drink.drinks.map((item) => {
            let drinkOption = this.props.drink.selectedDrink;
            //we return a drink card based on the users input
            if (drinkOption.includes(item.type) && drinkOption.includes(item.mood)) {
                return (<DrinkCard value={item} key={item.drink} />);
            }
        })


        //try me functionality here
        if (num == 10) {
            num = 9;
        }

        let emptyArrayFlag = true;
        for (var i = 0; i < drinkCardArray.length; i++) {
            if (drinkCardArray[i] != null) {
                emptyArrayFlag = false;
            }
        }
        let drinkRandomlyChosen = drinkKeys[num];
        let emptyArraysomethingidk = drinkKeys.map((item) => {
            if (drinkRandomlyChosen == item) {
                return (<DrinkCard value={item} key={item.drink} />);
            }
        }
        )
        if (emptyArrayFlag) {
            let count = 0;
            drinkCardArray = this.props.drink.drinks.map((item) => {
                if (item == drinkRandomlyChosen) {
                    return (<DrinkCard value={item} key={item.drink} />);
                }
            })
        }

        //making sure that card is only displayed when drink is chosen
        let drinkHeader = "";
        let drinkOption = this.props.drink.selectedDrink;
        if (drinkOption === "" || drinkOption === "DEFAULT") {
            drinkHeader = "";
        }
        else {
            drinkHeader = "Chosen Drink for you!"
        }

        //returning the drink
        return (
            <div className="drink-chosen random">
                <h2>{drinkHeader}</h2>
                {drinkCardArray}
            </div>
        );
    }
}

class OneMood extends Component {


    render() {
        return (
            <option value={(this.props.value.mood) + (this.props.value.type)} >
                {this.props.value.mood + ' '} {this.props.value.type + ' beverage'}
            </option>
        );
    }
}


class DrinkSelection extends Component {

    handleClick = (item) => {
        this.props.updateSelection(item.target.value);

        // this.setState({selectedDrink: item.target.value});
        this.selectedDrink = item.target.value;

    }

    render() {
        // let dataItems = this.props.keys.map((item) => {
        //     return (
        //         <option
        //             key={item}
        //             text={item}
        //             onClick={() => this.props.clickHandler(item)}>
        //             {item}
        //         </option>
        //     )
        // })
        let moodArray = [];

        this.props.drink.drinks.map((item) => {
            if (!moodArray.includes(item.mood)) {
                //const handleClick = () => {this.props.updateSelection(this.props.drink.drinks.mood)
                //this.handleClick(item.mood)
                moodArray.push(<OneMood value={item} key={item.link} />);


            }
            return moodArray;

        });
        // let test = (this.props.drink.drinks.map((item)=> { 
        // }));
        return (
            <div className='drink-selection'>
                <div className='container-fluid ingredients-box'>
                    <div className="titles">
                        <div className="col-lg-9">
                            <form>
                                <label htmlFor="moods" className="main-title">
                                    How are you feeling today?
                                    <div >
                                        <select name="types" id="types" onChange={this.handleClick}>
                                            <option value="DEFAULT">{'-- select a vibe --'}</option>
                                            {moodArray}
                                        </select>
                                    </div>


                                </label><br />
                                <br />
                                {/* <br />
                                <label htmlFor="types" className="main-title">What kind of drink?</label><br />
                                
                                    <option value="DEFAULT" disabled>-- select a type --</option>
                                    <option value="1"> Alcoholic </option>
                                    <option value="2"> Non-Alcoholic </option>
                                </select><br />
                                <br /> */}

                            </form>

                            <div className="col-lg-offset-3 col-lg-3">
                                <div className='random-centered random-title'> can't decide?
                                    <div>
                                        <button className="random random-centered button main-title" onClick={this.handleClick}>Try Me!</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


// class RandomSelect extends Component {
//     randomDrink() {
//         let drinkKeys = Object.keys(DRINKS);
//         let num = Math.floor(Math.random() * drinkKeys.length);
//         drinkType = drinkKeys[num];
//         num = Math.floor(Math.random() * DRINKS[drinkType].length)
//         if (drinkType == 'alcoholic' && num == 4) {
//             num = num - 1;
//         }

//         return renderDrink(drinkType, DRINKS[drinkType][num].mood);
//     }

//     render() {
//         return (

//         );
//     }
// }

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


