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
// ----- Modal Elements -----
const serviceModal = document.getElementById("serviceModal");
const serviceModalOverlay = document.getElementById("serviceModalOverlay");
const serviceModalClose = document.getElementById("serviceModalClose");
const serviceModalTitle = document.getElementById("serviceModalTitle");
const serviceModalPrice = document.getElementById("serviceModalPrice");
const serviceModalList = document.getElementById("serviceModalList");
// ----- Services Data (Array of Objects) -----
const services = [
  {
    id: 1,
    title: "Classic Haircut",
    image: "assets/images/feature-1.jpg",
    alt: "Classic haircut",
    description: "Timeless cuts wit modern precision-tailored to your style",
    price: 25,
    popular: true,
    details: [
      "Consultation with your barber before the cut begins.",
      "Hair sectioning and shape-up based on your preferred style.",
      "Professional clippers, trimmers, and shears used for precision.",
      "Neckline cleanup and finishing touches included.",
      "Light styling product applied for a clean final look",
    ],
  },
  {
    id: 2,
    title: "Beard Trim",
    image: "assets/images/feature-2.jpg",
    alt: "Beard Trim",
    description: "Shape, line-up, and refine your beard for a clean finish",
    price: 15,
    popular: false,
    details: [
      "Beard assessment and shaping based on face structure.",
      "Line-up around cheeks, jawline, and neckline.",
      "Trimmers and detail tools used for crisp edges.",
      "Conditioning beard product may be applied for softness.",
      "Final symmetry check for a polished finish.",
    ],
  },
  {
    id: 3,
    title: "Straight Razor Shave",
    image: "assets/images/feature-3.jpg",
    alt: "Straight razor shave",
    description: "Hot towel, smooth shave, and classic barbershop experience.",
    price: 30,
    popular: true,
    details: [
      "Hot towel prep to soften facial har and open pored.",
      "Premium shaving cream of lather applied to protect the skin.",
      "Straight razor shave performed with careful detailing.",
      "Second hot towel may be used for comfort and cleanup",
      "Aftershave or soothing skin product applied after service.",
    ],
  },
  {
    id: 4,
    title: "Fade & Style",
    image: "assets/images/feature-4.jpg",
    alt: "Fade haircut",
    description: "A clean fade with finishing detail for a sharp, modern look",
    price: 35,
    popular: false,
    details: [
      "Style consultation before clipper work begins",
      "Fade blended to your preferred level and finish.",
      "Detailing around temples, neckline, and beard area if needed.",
      "Scissors and clipper-over-comb may be used for texture.",
      "Styling product added to complete the final look.",
    ],
  },
  {
    id: 5,
    title: "Kids Cut",
    image: "assets/images/feature-5.jpg",
    alt: "Kids haircut",
    description: "Clean, comfortable haircut service for younger clients",
    price: 20,
    popular: false,
    details: [
      "Simple consultation with child and parent if needed.",
      "Age-appropriate haircut with comfort in mind.",
      "Careful clipper and scissor work for a clean finish.",
      "Light cleanup around the neckline and ears.",
      "Styled neatly before leaving the chair.",
    ],
  },
  {
    id: 6,
    title: "Head Shave",
    image: "assets/images/feature-6.jpg",
    alt: "Head shave",
    description: "Smooth head shave with classic barbershop treatment.",
    price: 28,
    popular: true,
    details: [
      "Scalp prep with warm towel treatment.",
      "Protective shave product applied before razor work.",
      "Close shave performed for a smooth finish.",
      "Scalp cleaned and checked for even consistency.",
      "Moisturizing scalp product applied after the shave.",
    ],
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
  }
};
// ----- Modal Logic -----
// Opens the modal
const openServiceModal = (serviceId) => {
  if (
    !serviceModal ||
    !serviceModalTitle ||
    !serviceModalPrice ||
    !serviceModalList
  )
    return;
  const selectedService = services.find(
    (service) => service.id === Number(serviceId),
  );
  if (!selectedService) return;
  serviceModalTitle.textContent = selectedService.title;
  serviceModalPrice.textContent = `$${selectedService.price}`;
  serviceModalList.innerHTML = selectedService.details
    .map((detail) => `<li>${detail}</li>`)
    .join("");
  serviceModal.classList.add("is-open");
  serviceModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};
