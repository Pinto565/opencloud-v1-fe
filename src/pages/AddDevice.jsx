import React from "react";
import FadeIn from "../components/FadeIn";
import { useState, useRef } from "react";
import Loader from "../components/Loader";
import CertificateStatus from "./ResponsePages/CertificateStatus";
import axios from "axios";
import Problem from "../components/Problem";

export default function AddDevice() {
  const [dataSent, setDataSent] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const [apiData, setApiData] = useState({});
  const [error, setError] = useState(false);

  const imeiRef = useRef();
  const emailRef = useRef();

  const handleOnClick = () => {
    setDataSent(true);
    axios
      .get("http://107.175.94.152:5000/certificate", {
        params: {
          imei: imeiRef.current.value,
          email: emailRef.current.value,
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
        // setDataReceived(false);
        // setDataSent(false)
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
            <CertificateStatus result={apiData}></CertificateStatus>
          ) : (
            <Loader />
          )
        ) : (
          <div>
            <div className="vh-100 d-flex justify-content-center align-items-center flex-column px-3">
              <p className="badge bg-primary text-wrap text-uppercase fs-5 mb-3">
                Add Your Device to Opencloud
              </p>
              <form>
                <div class="mb-3">
                  <label for="imei" class="form-label">
                    IMEI Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="imei"
                    name="imei"
                    ref={imeiRef}
                    placeholder="Enter IMEI Number"
                  />
                </div>
                <div class="mb-3">
                  <label for="emailaddress" class="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    ref={emailRef}
                    id="emailaddress"
                    placeholder="Enter your Email Address"
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
