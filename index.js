// making smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scrolling to top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

// add a mouse event on the btnNavEl
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// // making navigation
const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting == true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //   // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
