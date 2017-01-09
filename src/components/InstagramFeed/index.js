// src/components/InstagramFeed/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import config from '../../config';
import InstaPhoto from '../InstaPhoto';
import './style.css';

export default class InstagramFeed extends Component {

  constructor() {
    super();
    //this.url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${config.InstagramToken}`;
    this.url = `${config.TempUrl}`;
    this.state = {
      feed: []
    };
    this.loadPhotosFromServer();
  }

  render() {
    const { className } = this.props;
    return (
      <div className={classnames('InstagramFeed', className)}>
        <h1>
          Instagram Feed
        </h1>
        {
          (this.state.feed && this.state.feed.length >= 0) &&
            this.state.feed.map((photo, i) => (
              <InstaPhoto key={i} photo={photo}/>
            )) 
        }
      </div>
    );
  }

  loadPhotosFromServer() {
    axios.get(this.url)
      .then(response => {
        this.setState({
          feed: response.data.data
        })
      })
  }
}