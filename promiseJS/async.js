const asyncPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let value = true;
        if(value){
            resolve({user: "sharad", id: 123})
        }else{
            reject("ERROR")
        }
    }, 1000)
})
// here we use Async Await methods instead of then and catch

async function promiseConsumed(){
   try {
    const response = await asyncPromise
    console.log(asyncPromise);
   } catch (error) {
    console.log("error")
   }
}
promiseConsumed();

// to catch the problems or rejections we use try and catch with await.