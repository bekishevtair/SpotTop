document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector('#crypto__calc').oninput = ()=>{
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
// var btc = document.getElementById("bitcoin"),
//     ltc = document.getElementById("litecoin"),
//     eth = document.getElementById("ethereum"),
//     doge = document.getElementById("dogecoin"),
//     usdt = document.getElementById("tether")

// var liveprice = {
//     "async": true,
//     "scroosDomain": true,
//     "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Clitecoin%2Cethereum%2Cdogecoin%2Ccardano%2Csolana%2Cripple&vs_currencies=usd",
//     "method": "GET",
//     "headers": {}
// }

// $.ajax(liveprice).done(function (response){
//     btc.innerHTML = response.bitcoin.usd;
//     ltc.innerHTML = response.litecoin.usd;
//     eth.innerHTML = response.ethereum.usd;
//     doge.innerHTML = response.dogecoin.usd;
//     usdt.innerHTML = response.tether.usd;

// });




//widgets
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cripple%2Ccardano%2Cdogecoin%2Ctether%2Csolana%2Cethereum-classic&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
    .then(res => res.json())
    .then(json => {

        const secWidgets = document.querySelector('.row-cols-sm-auto');
        const secTable = document.querySelector('.crypto__table-body');
        const coins = ['bitcoin','ethereum','tether','ripple','cardano','solana','dogecoin','ethereum-classic','litecoin'];
        // const coins = Object.getOwnPropertyNames(json);
        
        for (let coin of coins) {
          const coinInfo = json[`${coin}`];
          const price = coinInfo.usd.toFixed(3);
          const marketCap = coinInfo.usd_market_cap.toLocaleString(3);
          const change = coinInfo.usd_24h_change.toFixed(3);
            secWidgets.innerHTML += 
              `<div class="${coin} crypto crypto__widget  ${change < 0 ? 'falling' : 'rising'}">
                <div class="crypto__widget-logo">
                  <img id='img-on-other-pages' src="../../public/img/icons/ico-${coin}.svg">
                  <img id='img-on-other-homepage' src="../public/img/icons/ico-${coin}.svg">
                </div>
                <div class="crypto__widget-name">
                  <h3 class='txt ts-24 tc-dblue tw-700'>${coin}</h3>
                  <p class='txt ts-16 tc-gray tw-400'>/USD</p>
                </div>
                <div class="crypto__widget-price">
                  <p class="change txt ts-14 tw-400">${change}%</p>
                  <p class="price txt ts-24 tw-700">$${price}</p>
                </div>
              </div>`;
            secTable.innerHTML += 
            `
              <tr class='crypto ${change < 0 ? 'falling' : 'rising'}'>
                <td>
                  1
                </td>
                <td>
                  <img id='img-on-other-pages' src="../../public/img/icons/ico-${coin}.svg" alt="">
                  <img id='img-on-other-homepage' src="../public/img/icons/ico-${coin}.svg" alt="">
                  <span>
                    ${coin}
                  </span>
                </td>
                <td>
                  <p class="price">
                    $${price}
                  </p>
                </td>
                <td>
                  <p class="change">
                    ${change}%
                  </p>
                </td>
                <td>
                  <p>
                    $${marketCap}
                  </p>
                </td>
              </tr>
            `
        }
    });
