'use strict'


 const appl= require('node-fetch');
 function fetchAvatarUrl(userId){
    const response =   appl(`https://catappapi.herokuapp.com/users/${userId}`);
    console.log('url' , `https://catappapi.herokuapp.com/users/${userId}`);
    const data = response.then(resy => resy.json());
    console.log(data);

        // .then(response => response.json()).then(data => data.imageURL);
}

const result = fetchAvatarUrl(123);
console.log(result);
