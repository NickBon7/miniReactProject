import React from "react";
import Starters from "./components/Menu/Starters";
import Main from "./components/Menu/Main";
import Desserts from "./components/Menu/Desserts";
import Drinks from "./components/Menu/Drinks";
import WelcomePage from "./WelcomePage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap";

function Page() {
  return (
    <React.Fragment>
      <h1 className="title-style">Our Menu</h1>
      <div>
        <Tabs className="tabs-style">
          <Tab eventKey="welcome" title="Welcome">
            <WelcomePage />
          </Tab>
          <Tab eventKey="starters" title="Starters">
            <Starters />
          </Tab>

          <Tab eventKey="mains" title="Mains">
            <Main />
          </Tab>
          <Tab eventKey="desserts" title="Desserts">
            <Desserts />
          </Tab>
          <Tab eventKey="drinks" title="Drinks">
            <Drinks />
          </Tab>
        </Tabs>
      </div>
      <footer className="footer-style">
        &copy; {new Date().getFullYear()} Copyright: Restaurant{" "}
      </footer>
    </React.Fragment>
  );
}

export default Page;
