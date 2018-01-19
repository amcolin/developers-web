// Dependencies
import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios';
// Assets
import '../Create/create.css';



class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', company: '', experience: ''};
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
      method: 'post',
      url: 'http://localhost:8000/api/developers',
        data: {
          name: this.state.name,
          company: this.state.company,
          experience: this.state.experience
        }

      })
      .then(function(response) {
        alert("Se creo un nuevo registro de programador");
        history.push("/");
      });
    }


    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8000/api/developers',
    //     data: {
    //       name: this.state.name,
    //       company: this.state.company,
    //       experience: this.state.experience
    //     }

    //   });

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


  render() {
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
            <div className="col-md-12">
              <button className="btn btn-send" type="submit">
                Enviar
              </button>
            </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Create);
