// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: []
    }
  }
  componentDidMount() {
    this.DevelopersList();
  }

  DevelopersList() {
    axios.get('http://localhost:8000/api/developers')
      .then(res => {
        this.setState({
          developers: res.data
        })
      })
  };

  _renderDeveloper(developer) {

    return (
    <th key={developer.id}>{developer.name}{developer.company}</th>
    // <th key={developer.id}>{developer.company}</th>



    )
  }


  render() {

    console.log(this.state.developers)

    const name = this.state.developers.name;
    console.log(name);

    return (
      <div className="Home">
        <table>
          <tr>
            <th>First Name</th>
            <th>Company</th>
            <th>Experience</th>
          </tr>
          <tr>
          {this.state.developers.map(this._renderDeveloper)}
          </tr>
        </table>



      </div>
    );
  }
}

export default Home;
