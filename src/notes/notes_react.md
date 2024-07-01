# #2.0 Why Styled Components

- 스타일 컴포넌트 사용 전, 스타일 적용 방법은 총 두 가지
  1. style 속성 이용
  2. css 모듈
- 이 중 css 모듈이 가장 괜찮음(클래스명을 랜덤으로 생성해 줘서, 중복을 막음)
- 최선은 아님, 각각 단점이 있음(ex. style 속성: hover 사용 불가능 / module: 클래스명 복붙 해야 함, 다크 모드나 라이트 모드 구현 힘듦)
- styled components에서는 모든 게 가능.

# #2.1 Our First Styled Component

- `` : back tick
- 백틱 사이에 들어가는 건 css 코드여야 함

# #2.2 Adapting and Extending

- 중복된 스타일에 특정 요소만 프로퍼티로 지정하기

  ```javascript
  // const Box
  background-color: ${(props) => props.bgColor};
  ```

  ```javascript
  // App()
  <Father>
    <Box bgColor="teal" />
    <Box bgColor="tomato" />
  </Father>
  ```
