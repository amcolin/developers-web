// Dependencies
import React, { Component } from 'react';
import axios from 'axios';



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
    const history = this.props.history;

      axios({
        method: 'post',
        url: 'http://localhost:8000/api/developers',
        data: {
          name: this.state.name,
          company: this.state.company,
          experience: this.state.experience
        }
      });

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

  // CreateDevelopers() {
  //   axios.post('http://localhost:8000/api/developers',{
  //     "name": "Pedro",
  //     "company": "Fabrica",
  //     "experience": 2
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // };

  render() {
    return (
      <form className="white block form-inline" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
          <div className="col-md-6">
            <input value={this.state.name} className="fullwidth" type="text" placeholder="Nombre" onChange={this.handleChangeName}/>
          </div>
          <div className="col-md-6">
            <input  value={this.state.company}  className="fullwidth" type="text" placeholder="Compañia" onChange={this.handleChangeCompany}/>
          </div>
          </div>
          <div className="row">
          <div className="col-md-4">
            <input  value={this.state.experience}  className="fullwidth" type="text" placeholder="Años de experiencia" onChange={this.handleChangeExperience}/>
          </div>
          </div>

          <div className="row">
          <div className="col-md-12">
            <button className="btn btn-default" type="submit">
              Enviar
            </button>
          </div>
          </div>
        </form>
    );
  }
}

export default Create;
