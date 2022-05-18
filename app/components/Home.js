import React, { useEffect, useContext } from "react";
import Page from "./Page";
import StateContext from "../StateContext";

function Home() {
  const appState = useContext(StateContext);
  return (
    <Page title="Your Feed">
      <h2 class="text-center">
        Hello <strong>{appState.user.username}</strong>, your feed is empty.
      </h2>
      <p class="lead text-muted text-center">Big F you need to make some friends!!!!</p>
    </Page>
  );
}

export default Home;
