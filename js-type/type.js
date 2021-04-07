//let, const, vor

// let letNum = 0;
// letNum = 10;

// const constNum = 0;

//let
//선언 후에 값이 변경될 수 있다.

//const
//선언 후에 값이 변경될 수 없다.


// var varnum = 0;
// varnum = 10;

// varnum = 10;
//var
//선언 후에 값 변경이 가능
//재 선언이 가능
//거의 사용되지 않음

//원시 타입
//number
//string
//null
//undefined
//symbol
//boolean true or flase

//참조 타입
//object(객체)
// const boj = {
//     key: "value"
//     key1: "value"
//     key2: "value"
// };
//array
// const arr = ["문자", 0 0];

// const num = 0;
// const num2 = num;

// console.log(num == num2);
// console.log(num === num2);

// const obj = {
//     age: 19,
// };
// const obj = boj;
// obj. age = 17;

// console.log(obj);
// console.log(obj2);

// const obj={
//     key:"value",
//     arr: [1, 2, 3, 4],
//     obj: (
//         key: "value",
//     ),
// };

//객체접근 방법
//1. obj.key
//2. obj["key"]

// obj.key = 0;
// console.log(obj);

// const arr = ["one", "two", "three", "four"];

// for (let a of arr) {
//     console.log(a);
// }

// for (let o in obj) {
//     console.log(o, obj[o]);
// }

//배열 내장 함수

//map
//배열 순회
// const mapArray = arr.map(e, i) => {
//     return e + "num";
// });
// console.log(mapArray);

// function func(a, b) {
//     return a + b;
// }

// ocnst result = func(1, 2);
// console.log(result);