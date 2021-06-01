// 1. map
const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// arr.map(function name(e, i) {
//   console.log(e, i);
// });

2. filter
const arr2 = arr.filter((e) => {
  if (e % 2 == 0) return e;
});
console.log(arr2);

// 3. reduce
// const result = arr.reduce((pre, cur) => {
//   console.log(pre, cur);
//   return pre + cur;
// });
// console.log(result);

//4. push, pop
// arr.push(8);
// console.log(arr);
// arr.pop();
// console.log(arr);

//5. shift
// arr.unshift("2");
// console.log(arr);

// arr.shift();
// console.log(arr);

//6. join
// console.log(arr.join(" "));

//7. split
// const str = "string";
// console.log(str.split(""));
