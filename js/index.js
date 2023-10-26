let containerBox2Content = document.querySelector(".containerBox2Content");
let containerBox2Img = document.querySelector(".containerBox2Img");

let containerBox4Left = document.querySelector(".containerBox4Left");
let containerBox4Right = document.querySelector(".containerBox4Right");


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

    if(window.scrollY > (containerBox3Height - (windowHeight/3) )){
        
        containerBox4Left.classList.add("containerBoxContentAct");
        containerBox4Left.classList.remove("containerBoxContentInAct");

        containerBox4Right.classList.add("containerBoxImgAct");
        containerBox4Right.classList.remove("containerBoxImgInAct");


    }else{
        // containerBox2Content.style.display="none"
        containerBox4Left.classList.add("containerBoxContentInAct");
        containerBox4Left.classList.remove("containerBoxContentAct");

        containerBox4Right.classList.add("containerBoxImgInAct");
        containerBox4Right.classList.remove("containerBoxImgAct");
    }
})