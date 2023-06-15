(function () {
  const scrollspys = document.querySelectorAll(".scrollspy");
  const links = document.querySelector(".navBar");
  const linksHeight = links.offsetHeight;
  const allLinks = links.querySelectorAll(".withoutChild");

  function scrollspy() {
    scrollspys.forEach((current) => {
      var _ = current;
      let currentElementOffset = _.offsetTop;
      let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentElementOffset <= scrollPosition + linksHeight) {
        allLinks.forEach((currentLink) => {
          currentLink.classList.remove("active");
        });
        const currentID = current.getAttribute("id");
        document.querySelector(`a[href="#${currentID}"]`).classList.add("active");
      }
    });
  }

  function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }

  allLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = link.getAttribute("href");
      smoothScroll(target);
    });
  });

  window.addEventListener("scroll", scrollspy);
})();
