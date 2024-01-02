document.addEventListener('DOMContentLoaded', function() {
    const text = "Passionate about creating engaging, interactive applications and experiences on the web.";
    const typingText = document.getElementById('typing-text');
    let index = 0;
  
    function type() {
      if (index < text.length) {
        typingText.textContent += text[index];
        index++;
        setTimeout(type, 20);
      }
    }  
    type();
});
  
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);
})

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.addEventListener("click", function(){
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
});

window.addEventListener("scroll", function(){
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
});

const themeIcon = document.getElementById("theme-icon");

themeIcon.addEventListener("click", function(){
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        themeIcon.classList.remove("bx", "bxs-sun");
        themeIcon.classList.add("bx", "bxs-moon");
    } else {
        themeIcon.classList.remove("bx", "bxs-moon");
        themeIcon.classList.add("bx", "bxs-sun");
    }
});
