console.log("hello JavaScript");
// so we are going to learn What are Promises in JavaScript.

const promisesOne = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("promise is working.")
        resolve();
    }, 2000)
})

//.then work when we pass resolve() in line 7th
promisesOne.then(function(){
    console.log("promise value inside the then method")
});