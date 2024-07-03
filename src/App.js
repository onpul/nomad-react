import styled, { keyframes } from "styled-components";

// `` : back tick
// 백틱 사이에 들어가는 건 css 코드여야 함

// const Circle = styled(Box)`
//   /* background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px; */
//   // 중복되는 코드는 위처럼 (Box)로 기존 내용을 받아올 수 있음
//   border-radius: 50px;
// `;

// 컴포넌트의 태그는 바꾸고 싶고, 스타일은 바꾸기 싫을 때
// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;

// const Link = styled(Btn)``;
// 좋은 방법이 아님.

// 공통으로 적용되어야 하는 요소는 .attrs 로 적용 가능
// const Input = styled.input.attrs({ required: true, minLength: 10 })`
//   background-color: tomato;
// `;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}
export default App;
