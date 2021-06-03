import React, { useState } from "react";
import Home from "./Home";
import DetailContent from "./DetailContent";
import CreateCard from "./CreateCard";
import NavBarCard from "./NavBarCard";
import useFetch from "./UseFetch";
import { SERVER_URL, API_PATH } from "./Constants";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function HomePage() {
  const [url] = useState(`${SERVER_URL}/${API_PATH}`);
  const [data, ignore] = useFetch(url);

  return ignore ? (
    <div>Wait...</div>
  ) : (
    <Home items={data} serverUrl={SERVER_URL} />
  );
}

function DetailPage() {
  const [{ id }] = useState(useParams());
  const [url] = useState(`${SERVER_URL}/${API_PATH}/${id}`);
  const [data, ignore] = useFetch(url);

  return ignore ? (
    <div>Wait...</div>
  ) : (
    <DetailContent item={data} serverUrl={SERVER_URL} />
  );
}

function App() {
  return (
    <>
      <NavBarCard />
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/cards/:id">
              <DetailPage />
            </Route>
            <Route path="/cards">
              <HomePage />
            </Route>
            <Route path="/create">
              <CreateCard />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
