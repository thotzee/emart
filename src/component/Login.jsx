import React from "react";

function Login() {
  return (
    <div className="container py-5">
      <form className="login-form">
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="example@examplemail.com"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="flexCheckDefault"
            value=""
          />
          <label className="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button type="Submit" className="btn btn-outline-dark me-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;