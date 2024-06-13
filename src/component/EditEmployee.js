import React from "react";
import NavBar from "../layout/NavBar";

const EditEmployee = () => {
  return (
    <div>
      <NavBar />
      <section class="bg-image">
        <div class="mask d-flex align-items-center h-50 gradient-custom-3">
          <div class="container h-100 my-5">
            <div class="row d-flex justify-content-center align-items-center h-80">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card shadow-sm p-3 mb-5 bg-white rounded">
                  <div class="card-body p-5 ">
                    <h2 class="text-uppercase text-center mb-5">Update Form</h2>
                    <form>
                      <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">
                          Enter Your Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                        />
                      </div>
                      <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form3Example3cg">
                          Enter Your Number
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                        />
                      </div>
                      <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cg">
                          Enter Your Email
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                        />
                      </div>
                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Update
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
    </div>
  );
};

export default EditEmployee;
