window.onload = () => {
  bootstrap();
};

function bootstrap() {
  const navigationItems = document.querySelectorAll(".navigation__item");

  navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", function (event) {
      event.preventDefault();

      const id = this.getAttribute("href");

      document.querySelector(id).scrollIntoView();
    });
  });
}
