  document.addEventListener("DOMContentLoaded", function () {

            const teamViewport = document.getElementById("teamViewport");
            const teamTrack = document.getElementById("teamTrack");

            const prevTeam = document.getElementById("prevTeam");
            const nextTeam = document.getElementById("nextTeam");

            const teamSlides = Array.from(
                document.querySelectorAll("#teamTrack .team-slide")
            );


            /* Current slider position */
            let teamIndex = 0;


            /* Get number of visible cards */
            function getPerView() {

                const width = window.innerWidth;

                if (width >= 1024) {
                    return 3;
                }

                if (width >= 768) {
                    return 2;
                }

                return 1;
            }


            /* Get maximum possible index */
            function getMaxIndex() {

                const perView = getPerView();

                return Math.max(
                    0,
                    teamSlides.length - perView
                );
            }


            /* Update slider */
            function updateTeamSlider(animate = true) {

                const perView = getPerView();

                const viewportWidth =
                    teamViewport.getBoundingClientRect().width;

                const slideWidth =
                    viewportWidth / perView;


                /* Keep index inside valid range */
                const maxIndex = getMaxIndex();

                if (teamIndex > maxIndex) {
                    teamIndex = maxIndex;
                }

                if (teamIndex < 0) {
                    teamIndex = 0;
                }


                /* Set exact slide width */
                teamSlides.forEach(function (slide) {

                    slide.style.width =
                        slideWidth + "px";

                    slide.style.flexBasis =
                        slideWidth + "px";

                });


                /* Animation */
                teamTrack.style.transition =
                    animate
                        ? "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)"
                        : "none";


                /* Move slider */
                teamTrack.style.transform =
                    `translateX(-${teamIndex * slideWidth}px)`;


                /* Button state */
                prevTeam.disabled =
                    teamIndex === 0;

                nextTeam.disabled =
                    teamIndex === maxIndex;


                /* Visual opacity */
                prevTeam.style.opacity =
                    teamIndex === 0 ? "0.45" : "1";

                nextTeam.style.opacity =
                    teamIndex === maxIndex ? "0.45" : "1";

            }


            /* 
               NEXT BUTTON
            = */

            nextTeam.addEventListener("click", function () {

                const maxIndex = getMaxIndex();

                if (teamIndex < maxIndex) {

                    teamIndex++;

                    updateTeamSlider(true);

                }

            });


            /* 
               PREVIOUS BUTTON
            = */

            prevTeam.addEventListener("click", function () {

                if (teamIndex > 0) {

                    teamIndex--;

                    updateTeamSlider(true);

                }

            });


            /* 
               SHOW BIO
            = */

            const bioButtons =
                document.querySelectorAll(".show-bio");


            bioButtons.forEach(function (button) {

                button.addEventListener("click", function () {

                    const card =
                        button.closest(".team-card");

                    if (!card) return;


                    /* Close other opened cards */
                    document
                        .querySelectorAll(".team-card.bio-open")
                        .forEach(function (otherCard) {

                            if (otherCard !== card) {

                                otherCard.classList.remove(
                                    "bio-open"
                                );

                            }

                        });


                    /* Toggle current card */
                    card.classList.toggle("bio-open");

                });

            });


            /* 
               RESIZE
            = */

            let resizeTimer;

            window.addEventListener("resize", function () {

                clearTimeout(resizeTimer);

                resizeTimer = setTimeout(function () {

                    updateTeamSlider(false);

                }, 100);

            });


            /* 
               INITIALIZE
            = */

            updateTeamSlider(false);

        });

    