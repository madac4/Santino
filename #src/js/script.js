if (document.querySelector('.header-category__select')) {
    const categorySelect = document.querySelector('.header-category__select');
    const categoryDropdown = document.querySelector('.header-category__dropdown');
    const categoryItems = categoryDropdown.querySelectorAll('.category-dropdown__item');
    const overlay = document.querySelector('.header-category__overlay');

    categorySelect.addEventListener('click', () => {
        categorySelect.classList.toggle('open');
        categoryDropdown.classList.toggle('open');
        overlay.classList.toggle('open');
        document.body.classList.toggle('lock');
        document.addEventListener('click', (el) => {
            if (el.target === overlay) {
                categorySelect.classList.remove('open');
                categoryDropdown.classList.remove('open');
                overlay.classList.remove('open');
                document.body.classList.remove('lock');
            }
        })
    });

    for (let i = 0; i < categoryItems.length; i++) {
        categoryItems[i].addEventListener('click', function() {
            const activeElement = document.getElementsByClassName('active');

            if (activeElement.length > 0) {
                activeElement[0].className = activeElement[0].className.replace(" active", "");
            }

            this.className += " active";
        })
    }
}

if (document.querySelector('.mobile-header')) {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
}