var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".plan button");
var hamburgerButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var modal = document.querySelector(".modal");
if (modal) {
  var modalNoButton = modal.querySelector(".modal__action--negative");
}

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}
if (modalNoButton) {
  modalNoButton.addEventListener("click", () => {
    //   backdrop.style.display = "none";
    //   modal.style.display = "none";
    backdrop.classList.remove("open");
    modal.classList.remove("open");
  });
}

backdrop.addEventListener("click", () => {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  //   mobileNav.style.display = "none";
  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
});

hamburgerButton.addEventListener("click", () => {
  //   backdrop.style.display = "block";
  //   mobileNav.style.display = "block";
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});
