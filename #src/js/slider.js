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

if (document.querySelector('.slider-about__body')) {
    new Swiper('.slider-about__body', {
        observer: true,
        observeParents: true,
        speed: 800,
        loop: true,
        spaceBetween: 30,
        preloadImages: false,
        pagination: {
            el: '.slider-about-controls__dots',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-about-controls__arrows .slider-arrow__next',
            prevEl: '.slider-about-controls__arrows .slider-arrow__prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: true,
                freeMode: true,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15,
                centeredSlides: false
            },
            767: {
                slidesPerView: 2,
                freeMode: false,
                spaceBetween: 30,
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
}

if (document.querySelector('.slider-product__body')) {
    new Swiper('.slider-product__body', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        loop: true,
                slidesPerView: 4,
                preloadImages: false,
        pagination: {
            el: '.slider-product-controls__dots',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-product-controls__arrows .slider-arrow__next',
            prevEl: '.slider-product-controls__arrows .slider-arrow__prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                freeMode: true,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
                centeredSlides: true,
                freeMode: false,

            },
            1360: {
                slidesPerView: 4,
                centeredSlides: false,

            },
        },
    })
}

if (document.querySelector('.slider-single__body')) {
    const thumbs = new Swiper('.slider-thumb__body', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        spaceBetween: 15,        
        speed: 800,
        slidesPerView: 4,
        preloadImages: false,
        breakpoints: {
            480: {
                spaceBetween: 25,        
            },
            992: {
                direction: "vertical",
            },
        },
    })

    new Swiper('.slider-single__body', {
        observer: true,
        observeParents: true,
        watchOverflow: true,
        speed: 800,
        preloadImages: false,
        thumbs: {
            swiper: thumbs,
        },
        breakpoints: {
            992: {
                direction: "vertical",
            },
        },
    })
}