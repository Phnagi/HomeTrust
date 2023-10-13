let html = document.querySelector("*");
let containerBox1 = document.querySelector(".containerBox1");
let containerBox2 = document.querySelector(".containerBox2");
let containerBox3 = document.querySelector(".containerBox3");
let containerBox4 = document.querySelector(".containerBox4");
let containerBox = document.querySelector(".containerBox");

let footer = document.querySelector("footer");

// let height = document.documentElement.scrollTop;

console.log("containerBox1:" + containerBox1.getBoundingClientRect().height);
console.log("containerBox2:" + containerBox2.getBoundingClientRect().height);
console.log("containerBox3:" + containerBox3.getBoundingClientRect().height);
console.log("containerBox4:" + containerBox4.getBoundingClientRect().height);
console.log("footer:" + footer.getBoundingClientRect().height);

// document.addEventListener("wheel", (event) => {
//   //   event.preventDefault();
//   //   console.log(height);
//   console.log(window.scrollY);
//   const delta = event.deltaY;
//   console.log(delta);
//   if (delta > 0) {
//     html.scrollBy({
//       top: window.innerHeight,
//       behavior: "smooth",
//     });
//   } else if (delta < 0) {
//     // html.scrollBy({
//     //   top: -window.innerHeight,
//     //   behavior: "smooth",
//     // });
//   }
// });

let lastScrollTop = 0;

document.addEventListener("scroll", (event) => {
  let containerBox1Height = containerBox1.getBoundingClientRect().height;
  let containerBox2Height =
    containerBox2.getBoundingClientRect().height + containerBox1Height;
  let containerBox3Height =
    containerBox3.getBoundingClientRect().height + containerBox2Height;
  let containerBox4Height =
    containerBox4.getBoundingClientRect().height + containerBox3Height;
  let footerHeight =
    footer.getBoundingClientRect().height + containerBox4Height;

  console.log(window.scrollY);
  let st = window.pageYOffset || document.documentElement.scrollTop; //https://beareatapple.hashnode.dev/wheel-vs-scroll-event

  let speed = 200;
  if (st > lastScrollTop) {
    // console.log(1);

    if (window.scrollY > 0 && window.scrollY < containerBox1Height) {
      //   console.log(containerBox1Height);
      console.log(1);
      html.scrollTo({
        top: containerBox1Height,
        behavior: "smooth",
      });
    } else if (
      window.scrollY > containerBox1Height &&
      window.scrollY < containerBox2Height
    ) {
      console.log(2);
      html.scrollTo({
        top: containerBox2Height,
        behavior: "smooth",
      });
    }
  } else {
    // console.log(-1);
    if (window.scrollY > 0 && window.scrollY < containerBox1Height) {
      //   console.log(containerBox1Height);
      console.log(1);
      html.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (
      window.scrollY > containerBox1Height &&
      window.scrollY < containerBox2Height
    ) {
      console.log(2);
      html.scrollTo({
        top: containerBox1Height,
        behavior: "smooth",
      });
    }
  }

  lastScrollTop = st <= 0 ? 0 : st;
});

console.log(html);
