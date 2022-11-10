import React from "react";

import { AppHeader, AppFooter } from "../organisms";

export default function Default(props) {
  return (
    <div className="container-fluid">
      <AppHeader />
      {props.children}
      <AppFooter />
    </div>
  );
}
