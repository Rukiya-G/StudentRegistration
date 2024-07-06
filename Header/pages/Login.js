import React from "react";
const Login = () => {
    return(
      <div>
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
            <form className="shadow-lg p-3 mt-5 mb-5 bg-body rounded pt-4 needs-validation" novalidate>
              <div className="mb-3">
                <label className="col-sm-3 col-form-label">Username</label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="un" required />
                </div>
              </div>
              <div className="mb-3">
                <label className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-15">
                  <input type="password" className="form-control" id="password" required />
                  <p className="text-sm-start"><a href="#">Forgot password?</a></p>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Login
              </button>
              <p>Don't have account?<a href="#">Create an account</a></p>
            </form>      
      </div>
    </div>
    );
  };
  export default Login;