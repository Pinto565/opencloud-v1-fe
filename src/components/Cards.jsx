import React from "react";

export default function Cards({ data }) {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="label-section fw-bold">
            <p className="card-text"> Address:</p>
            <p className="card-text"> Status:</p>
          </div>
          <div className="details-section">
            <p className="card-text text-wrap">{data.host}</p>
            <p className="card-text text-wrap text-uppercase fw-bold">
              {data.status}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
