// src/components/InstagramFeed/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import './style.css';

export default class InstaPhoto extends Component {

  render() {
    const { caption,
            tags,
            link,
            likes,
            images,
          } = this.props.photo;
    const { className } = this.props;
    return (
      <div className={classnames('InstaPhoto', className)}>
        <h6>{caption.text}</h6>
        <div className="image">
          <img src={images.standard_resolution.url}></img>
        </div>
      </div>
    );
  }
}