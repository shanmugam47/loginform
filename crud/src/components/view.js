
import React, { useState } from "react";
//import { Link, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
//import Home from "./pages/home";

const View = (props) => {
  debugger;
 // const data = localStorage.getItem('userInputData')?localStorage.getItem('userInputData'):{};
  const userInput = JSON.parse(localStorage.getItem('userInputData'));
//var userInputData =JSON.parse(userInput);
  debugger;
  
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Login
      </Link>

      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">FirstName: {userInput && userInput.name}</li>
        <li className="list-group-item">LastName: {userInput && userInput.Lastname}</li>
        <li className="list-group-item">Email: {userInput && userInput.email}</li>
        <li className="list-group-item">Gender: {userInput && userInput.list}</li>
      
      </ul>
    </div>
  );
};

export default View;