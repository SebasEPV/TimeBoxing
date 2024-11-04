import { useNavigate } from "react-router-dom";
import React from "react";
import './../assets/css/auth.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
   
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              required 
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
          <p className="text-right">
            Don’t have an account? <a href="/sign-up">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
