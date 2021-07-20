import React, { useState } from "react";
import ListItemComp from "./ListItemComp";
import "../style.css";
import axios from "axios";
import PostData from "./PostData";

function EmployeeDetails() {
  const [data, setData] = useState([]);

  const clickEventAdd = (empData) => {
    axios.post("http://192.168.18.3:8080/postgressApp/createEmp", empData).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const onClickItem = (itemRecord) => {
    console.log("hello", itemRecord);
  };
  const clickEventGet = () => {
    const url = "http://192.168.18.3:8080/postgressApp/employeeList";
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };
  return (
    <div>
      <div>
        <h1 className="text-center">Employee Details</h1>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="d-flex justify-content-around mt-5">
            <button className="px-3 mb-3" onClick={clickEventGet}>
              Get Details
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
          <PostData addEvent={clickEventAdd}></PostData>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
