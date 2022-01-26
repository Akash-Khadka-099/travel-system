import React from "react";

import { Form, InputDivs, Input, DivContainer, Button } from "./Form.styled";

function FormFill() {
  return (
    <>
      <DivContainer>
        <Form>
          <InputDivs>
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
            />
          </InputDivs>
          <InputDivs>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </InputDivs>
          <InputDivs>
            <label htmlFor="address">Address</label>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="Enter your address"
            />
          </InputDivs>
          <InputDivs>
            <Button>Submit</Button>
          </InputDivs>
        </Form>
      </DivContainer>
    </>
  );
}

export default FormFill;
