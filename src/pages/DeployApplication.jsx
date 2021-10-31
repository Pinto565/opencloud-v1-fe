import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";

export default function DeployApplication() {
  return (
    <div>
      <FadeIn>
        <div className="vh-100 d-flex justify-content-center align-items-center px-3">
          <Link to="/deploy/flask">
            <button className="btn btn-primary">Python - Flask</button>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
