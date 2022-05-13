// movement animation

const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// moving animation event

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

// Animate In 
container.addEventListener("mouseenter", (e) => {
    card.style.trasition = "none";

    // Popout
    title.style.transform = "translateZ(175px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    purchase.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(150px)";
    sizes.style.transform = "translateZ(150px)";
});


// Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.trasition = "all 0.5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    // PoBack
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});

//   https://youtu.be/XK7T3mY1V-w?list=RDCMUClb90NQQcskPUGDIXsQEz5Q&t=1200