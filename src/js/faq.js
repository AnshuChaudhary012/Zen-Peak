const items = document.querySelectorAll(".item");

items.forEach((item) => {

  const button = item.querySelector(".accordion-btn");
  const description = item.querySelector(".description");
  const heading = item.querySelector(".heading");
  const image = item.querySelector(".icon");

  button.addEventListener("click", () => {

    // Close all other items
    items.forEach((otherItem) => {

      if (otherItem !== item) {

        otherItem.classList.remove("rounded-[14px]");
        otherItem.classList.add("rounded-full");

        otherItem.querySelector(".description")
          .classList.add("hidden");

        otherItem.querySelector(".heading")
          .classList.remove("text-lg");

        otherItem.querySelector(".heading")
          .classList.add("text-base");

        otherItem.querySelector(".icon")
          .classList.remove("h-12", "w-12");

        otherItem.querySelector(".icon")
          .classList.add("h-8", "w-8");
      }
    });
    // Check current item
    const isOpen = !description.classList.contains("hidden");
    if (isOpen) {
      // CLOSE
      description.classList.add("hidden");
      item.classList.remove("rounded-[14px]");
      item.classList.add("rounded-full");
      heading.classList.remove("text-lg");
      heading.classList.add("text-base");
      image.classList.remove("h-12", "w-12");
      image.classList.add("h-8", "w-8");
    } else {
      // OPEN
      description.classList.remove("hidden");

      item.classList.remove("rounded-full");
      item.classList.add("rounded-[14px]");

      heading.classList.remove("text-base");
      heading.classList.add("text-lg");

      image.classList.remove("h-8", "w-8");
      image.classList.add("h-12", "w-12");

    }

  });

});