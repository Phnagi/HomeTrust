let html = document.querySelector("*");
let containerBox1 = document.querySelector(".containerBox1");
let containerBox2 = document.querySelector(".containerBox2");
let containerBox3 = document.querySelector(".containerBox3");
let containerBox4 = document.querySelector(".containerBox4");
let containerBox = document.querySelector(".containerBox");
let nav = document.querySelector(".nav");

let footer = document.querySelector("footer");

let navul = document.querySelector(".navul");
// let hamberger = document.querySelector(".hamberger");
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let containerBox1Height = containerBox1.getBoundingClientRect().height;
let containerBox2Height =
  containerBox2.getBoundingClientRect().height + containerBox1Height;
let containerBox3Height =
  containerBox3.getBoundingClientRect().height + containerBox2Height;
let containerBox4Height =
  containerBox4.getBoundingClientRect().height + containerBox3Height;
let footerHeight =
  footer.getBoundingClientRect().height + containerBox4Height;


console.log(windowWidth);
// let height = document.documentElement.scrollTop;

console.log("containerBox1:" + containerBox1.getBoundingClientRect().height);
console.log("containerBox2:" + containerBox2.getBoundingClientRect().height);
console.log("containerBox3:" + containerBox3.getBoundingClientRect().height);
console.log("containerBox4:" + containerBox4.getBoundingClientRect().height);
console.log("footer:" + footer.getBoundingClientRect().height);

window.addEventListener("resize",(e) => {
  // console.log(1);
  containerBox1 = document.querySelector(".containerBox1");
  containerBox2 = document.querySelector(".containerBox2");
  containerBox3 = document.querySelector(".containerBox3");
  containerBox4 = document.querySelector(".containerBox4");
  containerBox = document.querySelector(".containerBox");
  footer = document.querySelector("footer");

  containerBox1Height = containerBox1.getBoundingClientRect().height;
  containerBox2Height =containerBox2.getBoundingClientRect().height + containerBox1Height;
  containerBox3Height =containerBox3.getBoundingClientRect().height + containerBox2Height;
  containerBox4Height =containerBox4.getBoundingClientRect().height + containerBox3Height;
  footerHeight =footer.getBoundingClientRect().height + containerBox4Height;


  windowWidth = window.innerWidth;
  windowHeight = window.windowHeight;
  if(windowWidth < 995){
    nav.classList.remove("navAct");
  }else{
    nav.classList.add("navAct");
  }
})

document.addEventListener("scroll", (e) => {
  
  let containerBox1Height = containerBox1.getBoundingClientRect().height;
  if(windowWidth < 995){
    // nav.classList.remove("navAct");
    if (window.scrollY < containerBox1Height) {
      // console.log(1);
      nav.classList.add("navInAct");
      nav.classList.remove("navAct");

    } else if (window.scrollY > containerBox1Height) {
      // console.log(2);
      nav.classList.add("navAct");
      nav.classList.remove("navInAct");
    }
  }else{
    // nav.classList.add("navAct");
  }

});


