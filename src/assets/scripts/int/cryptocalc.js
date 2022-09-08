const selectArea = document.querySelector('.select__field');
const selectList = document.querySelector('.select__list');
const selectItems = document.querySelector('.select__list-item');

selectItems.forEach(option => {
  option.addEventListener('click', () => {
    let selectOption = option.querySelector('.select__list-item p').innerText;
    document.getElementById('input').placeholder = selectOption;
    console.log(selectOption)
    selectList.classList.remove('active')
  })
})

selectArea.addEventListener('click', ()=> {
  console.log('ok')

  selectList.classList.toggle('active')

})