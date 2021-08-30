// Show Menu
// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId);
//   const nav = document.getElementById(navId);

//   if (toggle && nav) {
//     toggle.addEventListener("click", () => {
//       nav.classList.toggle("show");
//     });
//   }
// };

// showMenu("nav-toggle", "nav-menu");

function showMenu2(toggleId1, navId1) {
  const toggle = document.getElementById(toggleId1);
  const nav = document.getElementById(navId1);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
}

showMenu2("nav-toggle", "nav-menu");

// Remove Menu
const navLink = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav-menu");

function linkAction() {
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll section active link
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    // console.log(sectionHeight + "Height");
    const sectionTop = current.offsetTop - 50;
    // console.log(sectionTop + "Top");

    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// Change colkor
window.onscroll = () => {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) {
    nav.classList.add("scroll-header");
  } else {
  }
  nav.classList.remove("scroll-header");
};
