'use strict'

var returnsPromis = new Promise(function(resolve,reject){
       let ab = 1+1;
       if(ab === 3) {
           resolve('Image added');
       }
       else {
           reject('Not Added');
       }
    });


returnsPromis.then(function(res) {
console.log(res);
}, function(error){
    console.log(error);
});
