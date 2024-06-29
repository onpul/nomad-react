/**
 * 파일 변경 내역
 * 24.6.29. 토 : #4.2~#4.5 해당하는 내용 실습 및 필기
 *
 */

// 추상 클래스
// 인스턴스를 만드는 걸 허용하지 않음 -> new User 불가능
// 추상 클래스의 인스턴스 만드는 건 불가능하다.
// 상속받는 클래스가 어떻게 동작해야 할지 일러 주기 위해서 사용하는 것.
// abstract class User {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }
// class Player extends User {
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string): string {
//     return `Hello ${name}. My name is ${this.fullName}`;
//   }
// }
// 중요한 점: 추상 클래스를 만들면, js로 컴파일되었을 때 결국 클래스로 변환 됨
// 그래도 만드는 이유 -> 모든 클래스들이 표준화된 property 와 메소드를 갖도록 해 주는 청사진을 만들기 위해서.
// -> 그래도 사용하지 않는 User 클래스가 js에 남아있으니, 인터페이스를 사용할 것.
// -> 인터페이스는 컴파일해도 js로 바뀌지 않고 사라짐

// 인터페이스를 쓸 때 클래스가 특정 형태를 따르도록 어떻게 강제하는가?

// 추상 클래스 -> 인터페이스 변경
// 인터페이스는 자바스크립트에 없어서 안 보임 -> 장점임
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

// 두 개의 인터페이스 동시 상속도 가능하다.
// 어댑터 디자인 패턴 사용 시 유용하다.
interface Human {
  health: number;
}

// implements 사용
class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number,
  ) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName}`;
  }
}
// 이슈: Property 'firstName' is private in type 'Player' but not in type 'User'
// 인터페이스를 상속할 때에는 property를 private 으로 만들 수 없음

// 인터페이스는 고유한 사  것의 문제점
// 1) private property 들을 사용할 수 없음
// 2) 추상 클래스에서는 가진 변수들을 그대로 가져와 사용할 수 있었으나, 인터페이스에서는 불가능

// 인터페이스도 타입으로 사용 가능하다.
function makeUser(user: User) {
  return {
    irstName: "nico",
    lastName: "las",
    fullName: () => "xx",
    sayHi: (name) => "string",
  };

  // new User() 하지 않아도 됨
}

makeUser({
  firstName: "nico",
  lastName: "las",
  fullName: () => "xx",
  sayHi: (name) => "string",
});

// 4.4 Recap
/**
 * 추상 클래스를 다른 클래스들이 특정 모양을 따르도록 하기 위한 용도로 쓴다면,
 * 추상 클래스보다는 인터페이스 사용이 더 좋다.
 */

// 첫 번째, 기억할 것.
// 타입을 쓰고 싶다면, type 키워드를 사용
// 사용하는 방법은 아래 총 3개
// 1) 오브젝트의 모양 설명
// type Player = {

// }
// 2) 타입 alias 만들기
// type Player = number;

// 3) 타입을 특정된 값으로 만들기
// type Player = "1" | "2"

// 타입과 인터페이스를 만들어 보며, 어떻게 다른지 알아보자.
type PlayerA = {
  name: string;
};

// 타입 상속
type PlayerAA = PlayerA & {
  lastName: string;
};
const playerA: PlayerAA = {
  name: "nico",
  lastName: "xxx",
};

///////
// 인터페이스
interface PlayerB {
  name: string;
}

// 인터페이스 상속
interface PlayerB {
  lastName: string;
}

// property를 추가하고 싶다면
interface PlayerB {
  health: number;
}

const playerB: PlayerB = {
  name: "nico",
  lastName: "xxx",
  health: 3,
};
// A, B 둘 다 인터페이스인지 타입인지를 구분하기 어렵다.
// 둘은 같은 목표인, '타입스크립트에게 오브젝트의 모양과 타입을 알려 주는 목표를' 갖고 있기 때문
// 둘 다 그 목표를 수행하고 있음
// 하지만, 둘을 이용해서 할 수 있는 게 다름. 네가 허용한 게 다름

// 인터페이스와 타입 모두 추상 클래스를 대체해서 쓸 수 있다.
// type PlayerA = {
//   firstNAme: string;
// };
// interface PlayerB {
//   firstNAme: string;
// }
// // 매우 유사, User 클래스에서 Player A, B 모두 상속할 수 있다.
// // 또한 둘 모두 추상 클래스를 대체할 수 있다*****
// class User implements PlayerB {
//   constructor(public firstName: string) {}
// }
// 타입스크립트 커뮤니티에서는, 클래스나 오브젝트의 모양을 정의하고 싶으면
// 인터페이스를 사용하고, 다른 모든 경우에서는 타입을 쓰라고 하고 있다.
// 인터페이스를 상속하는 방법이 적관적이다.
// - 타스 공식 문서 참고

// 정리
// 타입스크립트에게 오브젝트의 모양을 알려주기 위해서는 인터페이스를 쓰고,
// 그 외의 경우에는 타입을 쓰자

// 4.5 Polymorphism
// 다형성, 제네릭, 클래스, 인터페이스 합쳐보기
// 다형성-다른 모양의 코드를 가질 수 있게 해 주는 것
// 다형성을 이루는 방법은, 제네릭을 사용하는 것
// 제네릭은 placeholder 타입을 쓸 수 있도록 해 줌(concrete 타입 말고)

// Storage: 이미 선언된 자바스크립트의 웹 스토리지 API를 위한 인터페이스
interface SStorage<T> {
  [key: string]: T; // key가 제한되지 않은 오브젝트를 정의하게 해 줌
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  // API 구현
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get("key");
stringsStorage.set("hello", "how are you");

const booleansStorage = new LocalStorage<Boolean>();

booleansStorage.get("xxx");
booleansStorage.set("hello", true);
// <T> 제네릭을 인터페이스가 받음
// 우리는 제네릭을 클래스로 보내고, 클래스는 제네릭을 인터페이스로 보낸 뒤에
// 인터페이스는 제네릭을 사용!!!
