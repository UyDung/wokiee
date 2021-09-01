const search_btn = document.getElementById('search-btn');
const search_menu = document.querySelector('.dropdown-menu')
const  closeSearchForm = document.getElementById('close-search-form');
const btnCart = document.getElementById('btn-cart');
const cart = document.getElementById('cart')

// search_btn.addEventListener('click', () => {
//      search_menu.style.visibility = 'visible';
     
// })

const close_search_form = document.getElementById('close-search-form');
close_search_form.addEventListener('click', () => {
     search_menu.style.visibility = 'hidden';
     
})

const  displayElement = (item) => {
     let dropDown = item.parentElement.lastElementChild;
     console.log(dropDown);
     // dropDown.style.visibility = 'hidden';
}

const btnOptions = document.querySelectorAll('.btn-option');
btnOptions.forEach((item) => {
   
   item.addEventListener('click', () => displayElement(item));
      
})


/**** showcase slide image */
const slides = document.querySelectorAll('.slide');
const slideText = document.querySelectorAll('.slide__text');
var current = 0;

setInterval(() => {
     reset();
     slides[current].classList.add('active');
     current++;
     if(current === slides.length) {
          current =  0;
     }

}, 3000);


const reset = () => {
     slides.forEach((item) => {
          item.classList.remove('active');
     })

    


}


