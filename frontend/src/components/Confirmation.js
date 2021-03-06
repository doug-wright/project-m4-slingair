import React from "react";
import styled from "styled-components";

import { themeVars } from "./GlobalStyles";
import tombstone from "../assets/tombstone.png";

const Confirmation = (props) => {
  if (typeof(props.location.state) !== 'undefined') {
    return (
      <Wrapper>
        <DetailBox>
          <Heading>Your flight is confirmed!</Heading>
          <p><StyleBold>Reservation #:</StyleBold> {props.location.state.id}</p>
          <p><StyleBold>Flight #:</StyleBold> {props.location.state.flight}</p>
          <p><StyleBold>Seat #:</StyleBold> {props.location.state.seat}</p>
          <p><StyleBold>Name #:</StyleBold> {props.location.state.givenName} {props.location.state.surname}</p>
          <p><StyleBold>Email #:</StyleBold> {props.location.state.email}</p>
        </DetailBox>
        <TombStone />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <DetailBox>To view your reservation, please click the Reservation link.</DetailBox>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

const DetailBox = styled.div`
  margin-top: 150px;
  width: 450px;
  /* height: 250px; */
  border: 2px solid ${themeVars.alabamaCrimson};
  border-radius: 5px;
  padding: 15px;
  line-height: 2.2;
  font-size: 0.9rem;
`;

const Heading = styled.div`
  color: ${themeVars.alabamaCrimson};
  border-bottom: 2px solid ${themeVars.alabamaCrimson};
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const TombStone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 450px;
  height: 132px;
  background-image: url(${tombstone});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyleBold = styled.span`
  font-weight: bold;
`;

export default Confirmation;
