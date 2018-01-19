import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import {withRouter} from "react-router-dom";
import axios from 'axios';

// Assets

import '../Delete/delete.css';

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {id: '', name: '', company: '', experience: '', open: true};
    this.handleChangeId = this.handleChangeId.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    if (this.state.id === "")
    {
     alert("Por favor confirme id del programador");

    }

    else if (this.state.id !== this.props.match.params.devId){
      alert("Por favor ingrese id correcto del programador");
    }

    else {
      const history = this.props.history;
      axios({
      method: 'delete',
      url: 'http://localhost:8000/api/developers/' + this.props.match.params.devId,
        data: {
          id: this.state.id
        }

      })
      .then(function(response) {
        alert("Se elimino el registro de programador");
        history.push("/");
      });
    }

  }

  handleChangeId(event) {
    this.setState({id: event.target.value});
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.props.history.push("/");
  };

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
    const { open } = this.state;
    console.log(this.state.id)

    return (
      <div>

        <Modal open={open} onClose={this.onCloseModal} little>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="custom-modal">
            <div className="row custom-row">
            <div className="col-md-12">
            <h3>Esta apunto de eliminar el registro:</h3>
            <p>Nombre: {this.state.name}</p>
            <p>Compañia: {this.state.company}</p>
            <p>Experiencia: {this.state.experience}</p>
            </div>
            </div>
            <div className="row custom-row">
            <div className="col-md-12">
            <h4>Si esta seguro de eliminar escriba el id: {this.props.match.params.devId}</h4>
            </div>
            </div>
            <div className="row custom-row">
            <div className="col-md-12">
              <input className="input-custom" type="number" min="0" placeholder="ID" onChange={this.handleChangeId}/>
            </div>
            </div>
            <div className="row custom-row">
            <div className="col-md-12">
              <button className="btn btn-cancel" type="submit">
                Eliminar
              </button>
            </div>
            </div>
          </div>
        </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Delete);