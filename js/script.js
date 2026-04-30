let form = document.getElementById("nameForm");
let input = document.getElementById("username");
let greeting = document.getElementById("greeting");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = input.value; 
    greeting.textContent = "Hello" + name + "! Thanks for visiting my golf page.";
});