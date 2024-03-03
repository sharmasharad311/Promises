const promiseNew = new Promise(function(resolve, reject){
    setTimeout(function(){
        let age = 10;
        if(age>=18){
            resolve(function(){
                return console.log("resolve: you are Eligible");
            });
        }else{
            reject(function(){
                return console.log("reject: you are not eligible.");
            })
        }
    }, 2000)
});

async function promiseConsumed(){
    
    try{
    const response = await promiseNew;
    console.log(response);
    }
    catch(error) {
    console.log(error);
    }
}
promiseConsumed()