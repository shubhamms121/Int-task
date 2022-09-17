import { TextField } from "@mui/material";
import React from "react";

export const Ctask = () => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}> Pain & Functional Description </h1>
      <h5 style={{ textAlign: "center" }}>
        The Description of the current situation gives your Optimum
      </h5>
      <h5 style={{ textAlign: "center" }}>
        Trainer a picture clues to the underlying cause of your problem
      </h5>
      <TextField
        fullWidth
        style={{ marginLeft: "25px", marginRight: "25px" }}
      />
    </React.Fragment>
  );
};
