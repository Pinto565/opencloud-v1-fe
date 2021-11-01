import React from "react";
import Tick from "../assests/images/server.png";
import "../assests/css/Problem.css";
import { Link } from "react-router-dom";

export default function Problem() {
  return (
    <>
      <section className="error-main">
        <div>
          <div className="error-card text-center">
            <img className="error-img mb-4" src={Tick} alt="Done" />
            <h3 className="">Uh Oh!</h3>
            <h4 className="mt-4">
              We are dealing with an Internal error. Try again sometime later
            </h4>
            <Link to="/">
              <button className="btn btn-success my-3">Home</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
