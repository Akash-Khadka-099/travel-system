import styled from "styled-components";

export const DivContainer = styled.div`
  width: 40%;
  margin: 30px auto;
  border: 1px solid black;
  border-radius: 5px;

@media(max-width: 1100px){
width : 70%
}

  @media(max-width: 768px){
      width: 75%;
  }
`;

export const Form = styled.form`
  margin: 50px auto;
`;

export const InputDivs = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const Input = styled.input`
  height: 35px;
  background-color: #f1f1f1;
  border: none;
  padding: 10px 15px;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Button = styled.button`
width: 90px;
  padding: 10px;
  margin: 20px auto;
  color: red;
  font-size: 16px;
  border: none;
  background-color: #1f5156;
  color: yellow;
  border-radius: 9px;

  &:hover{
      transform: scale(0.98);
      cursor: pointer;
  }
`;
