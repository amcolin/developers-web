import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import {withRouter} from "react-router-dom";
import axios from 'axios';

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {id: '', open: true,};
    this.handleChangeId = this.handleChangeId.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    if (this.state.id === "")
    {
     alert("Por favor confirme id del programador");

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
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.props.history.push("/");
  };

  render() {
    const { open } = this.state;
    console.log(this.state.id)

    return (
      <div>

        <Modal open={open} onClose={this.onCloseModal} little>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <div className="row custom-row">
            <div className="col-md-12">
            <h2>Si esta seguro de eliminar el registro escriba el id {this.props.match.params.devId}</h2>
            </div>
            </div>
            <div className="row custom-row">
            <div className="col-md-12">
              <input className="input-custom" type="text" placeholder="ID" onChange={this.handleChangeId}/>
            </div>
            </div>
            <div className="row custom-row">
            <div className="col-md-12">
              <button className="btn btn-send" type="submit">
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