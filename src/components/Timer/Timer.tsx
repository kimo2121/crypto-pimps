import React, { useState, useEffect } from "react";
import styled from "styled-components";
import countdown from "../../assets/images/countdown.png";
const RowContainer = styled.div`
  color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: center;
  gap: 1.4vmax;
`;

const Heading = styled.h1`
  color: #e5b7ff;
  text-align: center;
  font-size: 1.6vmax;
  letter-spacing: -0.5px;
  font-weight: bold;
  margin-bottom: 25px;
  font-family: 60s\Pop.ttf;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70px;
  height: 58px;
`;

const ItemValue = styled.span`
  color: black;
  font-size: 2.2vmax;
  font-weight: bold;
  margin-bottom: 0px;
  background-color: #e5b7ff;
  padding: 10px 0px;
  text-align: center;
`;
const ItemLabel = styled.p`
  color: white;
  font-size: 14px;
  margin-bottom: 3px;
  letter-spacing: 0;
`;

const Card = styled.div`
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Timer = ({ mintStartAt }: any) => {
  const [title, setTitle] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerVisible, setTimerVisible] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now() / 1000;
      if (now < mintStartAt) {
        setTitle(`Countdown`);
        setDays(Math.floor((mintStartAt - now) / (60 * 60 * 24)));
        setHours(Math.floor((mintStartAt - now) / (60 * 60)) % 24);
        setMinutes(Math.floor((mintStartAt - now) / 60) % 60);
        setSeconds(Math.floor(mintStartAt - now) % 60);
        setTimerVisible(true);
      } else {
        setTimerVisible(false);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [mintStartAt]);

  return timerVisible ? (
    <Card>
      <RowContainer>
        <Item>
          <ItemValue id="days">
            {days.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </ItemValue>
          <ItemLabel>Day</ItemLabel>
        </Item>
        <Item>
          <ItemValue id="days">
            {hours.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </ItemValue>
          <ItemLabel>Hour</ItemLabel>
        </Item>
        <Item>
          <ItemValue id="days">
            {minutes.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </ItemValue>
          <ItemLabel>Min</ItemLabel>
        </Item>
        <Item>
          <ItemValue id="days">
            {seconds.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </ItemValue>
          <ItemLabel>Sec</ItemLabel>
        </Item>
      </RowContainer>
    </Card>
  ) : (
    <></>
  );
};

export default Timer;
