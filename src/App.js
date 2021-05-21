import React, { Component } from 'react';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBBtn,
  MDBNavItem,
  MDBFooter,
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Routes from './Routes';
import { Provider } from 'react-redux'

const createHistory = require("history").createBrowserHistory;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: JSON.parse(localStorage.getItem('githubAuth'))
    };
  }

  logout = () => {
    localStorage.clear();
    let history = createHistory();
    history.push(`/`)
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
  }

  render() {
    const { auth } = this.state;
    return (
      <Router>
        <div className='flyout'>
          <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
              <Logo style={{ height: '2.5rem', width: '2.5rem' }} />
              <strong className='align-middle'>Weather Forecast </strong>
            </MDBNavbarBrand>
            <MDBNavbarNav right>
              <MDBNavItem>
                {this.props.isLogin &&
                  <MDBBtn color="primary" onClick={this.logout}                >
                    <strong>Logout</strong>
                  </MDBBtn>
                }
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
          <main style={{ marginTop: '4rem' }}>
            <Routes />
          </main>
          <MDBFooter color='indigo'>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='#'> Tomas B. Pajarillaga Jr. </a>
            </p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
