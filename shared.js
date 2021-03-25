var backdrop = document.querySelector(".backdrop")
var selectPlanButtons = document.querySelectorAll(".plan button")
var hamburgerButton = document.querySelector(".toggle-button")
var mobileNav = document.querySelector(".mobile-nav")
var modal = document.querySelector(".modal")
if (modal) {
  var modalNoButton = modal.querySelector(".modal__action--negative")
}

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    modal.classList.add("open")
    backdrop.style.display = "block"
    setTimeout(() => backdrop.classList.add("open"), 200)
  })
}
if (modalNoButton) {
  modalNoButton.addEventListener("click", () => {
    backdrop.classList.remove("open")
    modal.classList.remove("open")
    setTimeout(() => (backdrop.style.display = "none"), 200)
  })
}

backdrop.addEventListener("click", () => {
  backdrop.classList.remove("open")
  mobileNav.classList.remove("open")
  setTimeout(() => (backdrop.style.display = "none"), 200)
  if (modal) {
    modal.classList.remove("open")
  }
})

hamburgerButton.addEventListener("click", () => {
  backdrop.classList.add("open")
  mobileNav.classList.add("open")
})
