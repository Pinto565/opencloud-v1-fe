import React from "react";
import FadeIn from "../components/FadeIn";

export default function Login() {
  return (
    <div>
      <FadeIn>
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <button className="btn btn-primary">Sign In With Google</button>
        </div>
      </FadeIn>
    </div>
  );
}
