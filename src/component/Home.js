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
    let history = useNavigate();
    const handelSubmit = (e) => {
        e.preventDefault();
        const ids = uuid(); // Creating unique id
        let uni = ids.slice(0, 8); // Slicing unique id
        let a = name, b = number, c = email;
        if (name === "" || number === "" || email === "") {
            alert("invalid input");
            return;
        }
        employeedata.push({ id: uni, name: a, number: b, email: c });
        history("/employee");
    }
  return (
    <>
      <NavBar />
      <section className="bg-light">
        <div class="mask d-flex align-items-center h-50 gradient-custom-3">
          <div class="container h-100 my-5">
            <div class="row d-flex justify-content-center align-items-center h-80">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card shadow-sm p-3 mb-5 bg-white rounded">
                  <div class="card-body p-5 ">
                    <h2 class="text-uppercase text-center mb-5">Registration Form</h2>
                    <form>
                      <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">
                          Enter Your Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example3cg">
                          Enter Your Number
                        </label>
                        <input
                          type="number"
                          id="form3Example3cg"
                          placeholder="91xxxxxx00"
                          title="Error Message" pattern="[1-9]{1}[0-9]{9}"
                          class="form-control form-control-lg"
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                      <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cg">
                          Enter Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example4cg"
                          placeholder="john@gmail.com"
                          class="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-outline-primary me-2"
                          onClick={(e) => handelSubmit(e)}>
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
      <Footer/>
    </>
  );
};

export default Home;
