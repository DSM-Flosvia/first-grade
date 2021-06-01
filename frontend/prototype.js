const nickname = "nickname";

const obj = {
  nickname: "nickname",

  func1: function func() {
    const nickname = "h";
    console.log(this.nickname);
  },
  func2: function () {
    const nickname = "w";
    console.log(this.nickname);
  },
  func3: () => {
    const nickname = "a";
    console.log(this.nickname);
  },
};
function outfunc() {
  const nickname = "out";
  obj.func1();
  obj.func2();
  obj.func3();
}

outfunc();
