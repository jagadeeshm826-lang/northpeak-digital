// ==============================
// Mobile Navigation
// ==============================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const expanded =
        hamburger.getAttribute("aria-expanded") === "true";

    hamburger.setAttribute(
        "aria-expanded",
        !expanded
    );

});

// ==============================
// Close Menu After Click
// ==============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        hamburger.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});

// ==============================
// Contact Form Validation
// ==============================

const form =
document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name");

    const email =
    document.getElementById("email");

    const message =
    document.getElementById("message");

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.value.trim().length < 3){

        alert("Please enter a valid name.");

        name.focus();

        return;

    }

    if(!emailRegex.test(email.value.trim())){

        alert("Please enter a valid email address.");

        email.focus();

        return;

    }

    if(message.value.trim().length < 15){

        alert("Message should contain at least 15 characters.");

        message.focus();

        return;

    }

    alert(
        "🎉 Thank you!\n\nOur team will contact you soon."
    );

    form.reset();

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=
document.querySelector(
this.getAttribute("href")
);

if(target){

window.scrollTo({

top:target.offsetTop-70,

behavior:"smooth"

});

}

});

});

// ==============================
// Sticky Navbar Shadow
// ==============================

const header =
document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow=
"0 6px 18px rgba(0,0,0,.12)";

}

else{

header.style.boxShadow=
"0 2px 10px rgba(0,0,0,.08)";

}

});

// ==============================
// Reveal Animation
// ==============================

const cards=
document.querySelectorAll(

".service-card,.testimonial-card,.price-card"

);

const observer=

new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

cards.forEach(card=>{

observer.observe(card);

});

// ==============================
// Active Navigation
// ==============================

const sections=
document.querySelectorAll("section");

const navItems=
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=
section.offsetTop-150;

if(pageYOffset>=top){

current=
section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+current

){

link.classList.add("active");

}

});

});

// ==============================
// Console Welcome
// ==============================

console.log(
"%cNorthPeak Digital Loaded Successfully 🚀",
"color:#2563eb;font-size:18px;font-weight:bold;"
);