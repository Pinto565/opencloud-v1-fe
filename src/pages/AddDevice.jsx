import React from "react";
import FadeIn from "../components/FadeIn";
import { useState } from "react";
import Loader from "../components/Loader";
import CertificateStatus from "./CertificateStatus";
import axios from "axios";

export default function AddDevice() {
  const [dataSent, setDataSent] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);
  const [apiData, setApiData] = useState({});

  // const testarray = {
  //   name: "pinto",
  //   age: "20",
  // };

  const handleOnClick = () => {
    setDataSent(true);
    axios
      .get("http://172.23.22.233:5000/certificate")
      .then((res) => {
        setApiData(res.data);
        console.log(apiData);
      })
      .then(() => {
        setDataReceived(true);
        console.log(apiData);
      })
      .catch((err) => {
        console.log(err.response.data);
        setDataReceived(true)
        setApiData(err.response.data)
      });
  };

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
