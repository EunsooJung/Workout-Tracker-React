import React, { Component } from 'react';
// link to deferrent routes
import { Link } from 'react-router-dom';

// export named Navbar Compoent
export default class Navbar extends Component {
  render() {
    return (
      // Apply bootstrap
      <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>
          Workout Tracker
        </Link>
        <div className='collpase navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <Link to='/' className='nav-link'>
                Exercises
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/create' className='nav-link'>
                Create Exercise Log
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to='/user' className='nav-link'>
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
