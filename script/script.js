/***********************
 * Header scroll fixed
 */
{
    document.addEventListener("scroll", () => {
        const headerMenu = document.querySelector(".desktop-header");
        if (window.scrollY > 0) {
            headerMenu.classList.add("scroll");
        } else {
            headerMenu.classList.remove("scroll");
        }
        position = window.scrollY; /** position before search form close */
    });
}
var position = window.scrollY; /** position before search form close */
/*********************
 *  options dropdown menu
 */
{
    const btnOptions = document.querySelectorAll(".btn-option");
    const closeSearchForm = document.getElementById("close-search-form");
    const searchForm = document.getElementById("search-form");
    const listItems = document.querySelectorAll(".dropdown-menu");

    closeSearchForm.addEventListener("click", () => {
        searchForm.classList.remove("clicked");
        /* scroll to position that before search form close  */
        setTimeout(() => {
            window.scrollBy(0, position);
        }, 2);
    });

    for (let item of btnOptions) {
        item.addEventListener("click", (item) => {
          //   hiddenAllDropDown();
            const direct = item.path[2].querySelector(".dropdown-menu");
            direct.classList.toggle("clicked");
            direct.parentNode.addEventListener("click", (e) => {
                e.stopPropagation();
            });
         
        });
    }

    const hiddenAllDropDown = () => {
        for (let item of listItems) {
            item.classList.remove("clicked");
        }
    };

    //close Options menu
    document.addEventListener("click", (e) => {
        for (let item of listItems) {
            item.classList.remove("clicked");
        }
    });
}
/**** showcase slide image */
{
    const slides = document.querySelectorAll(".slide");
    const slideText = document.querySelectorAll(".slide__text");
    var current = 0;

    setInterval(() => {
        reset();
        slides[current].classList.add("active");
        current++;
        if (current === slides.length) {
            current = 0;
        }
    }, 10000);

    const reset = () => {
        slides.forEach((item) => {
            item.classList.remove("active");
        });
    };
}
