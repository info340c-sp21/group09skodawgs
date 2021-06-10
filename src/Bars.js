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
            selectedZipcode: ''
        };
    }
    updateSelection = (selection) => {
        this.setState({ selectedZipcode: selection });

    }

    handleChange(event) {
        let field = event.target.name; // which input
        let value = event.target.value; // what value

        let changes = {}; // object to hold changes
        changes[field] = value; // change this field
        this.setState(changes); // update state
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
                <ZipSelection barState={this.state} updateSelection={this.updateSelection} />
                <div> <BarCardRow barState={this.state} /></div>

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
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search bars</span>
                </label>
                <div className="active-pink-3 active-pink-4 mb-4">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </div>
            </MDBCol>
        );
    }
}

class ZipCodes extends Component {
    render() {
        return (
            <option value={(this.props.value.zipcode)} >
                {console.log("currently in zipcode comp: " + this.props.value.zipcode)}
                {this.props.value.zipcode}
            </option>
        );
    }
}

class ZipSelection extends Component {

    handleClick = (item) => {
        this.props.updateSelection(item.target.value);
        this.selectedZipcode = item.target.value;

    }

    render() {
        let zipArray = [];
        console.log(this.props.barState.bar);
        this.props.barState.bar.map((item) => {
            if (!zipArray.includes(item.zipcode)) {
                zipArray.push(<ZipCodes value={item} key={item.id} />);
                //console.log(item.zipcode);
                //console.log(item);
            }
            return zipArray;
        });

        return (
            <div className='zip-selection'>
                <div className='container-fluid ingredients-box'>
                    <div className="titles">
                        <div className="col-lg-9">
                            <form>
                                <label htmlFor="moods" className="main-title">
                                    Choose Your Neighborhood By Zipcode
                                    <div >
                                        <select name="types" id="types" onChange={this.handleClick}>
                                            <option value="DEFAULT">{'-- select a neighborhood --'}</option>
                                            {zipArray}
                                        </select>
                                    </div>

                                </label><br />
                                <br />


                            </form>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

class BarCard extends Component {
    render() {
        //console.log(this.props.bar);
        const mystyle = {
            border: '1px white',
            marginTop: '10px',
            marginBottom: '10px',
            float: 'center'
        };
        const buttonStyle = {marginLeft: '10px'};
        return (
            <Card style={mystyle}>
                <CardImg className="bar-card-images" src={this.props.bar.img} alt={this.props.bar.imgalt} />
                <CardBody>
                    <CardTitle> Bar Name: {this.props.bar.name}</CardTitle>
                    <CardSubtitle> Zipcode: {this.props.bar.zipcode}</CardSubtitle>
                    <CardText> Address: {this.props.bar.address}</CardText>
                    <Button><a href={this.props.bar.website} target="_blank">{'Visit Website'}</a></Button>
                    <Button style={buttonStyle}><a href={this.props.bar.website} target="_blank">{'Bookmark Me'}</a></Button>
                </CardBody>
            </Card>

        );
    }
}

class BarCardRow extends Component {
    render() {
        let barCardArray = this.props.barState.bar.map((item) => {
            let barOption = this.props.barState.selectedZipcode;
            if (barOption.includes(item.zipcode)) {
                //console.log("in barCardRow rn! " + {item})
                return (<BarCard bar={item} key={item.id} />);

            }
        })
        let barHeader = "";
        let zipOption = this.props.barState.selectedZipcode;

        if (zipOption === "" || zipOption === "DEFAULT") {
            barHeader = "";
        }
        else {
            barHeader = "Bars In Your Area"
        }
        return (
            <div className="bar-chosen-random">
                <h2>{barHeader}</h2>
                {barCardArray}
            </div>
        );
    }
}



