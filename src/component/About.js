import React from "react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import img from '../img.png'; 

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-light">
      <div class="card mb-3 bg-light">
  <div class="row g-0">
    <div class="col-md-5">
    <img src={img} style={{height:'450px', width:'750px', paddingTop:'20px', paddingBottom:'20px', paddingRight:'5px', paddingLeft:'20px'}} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-6" style={{paddingTop:'20px', paddingBottom:'20px', paddingLeft:'0px'}}>
      <div class="card-body">
      <h1 class="card-title">About Us</h1>
      <p class="card-text fs-4">Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.
        Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.
        Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>  
</div>    
  <br/>
<Footer/>
    </div>
  );
};

export default About;
