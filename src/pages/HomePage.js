import React from 'react';
const createHistory = require("history").createBrowserHistory;

import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
} from 'mdbreact';
import './style.css';

class HomePage extends React.Component {
    constructor() {
        super()
        this.auth = JSON.parse(localStorage.getItem('githubAuth'));
        this.state = {
            city: undefined,
        };
    }
    displayWeather = () => {
        let { city } = this.state;
        if (city) {
            let history = createHistory();
            history.push(`/${city}/weather`)
            let pathUrl = window.location.href;
            window.location.href = pathUrl;
        } else {
            alert('Please enter your City')
        }
    }

    render() {
        return (
            <>
                <div className='mt-3 mb-5'>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md='12' className='mt-4'>
                                <h2 className='text-center my-5 font-weight-bold'>
                                    {this.auth.displayName}
                                </h2>
                                <p className='text-center my-5' >{this.auth.photoURL}</p>
                                <MDBCol md="6" className="mx-auto">
                                    <MDBInput
                                        label="Please Enter City Name"
                                        icon="city"
                                        onChange={
                                            (event) => {
                                                this.setState({
                                                    city: event.target.value
                                                })
                                            }
                                        }
                                    />
                                </MDBCol>
                                <MDBCol className="mx-auto text-center">
                                    <MDBBtn onClick={this.displayWeather} color="secondary">
                                        <MDBIcon icon="sun" className='mr-2' />Display Weather
                                    </MDBBtn>
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </>
        );
    }
}

export default HomePage;
