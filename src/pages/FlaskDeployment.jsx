import React from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import DeploymentStatus from "./CertificateStatus";
import FadeIn from "../components/FadeIn";

export default function FlaskDeployment() {
  const [dataSent, setDataSent] = useState(true);
  const [dataReceived, setDataReceived] = useState(true);

  const testarray = {
    "name" : "pinto",
    "age" : "20"
  }

  return (
    <div>
      <FadeIn>
        {dataSent ? (
          dataReceived ? (
            <DeploymentStatus given={testarray} >
              </DeploymentStatus>
          ) : (
            <Loader />
          )
        ) : (
          <div>
              <div className="vh-100 d-flex justify-content-center align-items-center flex-column px-3">
                <p className="badge bg-primary text-uppercase fs-5 mb-3">
                  Flask Deployment
                </p>
                <form action="#">
                  <div class="mb-3">
                    <label for="giturl" class="form-label">
                      Git URL
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="giturl"
                      name="giturl"
                      placeholder="Enter Git URL"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="device" class="form-label">
                      Device Private IP
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="device"
                      id="device"
                      placeholder="Enter Device Private IP"
                    />
                    <div className="form-text">
                      Enter the Device Private IP from{" "}
                      <a href="/devices">Status Page</a>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="ssh-port" class="form-label">
                      SSH Port
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="port"
                      id="ssh-port"
                      placeholder="Device's SSH Port"
                    />
                  </div>
                  <button class="btn btn-primary">Add</button>
                </form>
              </div>
          </div>
        )}
      </FadeIn>
    </div>
  );
}
