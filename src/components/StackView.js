import React, { Component } from 'react';
import '../styles/index.css';

import {Form, FormType} from './Form';

export default class StackView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormInFront : true,
      registerFormInFront: false
    };
    this.handleLoginFormClick    = this.handleLoginFormClick.bind(this);
    this.handleRegisterFormClick = this.handleRegisterFormClick.bind(this);
  }

  handleLoginFormClick() {
    if (!this.state.loginFormInFront) {
      this.setState({ 
        loginFormInFront: !this.state.loginFormInFront,
        registerFormInFront: !this.state.registerFormInFront
      });
    }
  }

  handleRegisterFormClick() {
    if (!this.state.registerFormInFront) {
      this.setState({ 
        loginFormInFront: !this.state.loginFormInFront,
        registerFormInFront: !this.state.registerFormInFront
      });
    }
  }

  render() {
    return (
      <div className='stackView'>
        <Form 
          type={FormType.LOGIN}
          onClick={this.handleLoginFormClick} 
          onFront={this.state.loginFormInFront}
        />
        <Form
          type={FormType.REGISTER} 
          onClick={this.handleRegisterFormClick} 
          onFront={this.state.registerFormInFront}
        />
      </div>
    );
  }
}