// Closes the modal
const closeServiceModal = () => {
  if (!serviceModal) return;
  serviceModal.classList.remove("is-open");
  serviceModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
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
// 6) Rounds corners of nabar on scroll
window.addEventListener("scroll", handleHeaderOnScroll);
if (callBtn) {
  callBtn.addEventListener("click", () => {
    window.location.href = `tel:${shopInfo.phoneRaw}`;
  });
}
// 7) Opens the modals for the card clicked
if (featureGrid) {
  featureGrid.addEventListener("click", (event) => {
    const clickedButton = event.target.closest(".service-details-btn");
    if (!clickedButton) return;
    const serviceId = clickedButton.dataset.serviceId;
    openServiceModal(serviceId);
  });
}
// 8) Closes the modal
if (serviceModalClose) {
  serviceModalClose.addEventListener("click", closeServiceModal);
}
if (serviceModalOverlay) {
  serviceModalOverlay.addEventListener("click", closeServiceModal);
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeServiceModal();
  }
});
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
const renderServices = () => {
  if (!featureGrid) return;
  const servicesHTML = services
    .map((service) => {
      let badgeHTML = "";

      if (service.popular) {
        badgeHTML = `<p class="service-badge">Popular Choice</p>`;
      } else {
        badgeHTML = `<p class="service-badge">Barber Favorite</p>`;
      }

      return `
      <article class="feature-card">
      <img
      src="${service.image}"
      alt="${service.alt}"
      class="feature-img"
      />
      <h3 class="feature-title">${service.title}</h3>
      <p class="feature-text">${service.description}</p>
      ${badgeHTML}
      <p class="service-price">$${service.price}</p>
      <div class="service-actions">
      <button
      class="service-details-btn"
      type="button"
      data-service-id="${service.id}"
      >
      View Details
      </button>
      </div>
      </article>
      `;
    })
    .join("");

  featureGrid.innerHTML = servicesHTML;
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
//nrenderFeatures();
// renderFeaturesMap();
renderNavigation();
handleHeaderOnScroll();
renderServices();

// =====================================================================
// HOW THIS FILE WORKS
// =====================================================================
// This file makes the page interactive. The HTML gives us the structure
// and the CSS gives us the style, but JavaScript lets us CHANGE the page
// while someone is using it. The big idea is the DOM (Document Object
// Model): the browser turns our HTML into a tree of objects that
// JavaScript can find, read, and change.
//
// The file runs from top to bottom, so the ORDER matters:
//   1) Grab elements  2) Store data  3) Define functions
//   4) Attach event listeners  5) Call functions to build the page
//
// ---------------------------------------------------------------------
// 1) SELECTING DOM ELEMENTS (top of the file)
// ---------------------------------------------------------------------
// document.getElementById("year") searches the page for the element with
// that id and returns it, so we can store it in a const variable and use
// it later. document.querySelector(".site-header") does the same job but
// uses a CSS selector (the dot means "class"), so it finds the FIRST
// element with that class.
// If an id doesn't exist in the HTML, these return null. That is why
// many functions below start with a "guard clause" such as
// `if (!siteHeader) return;` - it stops the function early so we don't
// try to use an element that isn't there and crash the script.
//
// ---------------------------------------------------------------------
// 2) DATA: ARRAYS OF OBJECTS (services and navLinks)
// ---------------------------------------------------------------------
// An array is an ordered list [ ]. An object is a group of key: value
// pairs { }. Here we combine them: each item in `services` is an object
// describing one service (id, title, image, price, popular, and a nested
// `details` array of strings). `navLinks` does the same for the menu.
// Keeping our content in data, instead of typing HTML by hand for every
// card, means we can add or edit a service in ONE place and the page
// updates itself. This separation of data from display is a very common
// pattern in real-world web development.
//
// ---------------------------------------------------------------------
// 3) FOOTER YEAR - setCurrentYear()
// ---------------------------------------------------------------------
// new Date() creates a Date object holding the current date and time.
// .getFullYear() returns just the year (e.g. 2026). We assign it to the
// element's .textContent property, which is the text shown inside the
// element. The footer year is now always correct with no manual edits.
//
// ---------------------------------------------------------------------
// 4) MOBILE MENU - toggleMobileMenu() and closeMobileMenu()
// ---------------------------------------------------------------------
// `isMenuOpen` is a STATE variable (declared with let because its value
// changes). It remembers whether the menu is open or closed.
// We never style the menu in JavaScript directly. Instead we use
// classList.add("is-open") and classList.remove("is-open") to add or
// remove a CSS class, and the CSS decides what that class looks like.
// JavaScript controls WHEN, CSS controls HOW IT LOOKS.
// toggleMobileMenu flips the state each time it runs (open -> closed ->
// open). closeMobileMenu always closes, no matter the current state.
//
// ---------------------------------------------------------------------
// 5) REUSABLE FUNCTION WITH A PARAMETER - updateHeadingText(newText)
// ---------------------------------------------------------------------
// A parameter is a placeholder for a value that is given to the function
// when it is called. updateHeadingText("Hello") runs the same code every
// time, but with different text. Writing the logic once and reusing it
// is the DRY principle ("Don't Repeat Yourself").
//
// ---------------------------------------------------------------------
// 6) STICKY NAVBAR - handleHeaderOnScroll()
// ---------------------------------------------------------------------
// window.scrollY is how many pixels the page has been scrolled
// vertically. If it is more than 10, we add the "is-scrolled" class;
// otherwise we remove it. The CSS for .is-scrolled is what rounds the
// corners of the navbar. The function is passed to a "scroll" event
// listener (see section 8) so it re-checks every time the user scrolls.
// It is also called once at the bottom of the file so the header looks
// right if the page loads already scrolled down.
//
// ---------------------------------------------------------------------
// 7) THE SERVICE MODAL - openServiceModal() and closeServiceModal()
// ---------------------------------------------------------------------
// A modal is a pop-up window that appears on top of the page.
// openServiceModal(serviceId) works in these steps:
//   a) Guard clause: stop if any modal element is missing.
//   b) services.find(...) loops through the array and returns the FIRST
//      object where the condition is true (here, matching id). The id is
//      wrapped in Number() because values read from HTML attributes are
//      always strings, and === would not match "3" with 3.
//   c) Fill in the modal: .textContent sets the title and price. The
//      template literal `$${selectedService.price}` uses backticks so we
//      can insert a variable with ${ }. The first $ is a real dollar
//      sign and the ${ } part is the inserted price.
//   d) .map() turns each string in `details` into an <li> tag, and
//      .join("") glues them into one string that we assign to .innerHTML
//      so the browser turns that text into real list items.
//   e) classList.add("is-open") shows the modal. setAttribute(
//      "aria-hidden", "false") tells screen readers it is now visible
//      (accessibility). Setting document.body.style.overflow = "hidden"
//      stops the page behind the modal from scrolling.
// closeServiceModal() undoes all of that: it removes the class, sets
// aria-hidden back to "true", and sets overflow to "" (an empty string
// removes our inline style so the page scrolls normally again).
//
// ---------------------------------------------------------------------
// 8) EVENT LISTENERS
// ---------------------------------------------------------------------
// An event is something that happens on the page (a click, a scroll, a
// key press). element.addEventListener("click", function) says "when
// this event happens, run this function." The function we hand over is
// called a callback. Most listeners are wrapped in `if (element)` so
// they only attach when the element exists.
//
//  - Hamburger button: click -> toggleMobileMenu().
//  - Mobile menu: EVENT DELEGATION. Instead of adding a listener to every
//    link, we add ONE listener to the parent. Events "bubble" up from
//    the clicked child to its parents, and event.target tells us what
//    was actually clicked. If it was an <a>, we close the menu.
//  - Book Now button: swaps the hero heading using updateHeadingText().
//  - Call button: there are TWO click listeners on callBtn. The first
//    shows the phone number in the heading. The second tries to dial
//    with window.location.href = `tel:...`. NOTE: the second one uses a
//    variable called `shopInfo` that is not defined anywhere in this
//    file, so clicking the button will throw a ReferenceError there.
//    Define shopInfo (with a phoneRaw property) or remove that listener.
//  - Window scroll: runs handleHeaderOnScroll() on every scroll.
//  - Feature grid: EVENT DELEGATION again. The cards are created by
//    JavaScript, so they don't exist when the file first runs. We listen
//    on the parent grid (which does exist). event.target.closest(
//    ".service-details-btn") walks up from the clicked element to find
//    the nearest button with that class (or returns null, so we stop).
//    The button's data-service-id attribute is read with
//    `.dataset.serviceId` (data-* attributes become dataset properties,
//    and dashes become camelCase). That id is passed to
//    openServiceModal().
//  - Closing the modal: clicking the X button or the dark overlay calls
//    closeServiceModal. The document listens for "keydown" and checks
//    event.key === "Escape" so the Esc key closes it too.
//
// ---------------------------------------------------------------------
// 9) RENDERING CONTENT FROM DATA
// ---------------------------------------------------------------------
// "Rendering" means building HTML from data and putting it on the page.
// This file shows several ways to do it:
//
//  renderFeatures() - forEach + createElement
//    forEach runs a function once per array item. For each service we
//    create an <article>, add a class, fill it with a template literal
//    of HTML, and appendChild() it into the grid. The pattern is:
//    create element -> insert data -> add to page.
//    (It is not called. It also reads service.text, which doesn't exist
//    in our data, so it would print "undefined". The data uses
//    `description`.)
//
//  renderFeaturesMap() - map + join
//    map() returns a NEW array, here an array of HTML strings. join("")
//    combines them into one string, and innerHTML puts it on the page in
//    one step. We need join because assigning an array to innerHTML would
//    insert commas between items. (Also not called, and it has the same
//    service.text issue.)
//
//  renderNavigation() - map + join, twice
//    Builds the desktop links (class "nav-link") and mobile links
//    (class "mobile-link") from the same navLinks array. One data
//    source feeds both menus, so they can never get out of sync.
//
//  renderServices() - the version actually used
//    Same map + join idea, plus an if/else that picks a badge: popular
//    services get "Popular Choice", others get "Barber Favorite". Each
//    card includes a "View Details" button with
//    data-service-id="${service.id}". That attribute is how the click
//    listener in section 8 knows which service to show in the modal.
//
// forEach vs map: forEach just DOES something for each item and returns
// nothing. map TRANSFORMS each item and gives back a new array.
//
// ---------------------------------------------------------------------
// 10) FUNCTION CALLS AT THE BOTTOM
// ---------------------------------------------------------------------
// Defining a function doesn't run it. Only calling it with () does.
//   renderNavigation();     builds the nav links
//   handleHeaderOnScroll(); sets the header style for the starting scroll
//   renderServices();       builds the service cards
// (renderFeatures and renderFeaturesMap are commented out on purpose,
// because renderServices replaces them. If two render functions ran,
// the later one would overwrite the earlier one's innerHTML.)
// Note setCurrentYear() is called earlier, in the event listeners
// section.
// =====================================================================
