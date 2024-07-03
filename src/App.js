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
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 50% {
    /* transform: rotate(360deg); */
    border-radius: 100px;
  } 100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
  animation: ${animation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    font-size: 36px;
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 48px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😎</Emoji>
        {/* 이 경우, span 태그를 바꾸면, 위의 Pseudo 선택자의 태그도 바꿔줘야 하는 번거로움이 있음 */}
        {/* 이모티콘 styled component 를 만들어 줄 것 */}
      </Box>
    </Wrapper>
  );
}
export default App;
