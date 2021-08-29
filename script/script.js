const search_btn = document.getElementById('search-btn');
const search__menu = document.getElementById('search__menu');

search_btn.addEventListener('click', () => {
     search__menu.style.visibility = 'visible';
})

const close_search_form = document.getElementById('close-search-form');
close_search_form.addEventListener('click', () => {
     search__menu.style.visibility = 'hidden';
})