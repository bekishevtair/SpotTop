



  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cripple%2Ccardano%2Cdogecoin%2Ctether%2Csolana%2Cethereum-classic&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
  .then(res => res.json())
  .then(json => {
  
    const coins = ['bitcoin','ethereum','tether','ripple','cardano','solana','dogecoin','ethereum-classic','litecoin'];
  
    function convertCrypto() {
      for (let coin of coins) {
        const coinInfo = json[`${coin}`];
        const price = coinInfo.usd.toFixed(3);
        const change = coinInfo.usd_24h_change.toFixed(3);
        const options = document.querySelector('.crypto__calc-select-list');
        options.innerHTML += 
        `
        <div class="crypto__calc-select-list-item">
          <label for="${coin}">
            <img src="../../public/img/icons/ico-${coin}.svg" alt="">
            ${coin}
          </label>
          <input type="text" id="${coin}" class="crypto-value selected" value="${price}">
        </div>
        `
        document.querySelector('#crypto__calc').oninput = ()=>{
          const amount = document.querySelector("#input-amount").value;
          const selected = document.querySelector(".selected").value;
          const result = amount*selected
          console.log(amount)
          console.log(selected)

          document.querySelector('.converted-result').innerHTML = `${result.toFixed(2)}`;
        };
      }

      const selectArea = document.querySelector('.crypto__calc-select-field');
      const selectList = document.querySelector('.crypto__calc-select-list');
      const selectItem = document.querySelectorAll('.crypto__calc-select-list-item');
      selectItem.forEach(option => {
        option.addEventListener('click', () => {
          let selectOption = option.querySelector('.crypto__calc-select-list-item label').innerText;
          document.getElementById('input').placeholder = selectOption;
          selectList.classList.remove('active');
        })
      })
      selectArea.addEventListener('click', ()=> {
        selectList.classList.toggle('active')
      })
    }
    convertCrypto()
   
  });
    
  $(document).on('click', '.crypto__calc-select-list-item input', function(){
    $(this).addClass('selected').siblings().removeClass('selected')
  })

