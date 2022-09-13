let Navigation = document.getElementById("Navigation");
console.log(menuIcon)

Navigation.style.maxHeight = "0px";

function menutoggle() {
    if( Navigation.style.maxHeight == "0px")
    {
        Navigation.style.maxHeight = "300px";
    }
    else{
        Navigation.style.maxHeight ="0px";
    }
}

window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})