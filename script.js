document.addEventListener("DOMContentLoaded", function () {
    console.log("SENTRIX loaded successfully!");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Welcome to SENTRIX! This feature will be available soon.");
        });
    });
});
