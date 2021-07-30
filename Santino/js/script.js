let sliders = document.querySelectorAll('.swiper');
if(sliders){
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if(!slider.classList.contains('swiper-bild')){
            let slider_items = slider.children;
            if(slider_items){
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');                 
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if(slider.classList.contains('swiper_scroll')){
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if(slider.classList.contains('gallery')){
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback()
}

function sliders_bild_callback(params) {}

let sliderScollItems = document.querySelectorAll('.swiper-scroll');
if(sliderScollItems.length > 0){
    for (let index = 0; index < sliderScollItems.length; index++) {
        const sliderScrollItem = sliderScollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar:{
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false,
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) {}

if(document.querySelector('.slider-main__body')){
    new Swiper('.slider-main__body', {
        effect: 'fade',
        observer: true,
        observeParents: true,
        watchOverflow: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        loop: true,
        preloadImages: false,
        pagination: {
            el: '.slider-main-controls__dots',
            clickable: true,
        },
        navigation:{
            nextEl: '.slider-main-controls__arrows .slider-arrow__next',
            // prevEl: '.slider-main-controls__arrows .slider-arrow__prev',
        },
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 0,
        //         autoHeight: true,
        //     },
        //     768: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //     },
        //     992: {
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //     },
        //     1268: {
        //         slidesPerView: 4,
        //         spaceBetween: 30,
        //     },
        // },
    })
}

if (document.querySelector('.header-category__select')) {
    const categorySelect = document.querySelector('.header-category__select');
    const categoryDropdown = document.querySelector('.header-category__dropdown');
    const categoryItems = categoryDropdown.querySelectorAll('.category-dropdown__item');
    const overlay = document.querySelector('.overlay');

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
    const mobileNav = document.querySelector('.mobile-navbar');
    const categoryAccordionItem = document.querySelectorAll('.navbar-category__item');

    categoryAccordionItem.forEach(item => {
        item.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const content = self.querySelector('.navbar-category__sublist');
            self.classList.toggle('open');
            if (self.classList.contains('open')) {
                content.style.height = content.scrollHeight + 'px';

            } else {
                content.style.height = null;
            }
        })
    })

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        if (!mobileNav.classList.contains('active')) {
            categoryAccordionItem.forEach(item => {
                const content = item.querySelector('.navbar-category__sublist');
                item.classList.remove('open');
                content.style.height = null;
            });
        }
    });
}