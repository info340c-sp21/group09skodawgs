import React, { Component } from 'react';
import * as d3c from 'd3-collection';
import * as d3 from 'd3';
import _ from 'lodash';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './index.css'; //import css file!
import { MDBCol } from "mdbreact";


export class BarsPage extends Component {
    constructor(props) {
        super(props);
        //this.updateSelection = this.updateSelection.bind(this);
        this.state = {
            bar: [],
            keys: [],
            selectedDrink: ''
        };
    }

    componentDidMount() {
        d3.csv('data/bars.csv').then((d) => {
            this.setState({ bar: d, keys: d3c.keys(d[0]) });
            console.log("indidmount rn: ", this.state);
        });
    }
    render() {
        return (
            <div>
                <BarIntroText />
                <SearchBar />
                <div> <BarCardRow barState={this.state}/></div>
            </div>
        )
    }
}

class BarIntroText extends Component {
    render() {
        return (
            <div>
                <h2> Explore and Bookmark Local Bars Near You</h2>
                <p>
                    While you can always make drinks at home, going out to local bars is a great way to save time while also supporting the businesses around your area. Using the search bar, look up your area code to see if there are any bars we recommend near you.
                </p>
            </div>
        );
    }
}

class SearchBar extends Component {
    render() {
        return (
            <MDBCol md="6">
                <div className="active-pink-3 active-pink-4 mb-4">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </div>
            </MDBCol>
        );
    }
}

class BarCard extends Component { 
    render() {
        console.log(this.props.bar);
        const mystyle = {
            border: '1px black',
            marginTop: '10px',
            float: 'right'
          };
        return (
                <Card style={mystyle}>
                    <CardImg top width="25%" src={this.props.bar.img} alt={this.props.bar.imgalt} />
                    <CardBody>
                        <CardTitle> Bar Name: {this.props.bar.name}</CardTitle>
                        <CardSubtitle> Zipcode: {this.props.bar.zipcode}</CardSubtitle>
                        <CardText> Address: {this.props.bar.address}</CardText>
                        <Button><a href={this.props.bar.website} target="_blank">{'Visit Website'}</a></Button>
                        <Button><a href={this.props.bar.website} target="_blank">{'Bookmark Me'}</a></Button>
                    </CardBody>
                </Card>
              
        );
    }
}

class BarCardRow extends Component { 
    render() {
        let barCardArray = this.props.barState.bar.map((item) => {
            //let drinkOption = this.props.drink.selectedDrink;
            //if (drinkOption.includes(item.type) && drinkOption.includes(item.mood)) {
            return (<BarCard bar={item} key={item.id} />);
           // }
        })
        return (
            <div className="drink-chosen random">
                <h2>Bars Chosen For You</h2>
                {barCardArray}
            </div>
        );
    }
}

