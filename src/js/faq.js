       const faqItems = document.querySelectorAll(".faq-item");

        faqItems.forEach((faq) => {
            const summary = faq.querySelector("summary");
            const content = faq.querySelector(".faq-content");

            summary.addEventListener("click", (e) => {
                e.preventDefault();

                if (faq.open) {

                    content.style.maxHeight = content.scrollHeight + "px";


                    content.offsetHeight;


                    requestAnimationFrame(() => {
                        content.style.maxHeight = "0px";
                    });

                    content.addEventListener(
                        "transitionend",
                        () => {
                            faq.open = false;
                        },
                        { once: true }
                    );

                }

                else {
                    faq.open = true;
                    content.style.maxHeight = "0px";
                    requestAnimationFrame(() => {
                        content.style.maxHeight =
                            content.scrollHeight + "px";
                    });
                }
            });
        });

        faqItems.forEach((faq) => {
            const content = faq.querySelector(".faq-content");

            if (faq.open) {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });