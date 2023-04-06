import React, { useState } from "react";

export default function App() {
  let string = "";
  let handleOnClick = (e) => {
    string = string + e.target.innerHTML;
    document.getElementById("enter").value = string;
  };


  let calculate = () => {
    try{
    string = eval(string);
    document.getElementById("enter").value = string;
    }
    catch{
      document.getElementById("enter").value = "Invalid Entry";
    }
  };

  let Delete = () => {
    string = "";
    document.getElementById("enter").value = string;
  };

  let cancle = () => {
    string = string.slice(0,-1);
    document.getElementById("enter").value = string;
  };

  return (
    <div>
      <div className="container">
       
        <div className="calc">
          <input
            type="text"
            placeholder="0"
            className="input"
            id="enter"
          ></input>
          <button className="button" id="cancle" onClick={cancle}>
            CL
          </button>
          <button className="button" id="delete" onClick={Delete}>
            DEL
          </button>
          <button className="button" onClick={handleOnClick}>
            %
          </button>
          <button className="button" onClick={handleOnClick}>
            /
          </button>
          <button className="button" onClick={handleOnClick}>
            7
          </button>
          <button className="button" onClick={handleOnClick}>
            8
          </button>
          <button className="button" onClick={handleOnClick}>
            9
          </button>
          <button className="button" onClick={handleOnClick}>
            *
          </button>
          <button className="button" onClick={handleOnClick}>
            4
          </button>
          <button className="button" onClick={handleOnClick}>
            5
          </button>
          <button className="button" onClick={handleOnClick}>
            6
          </button>
          <button className="button" onClick={handleOnClick}>
            -
          </button>
          <button className="button" onClick={handleOnClick}>
            1
          </button>
          <button className="button" onClick={handleOnClick}>
            2
          </button>
          <button className="button" onClick={handleOnClick}>
            3
          </button>
          <button className="button" onClick={handleOnClick}>
            +
          </button>
          <button className="button" onClick={handleOnClick}>
            .
          </button>
          <button className="button" onClick={handleOnClick}>
            0
          </button>
          <button className="button" id="equale" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
