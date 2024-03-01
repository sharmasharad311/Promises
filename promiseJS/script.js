
----------------------Method First

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

-------------------------Method Second

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("promise 2 is working.")
    }, 2000)
    resolve();
}).then(function(){
    console.log("yes 2nd resolve is active")
});
