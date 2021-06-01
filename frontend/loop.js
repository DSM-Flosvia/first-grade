const arr = [0, 1, 2, 3, 4, 5];

//일반적인 for문
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//for of 배열에서 많이 사용하는 반복문
for (let a of arr) {
  console.log(a);
}

//for in 오브젝트의 키값을 가져오는 반복문
const obj = {
  name: "name",
  age: 19,
  func: () => console.log("a"),
};

for (let o in obj) {
  console.log(obj[o]);
}
