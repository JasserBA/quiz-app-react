import React from 'react'
import data from '../data.json'
import { Link } from "react-router-dom";

const Result = ({scores}) => {
  return (
    <div className="score-section">
      You scored {scores} out of {data.Football.length}
      <div>
        <Link to="/">
          <button className="playagain-button">
            Play again!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Result