let ascendingState = true;
let coins;
let priceList;

$( document ).ready(function() {

    priceList = $('#priceList');

    $.get("https://api.coinranking.com/v1/public/coins?base=GBP&timePeriod=7d", function(data, status){
        coins = data.data.coins;
        coins.sort((a, b) => a.price-b.price);
        buildList(coins);
    });
});

function ToggleOrder() {
    ascendingState = !ascendingState;
    coins.sort((a, b) => ascendingState ? a.price-b.price : b.price-a.price);
    buildList(coins);
}

function buildList(coinsList) {
    $(priceList).empty();
    coinsList.forEach( c => {
        let coin = `<li>
                        <p>${c.name}</p>
                        <p>${c.symbol}</p>
                        <p>${c.price}</p>
                    </li>`;
        priceList.append(coin);
    });
}