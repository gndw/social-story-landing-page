import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import MyHowToEdit from "./screens/HowToEdit.jsx";
import MyHowToEditStory from "./screens/HowToEditStory.jsx";
import MyHowToEditVersion from "./screens/HowToEditVersion.jsx";
import MyHowToManageVersion from "./screens/HowToManageVersion.jsx";
import MyHowToUploadImage from "./screens/HowToUploadImage.jsx";
import MyHowToPlay from "./screens/HowToPlay.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/how-to-edit">
            <MyHowToEdit />
          </Route>
          <Route exact path="/how-to-edit-story">
            <MyHowToEditStory />
          </Route>
          <Route exact path="/how-to-edit-version">
            <MyHowToEditVersion />
          </Route>
          <Route exact path="/how-to-manage-version">
            <MyHowToManageVersion />
          </Route>
          <Route exact path="/how-to-upload-image">
            <MyHowToUploadImage />
          </Route>
          <Route exact path="/how-to-play">
            <MyHowToPlay />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

