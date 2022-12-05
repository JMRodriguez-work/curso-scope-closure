function saludo(){
    let userName = 'Ana'; //funcion local
    console.log(userName);

    if(userName === 'Ana'){
        console.log(`Hello ${userName}!`);
    }
}

saludo();
console.log(userName); //no se puede acceder