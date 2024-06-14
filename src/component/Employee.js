import React from "react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import employeedata from "../employeeData";

const Employee = () => {
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
      {/* <AddEmployee/> */}
      <section className="bg-light" style={{background: '#E0EAFC' ,background:' -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC) ',
      background: 'linear-gradient(to right, #CFDEF3, #E0EAFC)'}}>
      <div class="container table-responsive py-5" >
        <span className="d-flex justify-content-center mb-5">
          <h3 className="">Employee Details</h3>
        </span>
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
                      <Link
                        className="btn btn-warning me-2"
                        to="/editEmployee"
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        onClick={(e) =>
                          setID(item.id, item.name, item.number, item.email)
                        }
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <div
                        class="modal fade"
                        id="exampleModalLong"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLongTitle"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5
                                class="modal-title"
                                id="exampleModalLongTitle"
                              >
                                Modal title
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">...</div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link
                        className="btn btn-danger"
                        onClick={(e) => deleted(item.id)}
                      >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      </section>
      <Footer />
    </>
  );
};
export default Employee;
