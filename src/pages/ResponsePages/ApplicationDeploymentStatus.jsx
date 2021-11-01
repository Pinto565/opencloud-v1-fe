import React from "react";
import { Link } from "react-router-dom";

export default function ApplicationDeploymentStatus(props) {
  return (
    <div>
      <div>
        <div className="vh-100 d-flex justify-content-center align-items-center flex-column px-3">
          <p className="badge bg-primary text-uppercase fs-5 mb-3">
            {props.result.status}
          </p>
          <p className="badge bg-primary text-uppercase fs-5 mb-3">
            {props.result.public_site}
          </p>
          <p className="badge bg-primary text-uppercase fs-5 mb-3">
            {props.result.command}
          </p>
          <Link to="/">
            <button className="btn btn-success">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
