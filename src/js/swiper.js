 var swiper = new Swiper('.mySwiper', {
    // slidesPerView: 3,
    spaceBetween: 28,
    // centeredSlides: true,

    loop: true,

    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 28,
        },
    },
});

         const showBios = document.querySelectorAll(".showBio");

        showBios.forEach((showBio) => {
            showBio.addEventListener("click", () => {

                const bioCard = showBio
                    .closest(".swiper-slide")
                    .querySelector(".bioCard");

                bioCard.classList.toggle("top-[-120%]");
                bioCard.classList.toggle("top-0");

            });
        });
