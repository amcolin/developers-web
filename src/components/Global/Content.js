import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/Content.css';

class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };
  render() {
    const { body } = this.props;
    return (
      <div className="Content">
        {body}
      </div>
    );
  }
}

export default Content;
