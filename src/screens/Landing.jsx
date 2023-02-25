import React from "react";
// Sections
import MyTopNavbar from "../components/Nav/MyTopNavbar";
import MyHeader from "../components/Sections/MyHeader";
import MyServices from "../components/Sections/MyServices";
import MyProjects from "../components/Sections/MyProjects";
import MyFooter from "../components/Sections/MyFooter"

export default function Landing() {
  return (
    <>
      <MyTopNavbar />
      <MyHeader />
      <MyServices />
      <MyProjects />
      <MyFooter />
    </>
  );
}


