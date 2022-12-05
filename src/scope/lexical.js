const myGlobal = 0;

function myFunction(){
    const myNumber = 4;
    console.log(myGlobal);

    function parent(){ //funcion interna
        const inner = 5;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();