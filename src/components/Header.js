import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse bg-inverse rounded navbar-toggleable-md">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="navbar-brand" to="/">Rant About it</NavLink>
    
            <div className="collapse navbar-collapse" id="containerNavbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create">Create Rant</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/show">Random Rants</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}