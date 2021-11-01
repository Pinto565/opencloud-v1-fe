import React from "react";
import { Link } from "react-router-dom";

export default function CertificateStatus(props) {
  return (
    <div>
      <div className="vh-100 d-flex justify-content-center align-items-center flex-column px-3">
        <p className="badge bg-primary text-uppercase fs-5 mb-3">
          IMEI == {props.result.imei}
        </p>
        <p className="badge bg-primary text-uppercase fs-5 mb-3">
          Email Address == {props.result.email}
        </p>
        <p className="badge bg-primary text-uppercase fs-5 mb-3">
          IP Address == {props.result.ip_address}
        </p>
        <p className="badge bg-primary text-uppercase fs-5 mb-3">
          Status == {props.result.status}
        </p>
        <Link to = "/">
        <button className="btn btn-success">Home</button>
        </Link>
      </div>
    </div>
  );
}
