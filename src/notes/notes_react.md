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

# #2.3 'As' and Attrs

- 해당 태그로 동작하고 싶을 때

  ```javascript
  <Btn as="a" href="/">
    버튼입니다
  </Btn>
  ```

- 공통으로 적용되어야 하는 요소가 있을 때

  ```javascript
  const Input = styled.input.attrs({ required: true, minLength: 10 })`
    background-color: tomato;
  `;
  ```

# #2.4 Animations and Pseudo Selectors

- 애니메이션 사용 시에는 keyframes 를 import 해야 한다.

  ```javascript
  import styled, { keyframes } from "styled-components";
  ```

- Pseudo Selectors: styled components가 아닌 요소에 스타일 지정하기

  ```javascript
  const Box = styled.div`
    span {
      font-size: 36px;
    }
  `;
  /* Box 요소 안에 있는 span 요소에 지정 가능 */
  ```

- hover 스타일 지정 시: 아래 두 방법 모두 동일

  1.  ```javascript
      const Box = styled.div`
        span {
          &:hover {
          }
        }
      `;
      /* '&' 는 span(here)을 가리키는 것과 같다. 단축어 같은 기능. */
      ```
  2.  ```javascript
      const Box = styled.div`
        span:hover {
        }
      `;
      /* '&' 없이도 지정이 가능하다. */
      ```

# #2.5 Pseudo Selectors part Two

- 타겟 지정하기

  1.  ```javascript
      <span>😎</span>
      /* 이 경우, span 태그를 바꾸면, 위의 Pseudo 선택자의 태그도 바꿔줘야 하는 번거로움이 있음 */
      /* 이모티콘 styled component 를 만들어 준다. */
      ```
  2.  ```javascript
      ${Emoji} {
        font-size: 36px;
        &:hover {
          font-size: 48px;
        }
        &:active {
          opacity: 48px;
        }
      }
      /* 컴포넌트 타겟 시 '$' 사용하여 지정 */
      ```

# #2.7 Themes

- Themes: 색상을 가진 object
- ThemeProvider import 하기

  ```javascript
  import { ThemeProvider } from "styled-components";
  <ThemeProvider>
    <App />
  </ThemeProvider>;
  // App 을 감싸준다.
  ```

- ThemeProvider 는 prop 하나가 필요

  ```javascript
  const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor: "#111",
  };
  root.render(
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>,
  );
  // theme의 prop 넣어준다.
  ```

  - !중요: 라이트/다크 모드 구현 시, 요소의 이름이 같아야 한다.

  ```javascript
  const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor: "#111",
  };
  const lightTheme = {
    textColor: "#111",
    backgroundColor: "whitesmoke",
  };
  // 'textColor', 'backgroundColor' 이름을 동일하게 설정
  ```
