import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";


export default function LandingPage() {
  return (
    <div>
      <FadeIn>
        <div className="vh-100 d-flex justify-content-center align-items-center px-3">
          <Link to="/devices">
            <button className="btn btn-primary">Device Status</button>
          </Link>
          <Link to="/ssh">
            <button className="btn btn-primary mx-3">
              Get Master SSH Key
            </button>
          </Link>
          <Link to="/deploy">
            <button className="btn btn-primary mx-3">
              Deploy A Application
            </button>
          </Link>
          <Link to="/devices/add">
            <button className="btn btn-primary">Add Your Device</button>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
