import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
} from 'mdbreact';
import './style.css';

import { githubProvider } from '../config/authMethod';
import socialMediaAuth from '../service/auth';

class LandingPage extends Component {
  constructor() {
    super()
    this.state = {
      redirectToReferrer: false,
    }
  }
  handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    if (res) {
      localStorage.setItem('githubAuth', JSON.stringify(res));
      this.setState({ redirectToReferrer: true });
    }
  }

  render() {
    const { redirectToReferrer, auth } = this.state;
    if (redirectToReferrer) { return <Redirect to='/home' />; }
    return (
      <>
        <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
        <div className='mt-3 mb-5'>
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md='10'
                className='mx-auto float-none white z-depth-1 py-2 px-2'
              >
                <MDBCardBody className='text-center'>
                  <h2 className='h2-responsive mb-4'>
                    <strong className='font-weight-bold'>
                      GOAL
                    </strong>
                  </h2>
                  <MDBRow />
                  <p className='pb-4'>
                    Build a simple application with ReactJS and then demonstrate it running
                    natively in a web browser
                  </p>
                  <MDBRow className='d-flex flex-row justify-content-center row'>
                    <MDBBtn color="primary" onClick={() => this.handleOnClick(githubProvider)}>
                      <MDBIcon icon='sign-in-alt' className='mr-2' />Login with GitHub
                      </MDBBtn>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
        </div>
      </>
    );
  }
}

export default LandingPage;