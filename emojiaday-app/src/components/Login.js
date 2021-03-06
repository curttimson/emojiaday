import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { requestLogin } from '../actions/authActions';

class Login extends Component {
  render() {
    const { dispatch } = this.props;

    const openAuth0 = () => {
      dispatch(requestLogin());
    };

    return (
      <Button color="inherit" onClick={openAuth0}>
        Login
      </Button>
    );
  }
}

export default connect()(Login);
