import React from "react";
import "../style.css";

function ListItemComp(props) {
  return (
    <div onClick={props.itemClick} className="listComp">
      <div className="mx-1">
        <div>
          <label htmlFor="emp-name" className="fs-4 empName">
            {props.empName}
          </label>
        </div>

        <div className="d-flex justify-content-between">
          <label htmlFor="emp-id">Id: {props.empId}</label>
          <label htmlFor="emp-email">Email:{props.empEmail}</label>
        </div>
        <label htmlFor="emp-address">Address:{props.empAddress}</label>
      </div>
      <hr className="line" />
    </div>
  );
}

export default ListItemComp;
