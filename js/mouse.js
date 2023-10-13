let html = document.querySelector("*");
let containerBox1 = document.querySelector(".containerBox1");
let containerBox2 = document.querySelector(".containerBox2");
let containerBox3 = document.querySelector(".containerBox3");
let containerBox4 = document.querySelector(".containerBox4");
let containerBox = document.querySelector(".containerBox");
let nav = document.querySelector(".nav");

let footer = document.querySelector("footer");

// let height = document.documentElement.scrollTop;

console.log("containerBox1:" + containerBox1.getBoundingClientRect().height);
console.log("containerBox2:" + containerBox2.getBoundingClientRect().height);
console.log("containerBox3:" + containerBox3.getBoundingClientRect().height);
console.log("containerBox4:" + containerBox4.getBoundingClientRect().height);
console.log("footer:" + footer.getBoundingClientRect().height);

html.addEventListener("scroll", (e) => {
  let containerBox1Height = containerBox1.getBoundingClientRect().height;
  if (window.scrollY < containerBox1Height) {
  } else if (window.scrollY > containerBox1Height) {
  }
});
