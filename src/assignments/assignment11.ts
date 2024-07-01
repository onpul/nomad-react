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
