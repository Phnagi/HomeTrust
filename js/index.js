let containerBox2Content = document.querySelector(".containerBox2Content");
let containerBox2Img = document.querySelector(".containerBox2Img");

containerBox1 = document.querySelector(".containerBox1");
containerBox2 = document.querySelector(".containerBox2");
containerBox3 = document.querySelector(".containerBox3");
containerBox4 = document.querySelector(".containerBox4");
containerBox = document.querySelector(".containerBox");
footer = document.querySelector("footer");

document.addEventListener("scroll" , (e) => {

    if(window.scrollY > (containerBox1Height/3*2)){
        // console.log(1);
        // containerBox2Content.style.display="inline-block"
        containerBox2Content.classList.add("containerBox2ContentAct");
        containerBox2Content.classList.remove("containerBox2ContentInAct");

        containerBox2Img.classList.add("containerBox2ImgAct");
        containerBox2Img.classList.remove("containerBox2ImgInAct");

    }else{
        // containerBox2Content.style.display="none"
        containerBox2Content.classList.add("containerBox2ContentInAct");
        containerBox2Content.classList.remove("containerBox2ContentAct");

        containerBox2Img.classList.add("containerBox2ImgInAct");
        containerBox2Img.classList.remove("containerBox2ImgAct");
    }
})