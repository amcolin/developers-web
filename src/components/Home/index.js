// Dependencies
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


// Assets
import '../Home/home.css';
import pic from '../Global/images/smug.png';

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
      <div className="col-sm-6 col-md-3" key={developer.id}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">{developer.name}</h4>
          </div>
          <div className="panel-body text-center nopadding">
            <a><img src={pic} alt="pic" width="150px" /></a>
          </div>
          <div className="panel-body text-center nopadding">
            <h3>Compañia: {developer.company}</h3>
            <h4>Años de experiencia: {developer.experience} </h4>
          </div>
          <div className="panel-footer">
            <div className="clearfix">
              <div className="pull-right">
              <Link to={`/edit/${developer.id}`} className="btn btn-edit" title="Edit">
                <span className="fa fa-edit"></span>
              </Link>
              <Link to={`/delete/${developer.id}`} className="btn btn-delete">
                <span className="fa fa-edit"></span>
              </Link>


              </div>
            </div>
          </div>
        </div>
      </div>


    // <h4 key={developer.id}>{developer.name}</h4>
    // <th key={developer.id}>{developer.company}</th>



    )
  }


  render() {

    console.log(this.state.developers)

    const name = this.state.developers.name;
    console.log(name);

    return (
      <div className="Home developer-content">
          {this.state.developers.map(this._renderDeveloper)}


      </div>



    );
  }
}

export default Home;
