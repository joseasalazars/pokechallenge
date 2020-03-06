import React from "react";
import styled from "styled-components";
import "./Loader.css";

const Loader = () => (
  <Container>
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Container>
);

export default Loader;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e3e3e3;
`;
