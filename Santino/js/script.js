const video = document.querySelectorAll('.video');
for (let i = 0; i < video.length; i++) {
    video[i].addEventListener('mouseenter', function(e) { video[i].play() })
    video[i].addEventListener('mouseout', function(e) { video[i].pause() })

    video[i].addEventListener('click', function(e) {
        video[i].paused ? video[i].play() : video[i].pause()
    });
};
let sliders = document.querySelectorAll('.swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
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

            if (slider.classList.contains('swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('gallery')) {
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback()
}

function sliders_bild_callback(params) {}

let sliderScollItems = document.querySelectorAll('.swiper-scroll');
if (sliderScollItems.length > 0) {
    for (let index = 0; index < sliderScollItems.length; index++) {
        const sliderScrollItem = sliderScollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
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

if (document.querySelector('.slider-main__body')) {
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
        navigation: {
            nextEl: '.slider-main-controls__arrows .slider-arrow__next',
            // prevEl: '.slider-main-controls__arrows .slider-arrow__prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

    })
}

if (document.querySelector('.slider-category__body')) {
    new Swiper('.slider-category__body', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        loop: true,
        preloadImages: false,
        navigation: {
            nextEl: '.slider-category-controls__arrows .slider-arrow__next',
            prevEl: '.slider-category-controls__arrows .slider-arrow__prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                centeredSlides: true,
                spaceBetween: 0,
                freeMode: true,
            },
            640: {
                slidesPerView: 4,
                centeredSlides: false,
            },
            767: {
                slidesPerView: 5,
                freeMode: false,

            },
            992: {
                slidesPerView: 6,
            },
        },
    })
}

if (document.querySelector('.slider-post__body')) {
    new Swiper('.slider-post__body', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        spaceBetween: 45,
        loop: true,
        preloadImages: false,
        pagination: {
            el: '.slider-post-controls__dots',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-post-controls__arrows .slider-arrow__next',
            prevEl: '.slider-post-controls__arrows .slider-arrow__prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                centeredSlides: true,
            },
            992: {
                slidesPerView: 2,
            },
        },
    })
};
const rangeSlider = document.getElementById('range-slider');

if(rangeSlider){
    noUiSlider.create(rangeSlider, {
        start: [1, 3000],
        connect: true,
        step: 1,
        range: {
            'min': [1],
            'max': [3000]
        }
    });

    const inputMin = document.getElementById('input-min'),
          inputMax = document.getElementById('input-max'),
          inputs = [inputMin, inputMax];

    rangeSlider.noUiSlider.on('update', function(values, handle){
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) =>{
        let arr = [null, null];
        arr[i] = value;
        rangeSlider.noUiSlider.set(arr)
    }

    inputs.forEach((input, index) =>{
        input.addEventListener('change', (e) =>{
            setRangeSlider(index, e.currentTarget.value);
        })
    })
}

const rangeSliderMobile = document.getElementById('range-slider-mobile');

if(rangeSliderMobile){
    noUiSlider.create(rangeSliderMobile, {
        start: [1, 3000],
        connect: true,
        step: 1,
        range: {
            'min': [1],
            'max': [3000]
        }
    });

    const inputMin = document.getElementById('input-min-mobile'),
          inputMax = document.getElementById('input-max-mobile'),
          inputs = [inputMin, inputMax];

          rangeSliderMobile.noUiSlider.on('update', function(values, handle){
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) =>{
        let arr = [null, null];
        arr[i] = value;
        rangeSliderMobile.noUiSlider.set(arr)
    }

    inputs.forEach((input, index) =>{
        input.addEventListener('change', (e) =>{
            setRangeSlider(index, e.currentTarget.value);
        })
    })
};

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


const filterMenu = document.querySelector('.filter-menu');

if(filterMenu){
    const sidebarToggler = document.querySelector('.sidebar-toggler');
    const sidebarClose = filterMenu.querySelector('#close-filter');
    sidebarToggler.addEventListener('click', () =>{
        filterMenu.classList.add('active');
        document.body.classList.add('lock')
    })
    sidebarClose.addEventListener('click', () =>{
        filterMenu.classList.remove('active')
        document.body.classList.remove('lock');
    })
}