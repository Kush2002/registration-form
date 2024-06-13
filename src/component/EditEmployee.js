import React, { useState, useEffect } from "react";
import NavBar from "../layout/NavBar";
import employeedata from "../employeeData";
import { Link, useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  useEffect(() => {
      const storedId = localStorage.getItem("id");
      const storedName = localStorage.getItem("Name");
      const storedNumber = localStorage.getItem("Number");
      const storedEmail = localStorage.getItem("Email");
      if (storedId && storedName && storedNumber && storedEmail) {
          setId(storedId);
          setName(storedName);
          setNumber(storedNumber);
          setEmail(storedEmail);
      }
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !number || !email) {
          alert("Invalid input. Please fill in all fields.");
          return;
      }
      const updatedEmployee = {
          id,
          name,
          number,
          email
      };
      for (let i = 0; i < employeedata.length; i++) {
          if (employeedata[i].id === id) {
              employeedata.splice(i, 1, updatedEmployee);
              break;
          }
      }
      localStorage.setItem("id", id);
      localStorage.setItem("Name", name);
      localStorage.setItem("Number", number);
      localStorage.setItem("Email", email);
      console.log(id,name,number,email);
      history("/employee");
  };
  
    return (
        <div>
            <NavBar />
            <section className="bg-image">
                <div className="mask d-flex align-items-center h-50 gradient-custom-3">
                    <div className="container h-100 my-5">
                        <div className="row d-flex justify-content-center align-items-center h-80">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                                    <div className="card-body p-5 ">
                                        <h2 className="text-uppercase text-center mb-5">Update Form</h2>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="nameInput">
                                                    Enter Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="nameInput"
                                                    className="form-control form-control-lg"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="numberInput">
                                                    Enter Your Number
                                                </label>
                                                <input
                                                    type="number"
                                                    id="numberInput"
                                                    className="form-control form-control-lg"
                                                    value={number}
                                                    onChange={(e) => setNumber(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="emailInput">
                                                    Enter Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="emailInput"
                                                    className="form-control form-control-lg"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-outline-primary me-2" onClick={(e) => handleSubmit(e)}>
                                                    Update
                                                </button>
                                                <Link to="/employee" className="btn btn-outline-danger">
                                                    Cancel
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EditEmployee;
