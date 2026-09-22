        const faqItems = document.querySelectorAll(".faq-item");

        // Set initial state
        faqItems.forEach((item, index) => {
            const content = item.querySelector(".faq-content");

            content.style.overflow = "hidden";
            content.style.transition = "max-height 300ms ease";

            if (index === 0) {
                // First FAQ open by default
                item.classList.add("active", "rounded-2xl");
                item.classList.remove("rounded-full");

                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                // All other FAQs closed
                item.classList.remove("active", "rounded-[16px]");
                item.classList.add("rounded-full");

                content.style.maxHeight = "0px";
            }
        });

        // FAQ click
        faqItems.forEach((item) => {

            const button = item.querySelector(".faq-question");
            const content = item.querySelector(".faq-content");

            button.addEventListener("click", () => {

                const isActive = item.classList.contains("active");

                // Close all FAQs
                faqItems.forEach((faq) => {

                    const faqContent = faq.querySelector(".faq-content");

                    faq.classList.remove("active", "rounded-[16px]");
                    faq.classList.add("rounded-full");

                    faqContent.style.maxHeight = "0px";
                });

                // Open clicked FAQ if it was closed
                if (!isActive) {

                    item.classList.add("active", "rounded-[16px]");
                    item.classList.remove("rounded-full");

                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
