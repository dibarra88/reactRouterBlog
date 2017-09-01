import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShowPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: {}
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        let url = "https://tiny-lasagna-server.herokuapp.com/collections/blogger/" + id
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ details: data })
        });
    }
    render() {
        return (
            <div className="card">
            <div className="card-header">
              {this.state.details.userName}
            </div>
            <div className="card-block">
              <h4 className="card-title">{this.state.details.title}</h4>
              <p className="card-text">{this.state.details.blog}</p>
              <Link  className="btn btn-secondary" to="/show">Back to Rants</Link>
            </div>
          </div>
        )
    }
}