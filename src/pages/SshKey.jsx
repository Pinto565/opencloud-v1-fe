import React from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { useState , useEffect } from "react";

export default function SshKey() {
    const [sshkey , setSshKey] = useState({})
    const [dataReceived , setDataReceived] = useState(false)

useEffect(() => {
    axios.get("http://172.23.22.233:5000/ssh_key").then((res) => {
        setSshKey(res.data);
        setDataReceived(true)
    })
} , [])

  return (
    <div>
      {dataReceived ? (<div className="vh-100 d-flex justify-content-center align-items-center flex-column px-3">
        <p className="badge bg-primary text-uppercase fs-5 mb-3">
          SSh key == {sshkey.ssh_key}
        </p>
      </div>) : (
          <Loader/>
      )}
    </div>
  );
}
