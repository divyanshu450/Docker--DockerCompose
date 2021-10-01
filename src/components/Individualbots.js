import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import design from "../components/design.css";

export const Individualbots = (props) => {

  console.log(props)
  const dispatch = useDispatch();

  return (
    <div className="Individual-Bot-Container">
      <div className="Bot-Details">
        {/* {details[0].bot} */}
        <h3> BOt NAME </h3>
        <br />
        {/* {details[0].description} */}
        <p> BOT Details </p>
        <br />
        <button>MODERATE RISK</button>
        <button onClick={() => dispatch({ type: "ADD" })}>Buy</button>
      </div>
      <div className="Index-Details">
        Index Value <br />
        {}
      </div>
      <div className="Cagr-Value">
        <p className="CAGR-TEXT">
          CAGR <br />
          {}
        </p>
      </div>
    </div>
  );
};
