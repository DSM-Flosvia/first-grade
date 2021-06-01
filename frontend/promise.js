const promise=new Promise((res, rej) => {
    if(true) res({data: "data"});
    else rej("fall");
});

console.log(promise);
promise.then((e) => {
    console.log(e);
    return "a";
})
.then((e) => {
    console.log(e);
    console.log("next");
})
.then((e) => {
    console.log("end");
})
.catch((e) => {
    console.log(e);
}).finally((e) => {
    console.log("final");
});


const func = async () => {
    const data = await promise;
    console.log(data);
};

func();