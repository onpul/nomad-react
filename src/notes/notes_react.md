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

# #3.1 DefinitelyTyped

### 환경설정

1. npm install --save typescript @types/node @types/react @types/react-dom @types/jest
2. src 폴더 안에 있던 App.js와 index.js 파일을 App.tsx와 index.tsx 로 바꾼다.
3. "npx tsc --init" 명령어로 tsconfig.json 파일 생성한 후, tsconfig.json 파일에 "jsx": "react-jsx"추가

   ```
    "compilerOptions": {
      "jsx": "react-jsx"
    }
   ```

4. src/index.tsx에서 수정

   ```
    import ReactDOM from "react-dom/client"

    ## const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
   ```

5. npm i --save-dev @types/styled-components

### @type

- 깃허브의 저장소 중 하나
- 모든 유명한 npm 라이브러리를 가지고 있는 저장소
- 타입스크립트에게 이 패키지가 뭔지 설명하는 용도.

### how to type

- PropTypes는 prop이 거기에 있는지 없는지 확인해 주지만, 코드를 실행한 '후'에만 확인 가능
- 우리가 타입스크립트를 사용하는 이유는 코드가 실행되기 '전'에 오류를 확인하기 위해서임.
- 타입스크립트로 보호해야 함
- interface: object의 shape를 설명해 주는 타입스크립트의 개념
- 예시:

  ```typescript
  interface PlayerShape {
    name: string;
    age: number;
  }

  const sayHello = (playerObj: PlayerShape) =>
    `Hello ${playerObj.name} you are ${playerObj.age} years. old.`;

  //sayHello({name: "nico"})
  // 위 코드 작성 시 자동완성 기능 제공 -> 안정성 보장
  ```

- 중요: Prop Type와 유사하지만, interface는 타입스크립트 코드가 실행되기 전에 알려 주고, Prop Type은 실행 후 브라우저에 에러가 발생(콘솔)

# #3.5 Forms

[예제 코드 참고](https://github.com/nomadcoders/react-masterclass/commit/82ae9ee751263cc6ea14c264009107a5bf7ec1b2)

### 어려웠던 문법 참고

```
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

```

- ES6 문법이에요. event안 curentTarget안에 value의 값을 기존 이름 그대로 value 라는 변수를 만드는 거에요.
- const value = event.currentTarget.value 랑 똑같습니다. 왜 저렇게 복잡하게 하냐고 물어보실수도 있는데 사실 저런식으로 한개만 만들때는 저 문법의 장점이 없어요.
- 헌데 만약에 currentTarget안에서 value, tagName, width, id 이 4개를 가져오고 싶다고 하면 기존 문법으로는 이렇게 써야 되겠죠?

```
const value = event.currentTarget.value;
const tagName = event.currentTarget.tagName;
const width = event.currentTarget.width;
const id = event.currentTarget.id;
```

- 이거를 이렇게 바꿔 쓰실수 있습니다.

```
const {
currentTarget: {value, tagName, width, id}
} = event;
```
