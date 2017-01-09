// src/components/App/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

import InstagramFeed from '../InstagramFeed';

class App extends Component {

  render() {
    const { className } = this.props;
    return (
      <div className={classnames('App', className)} id="page-wrapper">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <section id="banner">
          <div>
            <iframe width="900" height="506" src="https://www.youtube.com/embed/slO8lwP6nuQ?feature=oembed" frameborder="0" allowfullscreen></iframe>
          </div>
        </section>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <InstagramFeed />
      </div>
    );
  }
}

export default App;