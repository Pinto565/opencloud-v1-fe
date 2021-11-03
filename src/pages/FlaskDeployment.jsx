import React from "react";
import { useState, useRef } from "react";
import Loader from "../components/Loader";
import ApplicationDeploymentStatus from "../pages/ResponsePages/ApplicationDeploymentStatus";
import FadeIn from "../components/FadeIn";
import axios from "axios";
import Problem from "../components/Problem";

export default function FlaskDeployment() {
  const [dataSent, setDataSent] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const [apiData, setApiData] = useState({});
  const [error, setError] = useState(false);

  const gitRef = useRef();
  const deviceRef = useRef();
  const portRef = useRef();

  const handleOnClick = () => {
    setDataSent(true);
    axios
      .get("http://107.175.94.152:5000/deploy/flask", {
        params: {
          giturl: gitRef.current.value,
          device: deviceRef.current.value,
          port: portRef.current.value,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setApiData(res.data);
        // console.log(apiData);
      })
      .then(() => {
        setDataReceived(true);
        // console.log(apiData);
      })
      .catch((err) => {
        // console.log(err.response.data);
        setError(true);
      });
  };

  if (error) {
    return <Problem />;
  }
  return (
    <div>
      <FadeIn>
        {dataSent ? (
          dataReceived ? (
            <ApplicationDeploymentStatus
              result={apiData}
            ></ApplicationDeploymentStatus>
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
                    type="url"
                    class="form-control"
                    id="giturl"
                    name="giturl"
                    ref={gitRef}
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
                    ref={deviceRef}
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
                    ref={portRef}
                    placeholder="Device's SSH Port"
                  />
                </div>
                <button onClick={handleOnClick} class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </FadeIn>
    </div>
  );
}
