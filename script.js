document.addEventListener("DOMContentLoaded", function () {
    console.log("PiSouq Started");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Button clicked: " + this.innerText);
        });
    });
});