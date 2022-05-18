import React from "react";
import Page from "./Page";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Page title="Not Found">
      <div className="text-center">
        <h2>Whoopsie! We cannot find that page. </h2>
        <p className="lead text-muted">
          Visit <Link to="/">homepage</Link> to start again!
        </p>
      </div>
    </Page>
  );
}

export default NotFound;
