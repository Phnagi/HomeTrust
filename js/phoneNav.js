let hamberger = document.querySelector(".hamberger");
let phoneNavMenu = document.querySelector(".phoneNavMenu");
let toggle = 0;
hamberger.addEventListener("click",()=>{
    
    if(toggle==0){
        console.log(toggle);
        // phoneNavMenu.style.display = "flex";
        phoneNavMenu.classList.add("navPhoneActive");
        phoneNavMenu.classList.add("navPhoneActiveAnimation");
        toggle =1;
    }else if(toggle==1){
        console.log(toggle);
        // phoneNavMenu.style.display = "none";
        toggle =0;
        phoneNavMenu.classList.remove("navPhoneActiveAnimation");
        phoneNavMenu.classList.remove("navPhoneActive");
    }
    
});