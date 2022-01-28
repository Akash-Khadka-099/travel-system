import React, { useRef, useEffect, useState } from "react";

import { Form, InputDivs, Input, DivContainer, Button } from "./Form.styled";

function FormFill() {

  const [location, setLocation] = useState({
    lat : "",
    long : ""
  })

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(onSucess, onError)
  })

  function onSucess(position){
    setLocation({
      lat : position.coords.latitude,
      long : position.coords.longitude
    })
  }

  function onError(){
    window.alert("geolocation not available ")
  }
 

  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();

  function handleSubmit(e) {
    

    e.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;


    const InputDatas = {
      username: enteredUsername,
      email: enteredEmail,
      address: enteredAddress,
      latitude : location.lat,
      longitude : location.long
      
    };

    console.log(InputDatas);
  }

  return (
    <>
      <DivContainer>
        <Form onSubmit={handleSubmit}>
          <InputDivs>
            <label htmlFor="username">Username</label>
            <Input
              required
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              ref={usernameInputRef}
            />
          </InputDivs>
          <InputDivs>
            <label htmlFor="email">Email</label>
            <Input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              ref={emailInputRef}
            />
          </InputDivs>
          <InputDivs>
            <label htmlFor="address">Address</label>
            <Input
              required
              type="text"
              name="address"
              id="address"
              placeholder="Enter your address"
              ref={addressInputRef}
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
