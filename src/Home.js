import React, { Component } from 'react';
import * as d3c from 'd3-collection';
import * as d3 from 'd3';
import _ from 'lodash';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        //this.updateSelection = this.updateSelection.bind(this);
        this.state = {
            drinks: [],
            keys: [],
            selectedDrink: ''
        };
    }

    updateSelection = (selection) => {
        console.log("IN UPDATE SELECTION FUNCTION " + selection);
        
        

    }

    componentDidMount() {
        d3.csv('data/data.csv').then((d) => {
            this.setState({ drinks: d, keys: d3c.keys(d[0]) });
        });
    }
    render() {
        return (
            <div className="home-elements">
                <IntroText selDrink={this.state.selectedDrink}></IntroText>
                <br />
                <DrinkSelection drink={this.state} updateSelection={this.updateSelection}/>

            </div>
        );
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
                    {this.props.selDrink}
                </h3>

                <p className="landing-instructions text">Let's figure out how to customize drinks together!</p>
                <div className='martini-box'>
                    <div className='whoosh'>Let's begin.</div>
                </div>
            </div>
        );
    }
}

class OneMood extends Component { 
    handleClick = (item) => {
        this.props.updateSelection(item);
       console.log("Ive been clicked"); 
       this.setState({selectedDrink: item});
    }
    
    render() { 
        //console.log(this.props.value);
        return (
            <option value={this.props.value.mood}>
            {this.props.value.mood + ' '} {this.props.value.type}
             </option>
        );
    }
}

class DrinkSelection extends Component {
    
    

    render() {
        console.log(this.props.drink.drinks);
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
      //  console.log(this.props.drinks.mood);
        let moodArray = [];
        
        this.props.drink.drinks.map((item)=> { 
            if (!moodArray.includes(item.mood)) { 
                //const handleClick = () => {this.props.updateSelection(this.props.drink.drinks.mood)
                   // console.log('hi issme')}; //maybe this works? lol sorry my house is noisy
                moodArray.push(<OneMood value={item} onSelect={this.handleClick(item.mood) } key={item.link}  />);
                
            }
            return moodArray;
            
        });
        // let test = (this.props.drink.drinks.map((item)=> { 
        //     console.log(item.mood);
        // }));
        return (
            <div className='drink-selection'>
                <div className='container-fluid ingredients-box'>
                    <div className="row">
                        <div className="col-lg-9">
                            <form>
                                <label htmlFor="moods" className="main-title">
                                    How are you feeling today?
                                    <div >
                                    <select name="types" id="types">
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

                        </div>

                    </div>
                </div>
            </div>
        )
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


