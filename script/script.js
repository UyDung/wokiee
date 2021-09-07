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
        item.addEventListener("click", hiddenAllDropDown());

        item.addEventListener("click", (item) => {
            const direct = item.path[2].querySelector(".dropdown-menu");
            direct.classList.toggle("clicked");

            direct.parentNode.addEventListener("click", (e) => {
                e.stopPropagation();
            });
        });
    }

    function hiddenAllDropDown() {
        for (let item of listItems) {
            item.classList.remove("clicked");
        }
    }

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
    const navItems = document.querySelectorAll(".nav-item");
    const arrowLeft = document.querySelector(".arrow-slide-left");
    const arrowRight = document.querySelector(".arrow-slide-right");

    var current = 0;

    // automatic slide
    setInterval(() => {
        current++;
        slideShow();
    }, 10000);

    const reset = () => {
        slides.forEach((item) => {
            item.classList.remove("active");
        });

        for (let item of navItems) {
            item.classList.remove("active");
        }
    };

    const slideShow = () => {
         reset();
        if (current >= slides.length) {
            current = 0;
        } else if (current < 0) {
            current = slides.length - 1;
        }

        slides[current].classList.add("active");
        navItems[current].classList.add("active");
    };

    // manual slider click
    if (slides.length === navItems.length) {
        for (let i = 0; i < slides.length; i++) {
            navItems[i].addEventListener("click", () => {
                reset();
                current = i;
                slides[i].classList.add("active");
                navItems[i].classList.add("active");
            });
        }
    } else {
        console.log("NavItems length must equal Slides length");
    }

    arrowLeft.addEventListener("click", () => {
        current--;
        slideShow();
    });
    arrowRight.addEventListener("click", () => {
        current++;
        slideShow();
    });
}
