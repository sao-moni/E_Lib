
const searchBtn = document.getElementById('sovannochbtn')
const searchUser = document.querySelector('#sovannochSearch')
const indexSearchInput = document.querySelector('.search input')
searchInput.addEventListener('input', function(e){
    const inputValue =document.getElementById('sovannochSearch').value;
    window.location.href='../../index.html'
    return inputValue
})
