import React from "react";

import { InputDivs } from "../styles/Create.styled";
export default function Create() {
  return (
    <>
      <form action="">
        <InputDivs>
          <label htmlFor="firstName"> First Name</label>
          <input type="text" id="firstName" />
        </InputDivs>
        <InputDivs>
          <label htmlFor="lastName"> Last Name</label>
          <input type="text" id="lastName" />
        </InputDivs>

      </form>
    </>
  );
}
