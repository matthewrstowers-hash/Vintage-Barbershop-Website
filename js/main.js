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
const featureGrid = document.getElementById("featureGrid");
const nav = document.getElementById("nav");
const siteHeader = document.querySelector(".site-header");
// ----- Dervices Data (Array of Objects) -----
const services = [
  {
    title: "Classic Haircut",
    text: "Timeless cuts with modern precision tailored to your style.",
    image: "assets/images/feature-1.jpg",
  },
  {
    title: "Beard Trim",
    text: "Shape and line-up your beard for a clean, sharp finish.",
    image: "assets/images/feature-2.jpg",
  },
  {
    title: "Straight Razor Shave",
    text: "Hot towel treatment with a smooth traditional shave",
    image: "assets/images/feature-3.jpg",
  },
];
// ----- Navigation Data (Array of Objects)
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#features" },
  { label: "Book", href: "#cta" },
  { label: "Contact", href: "#footer" },
];
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
// Makes navbar stick on scroll (Sticky Navbar)
const handleHeaderOnScroll = () => {
  if (!siteHeader) return;
  if (window.scrollY > 10) {
    siteHeader.classList.add("is-scrolled");
  } else {
    siteHeader.classList.remove("is-scrolled");
  };
}
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
// 6) Rounds corners of nabar on scroll
window.addEventListener("scroll", handleHeaderOnScroll);
if (callBtn) {
  callBtn.addEventListener("click", () => {
    window.location.href = `tel:${shopInfo.phoneRaw}`;
  });
}
// ----- Render Features using forEach() -----
const renderFeatures = () => {
  if (!featureGrid) return; // gurad clause. if featureGrid isn't present, then just stop
  services.forEach((service) => {
    const card = document.createElement("article");
    card.classList.add("feature-card");
    card.innerHTML = `
    <img src="${service.image}" alt="${service.title}" class="feature-img"/>
    <h3 class="feature-title">${service.title}</h3>
    <p class="feature-text">${service.text}</p>
    `;
    featureGrid.appendChild(card);
  });
};
// ----- Render Features Using map() -----
const renderFeaturesMap = () => {
  const cardsHTML = services
    .map((service) => {
      return `
    <article class="feature-card">
      <img src="${service.image}" alt="${service.title}" class="feature-img"/>
      <h3 class="feature-title">${service.title}</h3>
      <p class="feature-text">${service.text}</p>
      </article>
      `;
    })
    .join("");

  featureGrid.innerHTML = cardsHTML;
};
// ----- Rednder Navigation using map() -----
const renderNavigation = () => {
  // Desktop Nav
  if (nav) {
    const navHTML = navLinks
      .map((link) => {
        return `
      <a href="${link.href}" class="nav-link">${link.label}</a>
      `;
      })
      .join("");

    nav.innerHTML = navHTML;
  }
  // Mobile Nav
  if (mobileMenu) {
    const mobileHTML = navLinks
      .map((link) => {
        return `
      <a href="${link.href}" class="mobile-link">${link.label}</a>
      `;
      })
      .join("");

    mobileMenu.innerHTML = mobileHTML;
  }
};

// create array
// array.map()
// return HTML
// .join("")
// Insert into DOM

// Why .join()?
// Because .map returns an array.
// ["<a>Home</a>", "<a>About</a>"]
// .join extracts the values into ONE HTML string
// ----- Function calls -----
// renderFeatures();
renderFeaturesMap();
renderNavigation();
handleHeaderOnScroll();
