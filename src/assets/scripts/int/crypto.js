
//widgets
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cripple%2Ccardano%2Cdogecoin%2Ctether%2Csolana%2Cethereum-classic&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
    .then(res => res.json())
    .then(json => {

        const secWidgets = document.querySelector('.row-cols-sm-auto');
        const secTable = document.querySelector('.crypto__table-body');
        const coins = ['bitcoin','ethereum','litecoin','ethereum-classic','solana', 'tether','cardano','ripple','dogecoin',];
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
                  <p class='txt ts-18 tc-gray tw-400'>/USD</p>
                </div>
                <div class="crypto__widget-price">
                  <p class="change txt ts-14 tw-700">${change}%</p>
                  <p class="price txt ts-20 tw-700">$${price}</p>
                </div>
              </div>`;
            secTable.innerHTML += 
            `
              <tr class='crypto ${change < 0 ? 'falling' : 'rising'}'>
                <td>
                  -
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
