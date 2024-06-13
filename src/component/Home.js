import React from "react";
import NavBar from "../layout/NavBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import employeedata from "../employeeData";

const Home = () => {
  
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setData(employeedata);
  }, []);

  const handleUpdate = (id) => {
    const emp = employeedata.filter(item => item.id === id)
    if (emp !== undefined) { 
        setId(id);
        setName(emp[0].name);
        setNumber(emp[0].number);
        setEmail(emp[0].email);
    }
  }
  const handleDelete = (id) => {
    if (id > 0) {
        if (window.confirm(`Confirm Delete This Id ${id}.`)) {
            const emp = employeedata.filter(item => item.id !== id)
            setData(emp)
         }
     }
}

console.log("epm",employeedata)
  return (
    <div>
      <NavBar />
      <br />
      <div className="d-flex justify-content-center">
        <h3>CRUD Operation</h3>
      </div>
      <div className="d-flex justify-content-end m-5">
        <Link class="btn btn-outline-primary" to="/create">
          Create User
        </Link>
      </div>
      <table className="table table table-striped m-5">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employeedata.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{ item.name }</td>
                <td>{ item.number }</td>
                <td>{ item.email }</td>
                <td>
                  <Link to="/editEmployee/id">
                    <button type="button" className="btn btn-warning me-2" onClick={() => handleUpdate(item.id)}>
                      <i class="fa fa-edit"></i>
                    </button>
                  </Link>
                  <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                    <i class="	fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
