//let, const, var
let letNum = null;
letNum = "10";
letNum = 0;

const constNum = 0;

//let
//선언 후에 값이 변경될 수 있다.

//const
//선언 후에 값이 변경될 수 없다.

var varNum = 0;
varNum = 10;

var varNum = 10;
//var
//선언 후 값 변경 가능
//재 선언이 가능
//거의 사용되지 않음

//원시 타입
//number
//string
//null
//undefined
////////////////////////////// symbol
//boolean  true or flase

//참조 타입
//object(객체)
// const obj = {
//   key: "value",
//   key1: "value",
//   key2: "value",
// };
//array
// const arr = ["문자", 0, 0];

// let num = 0;
// let num2 = num;
// num2 = 1;
// console.log(num);
// console.log(num2);

// const obj = {
//   age: 19,
// };
// const obj2 = obj;

// obj2.age = 17;

// console.log(obj);
// console.log(obj2);

// obj.key = 0;

// console.log(obj);
const obj = {
  key: "value",
  arr: [1, 2, 3, 4],
  obj: {
    key: "value",
  },
};

//객체 접근 방법
//1. obj.key
//2. obj["key"]

const arr = ["one", "two", "three", "four"];

// for (let a of arr) {
//   console.log(a);
// }

// for (let o in obj) {
//   console.log(o, obj[o]);
// }
