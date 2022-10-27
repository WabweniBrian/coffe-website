// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [
  navMenu,
  navMenuToggleBtn,
  backToTop,
  searchIcon,
  form,
  launchBtn,
  cartModal,
  cartDialog,
  closeIcon,
  links,
  sections,
] = [
  qs(".navbar "),
  qs(".toggle-btn"),
  _("backToTop"),
  qs(".feather-search"),
  qs("form"),
  qs(".launch-btn"),
  qs(".cart-modal"),
  qs(".cart-dialog"),
  qs(".close-icon"),
  qsa(".navbar a"),
  qsa("section"),
];

// Toggle navbar menu
navMenuToggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// Search
searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.toggle("active");
});

// Add Active class to navbar links when page scrolls
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Back to top button
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("active", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// -------------------------------------------------------------------------CART MODAL----------------------------------------------------------------------------------------

// Launch the modal by adding the open class
launchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cartModal.classList.add("open");
  cartDialog.classList.add("open");
});

// FUNCTION: Close the modal by removing the open class
function closeModal(element) {
  element.addEventListener("click", (e) => {
    cartModal.classList.remove("open");
    cartDialog.classList.remove("open");
  });
}

closeModal(closeIcon);

// Close the modal when user clicks outside the modal dialog
window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.classList.remove("open");
    cartDialog.classList.remove("open");
  }
});
