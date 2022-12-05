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