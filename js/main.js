// ===================
// File: js/main.js
// Vintage Barbershop Project
// ===================
// ------ DOM Elements ------
const yearE1 = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
// ----- Helpers / Functions -----
// Update footer year automatically
const setCurrentYear = () => {
  //this function willl update the year in the footer
  const now = new Date(); // new Date() is a pre-built constructor that pulls real-time data info. We are adding that feature to the new variable.
  yearE1.textContent = now.getFullYear();
};
// Toggle mobile menu open/close
let isMenuOpen = false;
const toggleMobileMenu = () => {
  if (!mobileMenu) return;
  if (isMenuOpen === false) {
    mobileMenu.classList.add("is-open");
    isMenuOpen = true;
  } else {
    mobileMenu.Menu.classList.remove("is-open");
    isMenuOpen = false;
  }
};
// Close mobile menu (used when a link is clikced)
const closeMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("is-open");
  isMenuOpen = false;
};
// Reusable function with parameters (practice pattern)
const updateHeadingText = (newText) => {
  if (!heading) return;
  heading.textContent = newText;
};
// ----- Event Listeners -----
// 1) Set year on page load
setCurrentYear();
// 2) Hamburger menu toggle
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    toggleMobileMenu();
  });
}
// 3) Close mobile menu when a mobile link is clicked (event delegation)
if (mobileMenu) {
  // only wire this up if the mobile menu exists on the page
  mobileMenu.addEventListener("click", (event) => {
    // if they clicked an <a> inside the menu, close it
    if (event.target.tagName === "A") {
      // chech if the exact element clicked was a link
      closeMobileMenu(); // close the menu since the user is navigating away
    }
  });
}
// 4) CTA Button: "Book Now" (placeholder behavior)
if (ctaBtn) {
  // only wire this up if the CTA button exists on the page
  ctaBtn.addEventListener("click", () => {
    updateHeadingText("Booking coming next - great choice!");
  });
}
// 5) Call Button: try to use the phone number in the footer
if (callBtn) {
  // only wire this up if the call button exists on the page
  callBtn.addEventListener("click", () => {
    // whenever the call button is clicked
    // If you later set phonLink href to tel:, this will work perfectly.
    if (phoneLink) {
      updateHeadingText("Call us at " + phoneLink.textContent);
    } else {
      updateHeadingText("Call feature coming lext!");
    }
  });
}
