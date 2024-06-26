import React, { useState } from "react";
import NavBar from "../layout/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import { v4 as uuid } from "uuid";
import employeedata from "../employeeData";

const Home = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [checkPassword , setcheckPassword] = ({
  //   name : ""
  // })
  const [rePassword, setRePassword] = useState("");
  var history = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const ids = uuid(); // Creating unique id
    var a = name,
      b = number,
      c = email,
      d = password,
      p = rePassword;
    if (
      name === "" ||
      number === "" ||
      email === "" ||
      password === "" ||
      rePassword === ""
    ) {
      // alert("Please Fill The Form");
      return;
    }
    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }
    employeedata.push({
      id: ids,
      name: a,
      number: b,
      email: c,
      password: d,
      rePassword: p,
    });
    history("/employee");
  };
  return (
    <>
      <NavBar />
      <section className="bg-light" style={{background: '#E0EAFC' ,background:' -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC) ',
      background: 'linear-gradient(to right, #CFDEF3, #E0EAFC)'}}>
        <div className="mask d-flex align-items-center h-50 gradient-custom-3">
          <div className="container h-100 my-5">
            <div className="row d-flex justify-content-center align-items-center h-80">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                  <div className="card-body p-5 ">
                    <h2 className="text-uppercase text-center mb-5">
                      Registration Form
                    </h2>
                    <form class="was-validated" novalidate>
                      <div className="form-outline mb-4">
                        <label className="form-label" for="validationCustom01">
                          Enter Your Name
                        </label>
                        <input
                          type="text"
                          id="validationCustom01"
                          className="form-control"
                          placeholder="Name"
                          aria-describedby="inputGroupPrepend"
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                        <div class="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please Fill a Name.
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" for="form3Example3cg">
                          Enter Your Number
                        </label>
                        <input
                          type="tel"
                          id="form3Example3cg"
                          placeholder="91xxxxxx00"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          minLength={10}
                          title="enter a 10-digit phone number"
                          required
                          className="form-control"
                          onChange={(e) => setNumber(e.target.value)}
                        />
                        <div class="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please Fill a Number.
                        </div>
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form3Example4cg">
                          Enter Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example4cg"
                          placeholder="john@gmail.com"
                          pattern="[a-z0-9._%+-]+.@example\.com"
                          title="enter valid email"
                          required
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div class="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please Fill a Email.
                        </div>
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form4Example4cg">
                          Enter Your Password
                        </label>
                        <input
                          type="password"
                          id="form4Example4cg"
                          placeholder="*********"
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Must contain at least one number and one uppercase and lowercase varter, and at least 8 or more characters"
                          className="form-control"
                          minLength={8}
                          maxLength={16}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button
                          id="toggle-password"
                          type="button"
                          class="d-none"
                          aria-label="Show password as plain text. Warning: this will display your password on the screen."
                        ></button>
                        <div class="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please Fill a 8 characters Password.
                          <div id="message">
                        <small>Password must contain the following:</small><br/>
                        <small id="varter" class="invalid">
                          A <b>lowercase</b> varter
                        </small><br/>
                        <small id="capital" class="invalid">
                          A <b>capital (uppercase)</b> varter
                        </small><br/>
                        <small id="number" class="invalid">
                          A <b>number</b>
                        </small><br/>
                      </div>
                        </div>
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="form5Example4cg">
                          Enter Your Re-Type Password
                        </label>
                        <input
                          type="password"
                          id="form5Example4cg"
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          minLength={8}
                          maxLength={16}
                          title="Must contain at least one number and one uppercase and lowercase varter, and at least 8 or more characters"
                          placeholder="*********"
                          className="form-control"
                          required
                          onChange={(e) => setRePassword(e.target.value)}
                        />
                        <div class="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please Fill a 8 characters Re-Enter Password.
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-outline-primary me-2"
                          onClick={(e) => handelSubmit(e)}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
