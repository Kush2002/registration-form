import React from "react";
import NavBar from "../layout/NavBar";
import { Link, useNavigate } from "react-router-dom";
import employeedata from "../employeeData";

const Home = () => { 
  let history = useNavigate();
  function setID(id, name, number, email) {
  localStorage.setItem("id", id);
  localStorage.setItem("Name", name);
  localStorage.setItem("Number", number);
  localStorage.setItem("Email", email);
  // alert(id)
  }
  function deleted(id) {
    let index = employeedata
        .map(function (e) {
            return e.id;
        })
        .indexOf(id);
    employeedata.splice(index, 1);
    history("/");
}
  return (
  <>
       <NavBar />
  <div class="container table-responsive py-5 ">
      <div className="d-flex justify-content-end">
          <Link className="btn btn-secondary me-2 mb-3" to='/create' >Create</Link>
      </div>
      <table class="table table-bordered table-hover">
      <thead class="thead-dark">
      <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      {employeedata.map((item, index) => {
          return (
              <>
              <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td>{item.email}</td>
              <td>
              <Link className="btn btn-warning me-2" to='/editEmployee' onClick={(e) => setID(item.id, item.name, item.number, item.email)}>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
              <Link className="btn btn-danger" onClick={(e) => deleted(item.id)}>
                <i class="fa fa-trash" aria-hidden="true"></i></Link></td>
              </tr>
              </>
          );
      })}
      </tbody>
  </table>
  </div>
  </>
  );};
export default Home;
