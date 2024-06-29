// --- 문제1 start ---
// #1-문제: last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
// #1-풀이과정:

// 다형성 적용
type ArrType = {
  (arr: number[]): void;
  (arr: string[]): void;
  (arr: boolean[]): void;
};
// const last:ArrType = (ArrType) => {return ArrType[(ArrType).length-1]};

// 제네릭 적용
type LastType = {
  <T>(arr: T[]): T;
};

// #1-답안1
const last: LastType = (LastType) => {
  return LastType[LastType.length - 1];
};

// #1-답안2
const last_2: ArrType = (ArrType) => {
  return ArrType[ArrType.length - 1];
}; // 다형성 적용

// #1-테스트&결과값 확인
const a = last([0, 1, 2]); // [LOG]: 2
const b = last(["a", "b", "c"]); // [LOG]: "c"
const c = last([true, false, false, true]); // [LOG]: true
const d = last([1, "string", true, ""]); // [LOG]: ""

// Q1) Call Signatures -> type 시작하는 call signatures 구문도 함수인가? 그래서 void를 작성하는 건가?(단순 타입 정의용이고 반환값이 없는 함수이니) / type 구문 내부에 함수 로직도 작성해도 되는가?
// --- 문제1 end ---

// --- 문제2 start ---
// #2-문제: prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
// #2-풀이과정:
type PrependType = {
  // 제네릭 사용
  <T, M>(arr: T[], item: M): (T | M)[];
};
// #2-답안:
const prepend: PrependType = (arr, item) => {
  return [item, ...arr];
};

// #2-테스트&결과값 확인:
// console.log(prepend([1], "2")); // [LOG]: ["2", 1]
// console.log(prepend(["1", "2"], "3")); // [LOG]: ["3", "1", "2"]
// console.log(prepend([false, "2"], 3)); // [LOG]: [3, false, "2"]
// --- 문제2 end ---

// --- 문제3 start ---
// #3-문제: mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
// #3-풀이과정:
type MixType = {
  // <T, M>(arr1:T[], arr2:M[]):T[] | M[]
  <T, M>(arr: T[], arr1: M[]): (T | M)[];
};
const mix: MixType = (arr, arr1) => {
  // console.log("arr: " + arr);
  // console.log("arr1: " + arr1);
  // console.log("[...arr, ...arr1]: " + [...arr, ...arr1]);

  // 구조 분해 할당
  return [...arr, ...arr1];
};

// #3-테스트&결과값 확인:
// console.log(mix(["false", "2"], [3])); // [LOG]: ["false", "2", 3]
// console.log(mix(["1", 2], [false])); // [LOG]: ["1", 2, false]
// --- 문제3 end ---

// --- 문제4 start ---
// #4-문제: count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
// #4-풀이과정:
type CountType = {
  <T>(arr: T[]): number;
};
const count: CountType = (arr) => {
  return arr.length;
};
// #4-테스트&결과값 확인:
// console.log(count(["false", "2"])); // [LOG]: 2
// console.log(count(["false", "2", 1, 2, 3, 4])); // [LOG]: 6
// --- 문제4 end ---

// --- 문제5 start ---
// #5-문제: findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후
//                                존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
// #5-풀이과정:
type FindIndexType = {
  <T>(arr: T[], item: T): number | null;
};
const findIndex: FindIndexType = (arr, item) => {
  // console.log(arr);
  // console.log(item);
  // console.log(arr.indexOf((item)));
  return arr.indexOf(item) < -1 ? null : arr.indexOf(item);
  // console.log(arr, item);
  // return arr[(item)];
};
// #5-테스트&결과값 확인:
// console.log(findIndex(["false", "2"], "2")); // [LOG]: 1
// console.log(findIndex(["false", 1, 2, true], 2)); // [LOG]: 2
// --- 문제5 end ---

// --- 문제6 start ---
// #6-문제: slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다.
// 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
// #6-풀이과정:
type SliceType = {
  <T>(arr: T[], startIndex: number, endIndex?: number): T[];
};
const slice: SliceType = (arr, startIndex, endIndex) => {
  // console.log(arr.slice((startIndex), (endIndex)));
  return arr.slice(startIndex, endIndex);
};
// #6-테스트&결과값 확인:
// console.log(slice([1, 2, 3, 4, 5, 6], 2, 4)); // [LOG]: [3, 4]
// --- 문제6 end ---
