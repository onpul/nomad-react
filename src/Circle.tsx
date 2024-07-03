import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string; // bgColor은 스트링이 되어야 한다.
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string; // bgColor은 스트링이 되어야 한다.
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState(1);
  // state의 타입은 한 번 설정하면 변하지 않는다.
  // 원하면 만들 수 있음
  // const [counter, setCounter] = useState<number|string>(0);
  // 가능은 하지만, 자주 사용할 일은 없을 예정

  setCounter(2);

  // bgColor의 타입은 CircleProps의 object 이다 ~
  // 타입스크립트는 CicleProps 안에 bgColor 있구나 하고 알게 됨
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
