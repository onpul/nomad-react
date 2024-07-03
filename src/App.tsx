import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  // 이벤트에 타입 추가하기
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value); // 필기 참고
  };
  return (
    <div>
      <form>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
export default App;
