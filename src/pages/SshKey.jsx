import React from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import Problem from "../components/Problem";

export default function SshKey() {
  const [sshkey, setSshKey] = useState({});
  const [dataReceived, setDataReceived] = useState(false);
  const [error , setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://107.175.94.152:5000/ssh_key")
      .then((res) => {
        setSshKey(res.data);
        setDataReceived(true);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (error) {
    return <Problem />
  }

  return (
    <div>
      {dataReceived ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <p className="badge bg-primary text-wrap text-break text-uppercase fs-5 px-3 w-50">
            Ssh key == {sshkey.ssh_key}
          </p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
