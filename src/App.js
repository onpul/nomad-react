import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
// `` : back tick
// 백틱 사이에 들어가는 건 css 코드여야 함

function App() {
  return (
    <Father>
      <div></div>
      <div></div>
    </Father>
  );
}
export default App;
