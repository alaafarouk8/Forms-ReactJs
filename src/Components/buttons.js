import React from "react";
import { NavLink } from "react-router-dom"

function Buttons() {
  return (
    <div className="navigation" >
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <div>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Login
                </NavLink>
               </li>
               <li className="nav-item">
                <NavLink className="nav-link" to="/signUp">
                  SignUp
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Buttons; 