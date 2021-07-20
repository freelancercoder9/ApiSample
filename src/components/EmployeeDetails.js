import React, { useState, useEffect } from "react";
import ListItemComp from "./ListItemComp";
import "../style.css";
import axios from "axios";

function EmployeeDetails() {
  const [data, setData] = useState([]);
  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addUser, setAddUser] = useState(true);

  const createUser = (empData) => {
    console.log("In side createUser ", empData);
    axios.post("http://192.168.18.3:8080/postgressApp/createEmp", empData).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    setEmpId("");
    setEmpName("");
    setEmail("");
    setAddress("");
  };

  const updateUser = (empData) => {
    console.log("in delete user ", empData);
    axios.put("http://192.168.18.3:8080/postgressApp/updateEmp", empData).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    setEmpId("");
    setEmpName("");
    setEmail("");
    setAddress("");
  };

  const deleteEmp = (empData) => {
    console.log("in delete user ", empData);
    axios
      .delete("http://192.168.18.3:8080/postgressApp/deleteEmpById", {
        data: empData,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    setEmpId("");
    setEmpName("");
    setEmail("");
    setAddress("");
  };

  const createUpdate = (empData) => {
    if (addUser) {
      createUser(empData);
    } else {
      updateUser(empData);
    }
  };

  const onClickItem = (itemRecord) => {
    console.log("hello", itemRecord);
    setEmpId(itemRecord.employeeId);
    setEmpName(itemRecord.employeeName);
    setEmail(itemRecord.employeeEmail);
    setAddress(itemRecord.employeeAddress);
    setAddUser(false);
  };
  const clickEventCreate = () => {
    setAddUser(true);
    setEmpId("");
    setEmpName("");
    setEmail("");
    setAddress("");
  };

  useEffect(() => {
    const url = "http://192.168.18.3:8080/postgressApp/employeeList";
    axios.get(url).then((res) => {
      setData(res.data);
    });
  });
  return (
    <div>
      <div>
        <h1 className="text-center">Employee Details</h1>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="d-flex justify-content-around mt-5">
            <button className="px-3 mb-3" onClick={clickEventCreate}>
              Create Employee
            </button>
          </div>
          <div className="border border-dark p-0 ms-3">
            {data.map((item, index) => {
              return (
                <ListItemComp
                  key={index}
                  empId={item.employeeId}
                  empName={item.employeeName}
                  empEmail={item.employeeEmail}
                  empAddress={item.employeeAddress}
                  itemClick={() => {
                    onClickItem(item);
                  }}
                ></ListItemComp>
              );
            })}
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
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
              <button
                className="mx-2 px-4 btn btn-danger"
                onClick={() => {
                  var ojectData = {
                    employeeId: empId,
                    employeeName: empName,
                    employeeEmail: email,
                    employeeAddress: address,
                  };
                  deleteEmp(ojectData);
                }}
              >
                Delete
              </button>
              <button
                className="mx-2 px-4 btn btn-success"
                onClick={() => {
                  var ojectData = {
                    employeeId: empId,
                    employeeName: empName,
                    employeeEmail: email,
                    employeeAddress: address,
                  };
                  createUpdate(ojectData);
                }}
              >
                Update/Add
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
