const form = document.querySelector("form");
const card = document.querySelector(".card");
const next = document.querySelector(".next");
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    card.classList.add("hide");
    next.classList.remove("hide")
});