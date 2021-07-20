import React, { useState } from "react";
import { useEffect } from "react";

function PostData(props) {
  const [empId, setEmpId] = useState(props.objectData.employeeId);
  const [empName, setEmpName] = useState(props.objectData.employeeName);
  const [email, setEmail] = useState(props.objectData.employeeEmail);
  const [address, setAddress] = useState(props.objectData.employeeAddress);

  const clickUpdate = () => {
    console.log(empId);
    console.log(empName);
    console.log(email);
    console.log(address);

    var empData = {
      employeeId: empId,
      employeeName: empName,
      employeeEmail: email,
      employeeAddress: address,
    };

    props.addEvent(empData);
  };

  useEffect(() => {
    return () => {
      setEmpId(props.objectData.employeeId);
      setEmpName(props.objectData.employeeName);
      setEmail(props.objectData.employeeEmail);
      setAddress(props.objectData.employeeAddress);
    };
  }, [props.objectData]);
  return (
    <div className="d-flex flex-column mt-5">
      <div className="d-flex justify-content-between mb-2">
        <label htmlFor="empId">employeeId:</label>
        <input
          type="text"
          className="w-50"
          value={empId}
          onChange={(e) => {
            setEmpId(e.target.value);
          }}
        />
      </div>
      <div className="d-flex justify-content-between mb-2">
        <label htmlFor="empName">employeeName:</label>
        <input
          type="text"
          className="w-50"
          value={empName}
          onChange={(e) => {
            setEmpName(e.target.value);
          }}
        />
      </div>
      <div className="d-flex justify-content-between mb-2">
        <label htmlFor="empEmail">employeeEmail:</label>
        <input
          type="text"
          className="w-50"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="d-flex justify-content-between mb-2">
        <label htmlFor="empName">employeeAddress:</label>
        <input
          type="text"
          className="w-50"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>
      <div className="d-flex justify-content-around mt-5">
        <button className="mx-2 px-4 btn btn-danger">Delete</button>
        <button className="mx-2 px-4 btn btn-success" onClick={clickUpdate}>
          Update/Add
        </button>
      </div>
    </div>
  );
}

export default PostData;
