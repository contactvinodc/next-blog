import React, { Fragment } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="main-wrapper">
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};
