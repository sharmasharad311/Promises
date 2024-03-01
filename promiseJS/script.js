
// ----------------------Method First

// so we are going to learn What are Promises in JavaScript.
const promisesOne = new Promise(function(resolve, reject){
    setTimeout(()=>{
        // console.log("promise is working.")
        resolve();
    }, 2000)
})

//.then work when we pass resolve() in line 7th
promisesOne.then(function(){
    // console.log("promise value inside the then method")
});

// -------------------------Method Second

new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("promise 2 is working.")
    }, 2000)
    resolve();
}).then(function(){
    // console.log("yes 2nd resolve is active")
});


// ------------------------Method Three
new Promise(function(pass, fail){
    setTimeout(function(){
        // console.log("inside the timeout Fn")
        pass({user: "sharad sharma", id: 123})
    }, 1000)
}).then(function(userValue){
    // console.log(userValue.user);
})

// -------------------------Method Four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let value = true;
        if(!value){
            resolve({user: "Sharad", lastname:"Sharma"})
        }else{
            reject(()=>{
                console.log("ERROR")
            })
        }
    }, 2000)
});
promiseFour
.then(function(valueone){
    console.log(valueone);
    return valueone.user;
}).then(function(user){
    console.log(user);
    return user;
}).then(function(valueone){
    console.log(valueone.lastname);
}).catch(function(){
    console.log("yes it's error: 400");
}).finally(()=>{
   setTimeout(() => {
    console.log("Hope you understand the Pomises and promise chaining")
   }, 2000);
})