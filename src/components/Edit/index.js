// Dependencies
import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';




class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', company: '', experience: ''

    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name === "")
    {
     alert("Por favor ingrese nombre del programador");

    }
    else if (this.state.company === "") {
      alert("Por favor ingrese compañia del programador");
    }
    else if (this.state.experience === ""){
      alert("Por favor ingrese años de experiencia del programador");
    }
    else {
      const history = this.props.history;
      axios({
      method: 'put',
      url: 'http://localhost:8000/api/developers/' + this.props.match.params.devId,
        data: {
          name: this.state.name,
          company: this.state.company,
          experience: this.state.experience
        }

      })
      .then(function(response) {
        alert("Se actualizo el registro de programador");
        history.push("/");
      });
    }

  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeCompany(event) {
    this.setState({company: event.target.value});
  }

  handleChangeExperience(event) {
    this.setState({experience: event.target.value});
  }

  componentDidMount() {
    this.DeveloperFetch();
  }

  DeveloperFetch() {
    axios.get('http://localhost:8000/api/developers/' + this.props.match.params.devId)
      .then(res => {
        this.setState({
          name: res.data.name,
          company: res.data.company,
          experience: res.data.experience
        })
      })
  };

  render() {
    // console.log(this.state.developers)
    // console.log(this.props.match.params.devId);
    return (
      <div className="create-content">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <div className="row custom-row">
            <div className="col-md-12">
              <input value={this.state.name} className="input-custom" type="text" placeholder="Nombre" onChange={this.handleChangeName}/>
            </div>
            </div>
            <div className="row custom-row">
            <div className="col-md-12">
              <input  value={this.state.company}  className="input-custom" type="text" placeholder="Compañia" onChange={this.handleChangeCompany}/>
            </div>
            </div>
            <div className="row custom-row">
            <div className="col-md-12">
              <input  value={this.state.experience}  className="input-custom" type="number" min="0" max="30" placeholder="Años de experiencia" onChange={this.handleChangeExperience}/>
            </div>
            </div>

            <div className="row custom-row">
            <div className="col-md-10">
              <button className="btn btn-send" type="submit">
                Enviar
              </button>
            </div>
            <div className="col-md-2">
              <Link to="/" className="btn btn-cancel">
                Cancelar
              </Link>
            </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Edit);