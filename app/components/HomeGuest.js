import React, { useState } from "react";
import Page from "./Page";
import Axios from "axios";

export const HomeGuest = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post("/register", {
        username,
        email,
        password,
      });
      console.log("User was successfully created.");
    } catch (e) {
      console.log("There was an error.");
    }
  }

  return (
    <Page title="Home | Steven's Demo Site" wide={true}>
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Sick of the Twitters and the Facebooks?</h1>
          <p className="lead text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt alias nam laboriosam
            dolorem, nisi voluptatum tempore officia sunt, maxime atque fugit! Numquam ipsa culpa
            atque aut vero, magni facilis ut. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Debitis ut in molestiae accusantium, officiis obcaecati cupiditate unde aliquam
            doloremque atque voluptate eligendi, totam earum necessitatibus perspiciatis suscipit
            illo consequuntur minima!
          </p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlfor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                id="username-register"
                name="username"
                className="form-control"
                type="text"
                placeholder="Pick a username"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email-register"
                name="email"
                className="form-control"
                type="text"
                placeholder="you@example.com"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlfor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password-register"
                name="password"
                className="form-control"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
              Sign up for StevenBook
            </button>
          </form>
        </div>
      </div>
    </Page>
  );
};
