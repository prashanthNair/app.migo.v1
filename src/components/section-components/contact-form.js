import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact_Form extends Component {
  render() {
    let anchor = "#";
    let imgalt = "image";
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <div className="contact-form-area pd-top-112">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title text-center w-100">
                  <h2 className="title">
                    GET IN <span>TOUCH</span>
                  </h2>
                  <p>Ask Your Queries</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5">
                <img
                  src={publicUrl + "assets/img/others/21.png"}
                  alt={imgalt}
                />
              </div>
              <div className="col-lg-7 offset-xl-1">
                <form className="riyaqas-form-wrap mt-5 mt-lg-0">
                  <div className="row custom-gutters-16">
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input type="text" className="single-input" />
                        <label>Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input type="text" className="single-input" />
                        <label>E-mail</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <input type="number" className="single-input" />
                        <label>Phone</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <input type="text" className="single-input" />
                        <label>Subject</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <textarea
                          className="single-input textarea"
                          cols="20"
                        ></textarea>
                        <label className="single-input-label">Message</label>
                      </div>
                    </div>
                    <div class="form-check col-md-12">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        <Link to="/terms">Terms and Conditions</Link>
                      </label>
                    </div>
                    <div className="col-12">
                      <br />
                      <a className="btn btn-red mt-0" href={anchor}>
                        Send
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact_Form;
