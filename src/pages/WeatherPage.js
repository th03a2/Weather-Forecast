import React from 'react';
import axios from 'axios';
import moment from 'moment';

import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBLink,
    MDBBtn,
    MDBIcon
} from 'mdbreact';
import './style.css';

class WeatherPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: this.props.match.params.city,
            weather: undefined,
            main: undefined,
            dt: undefined,
        }
    }
    async componentDidMount() {
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?appid=c49b25031ae4ce4bb2f5d377dfd184e5&q=${this.state.city}`)
            .then((res) => {
                const { weather, main, dt } = res.data;
                this.setState({ weather, main, dt })
            })
    }

    render() {
        const { city, weather, main, dt } = this.state
        return (
            <>
                <div className='mt-3 mb-5'>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md='12' className='mt-4'>
                                <h2 className='text-center my-5 font-weight-bold'>
                                    {city.toUpperCase()} WEATHER
                                </h2>
                                <MDBTable>
                                    <MDBTableHead>
                                        <tr>
                                            <th>Date</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <th>(mm/dd/yyyy)</th>
                                            <th>Temp(F)</th>
                                            <th>Description</th>
                                            <th>Main</th>
                                            <th>Pressure</th>
                                            <th>Humidity</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <td>{dt && moment(new Date(dt * 1000)).format('MM/DD/YYYY')}</td>
                                            <td>{main && main.temp}</td>
                                            <td>{weather && weather[0].description}</td>
                                            <td>{weather && weather[0].main}</td>
                                            <th>{main && main.pressure}</th>
                                            <th>{main && main.humidity}</th>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                                <MDBCol className="mx-auto text-right">
                                    <MDBLink to="/home">
                                        <MDBBtn>
                                            <MDBIcon icon="undo" className="mr-2" />GO BACK
                                        </MDBBtn>
                                    </MDBLink>
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </>
        );
    }
}

export default WeatherPage;
