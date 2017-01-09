// src/components/NotFound/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class NotFound extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
        <div className={classnames('NotFound', className)} {...props}>
            <div className="title" data-content="404">
                404
            </div>

            <div className="subtitle" data-content="Oops, the page you're looking for doesn't exist">
                Oops, the page you're looking for doesn't exist.
            </div>

            <div className="buttons">
                <a className="button" href="/">Go to homepage</a>
            </div>
        </div>
    );
  }
}