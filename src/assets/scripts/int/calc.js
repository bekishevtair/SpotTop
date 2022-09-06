document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector('#calc-form').oninput = ()=>{
    const base = document.getElementById('currency-from').value;
      fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            const amount = document.querySelector("#input-amount").value;
            const currencyTo = document.getElementById('currency-to').value;
            const rate = data.rates[currencyTo];
            function convert(){
                return amount * rate;
            }
            document.querySelector('.display-result').innerHTML = `${amount} ${base.toUpperCase()} equal to ${currencyTo} ${convert().toFixed(4)}`;
        })
        .catch((error) =>{
            console.log("Error: ", error);
        });
        return false;
    };
});


// WIDGETS
var btc = document.getElementById("bitcoin"),
    ltc = document.getElementById("litecoin"),
    eth = document.getElementById("ethereum"),
    doge = document.getElementById("dogecoin"),
    usdt = document.getElementById("tether")

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Clitecoin%2Cethereum%2Cdogecoin%2Ccardano%2Csolana%2Cripple&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    usdt.innerHTML = response.tether.usd;

});