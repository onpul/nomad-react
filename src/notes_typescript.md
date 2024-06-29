# #3.0 Call Signatures

```typescript
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
```

- 함수를 구현하기 전에 타입을 미리 생각하도록 해 주기 때문에 좋은 것.
- 각 매개변수에 대한 타입을 함수 정의 단계에서 작성하지 않고, 따로 단계를 구분할 수 있게 되었다는 점에서 편리함.

# #3.1 Overloading

> 필요성: 외부 라이브러리 사용 시 오버로딩이 필요하기 때문에 알아둬야 함.

> 요약: **오버로딩은 '여러 call signatures가 있는 함수일 뿐이다.'**

### 나쁜 예시

```typescript
const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};
```

- 나쁜예시임. 매우매우 소수만 할 수 있기 때문

### 좋은 예시

```typescript
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    conosole.log(config);
  } else {
    console.log(config.path);
  }
};
```

- 패키지나, 라이브러리를 디자인할 때 많이 사용됨.
- 실제로 사용되는 형태.

### 기타

```typescript
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
```

- 오버로딩한 함수의 파라미터 개수가 다를 경우
- 많이 사용하진 않지만, 충분히 있을 수 있는 형태
- 마지막 추가 파라미터는 '옵션'이라는 의미임을 기억하기.
