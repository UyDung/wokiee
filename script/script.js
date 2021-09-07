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
        item.addEventListener('click', hiddenAllDropDown());

        item.addEventListener("click", (item) => {                
            const direct = item.path[2].querySelector(".dropdown-menu");
            direct.classList.toggle("clicked");

            direct.parentNode.addEventListener("click", (e) => {
                e.stopPropagation();
            });
        });
    }

    function hiddenAllDropDown(){
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
    const navItems = document.querySelectorAll(".nav-item");

    var current = 0;

    // automatic slide
    setInterval(() => {
        reset();
        slideAuto();
        current++;
        if (current === slides.length) {
            current = 0;
        }
        console.log("current is " + current);
    }, 10000);

    const reset = () => {
        slides.forEach((item) => {
            item.classList.remove("active");
        });

        for (let item of navItems) {
            item.classList.remove("active");
        }
    };

    const slideAuto = () => {
        slides[current].classList.add("active");
        navItems[current].classList.add("active");
    };

    // manual slider click
    for (let item of navItems) {
        item.addEventListener("click", () => {
            setTimeout(() => {
               //  clearInterval();
                //  current--;
            }, 3000);

            const currentID = item.id.charAt(item.id.length - 1);
            for (let i = 0; i < slides.length; i++) {
                if (i === currentID - 1) {
                    slides[i].classList.add("active");
                    navItems[i].classList.add("active");
                } else {
                    slides[i].classList.remove("active");
                    navItems[i].classList.remove("active");
                }
            }
        });
    }

    // arrow slide click
    const arrowLeft = document.querySelector(".arrow-slide-left");
    const arrowRight = document.querySelector(".arrow-slide-right");

    arrowLeft.addEventListener("click", () => {
        setTimeout(() => {
            clearInterval();
        }, 3000);

        console.log(current);
    });

    arrowRight.addEventListener("click", () => {});
}
