// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;

//     console.log(`Money Box: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(10);

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins+=coins;
        console.log(`Money Box: $${saveCoins}`);
    }
    return countCoins;
}

const moneybox = moneyBox();
moneybox(5);
moneybox(10);