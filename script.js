document.addEventListener("DOMContentLoaded", function () {
    console.log("SENTRIX loaded successfully!");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Welcome to SENTRIX! This feature will be available soon.");
        });
    });
});
});

function signup() {
    // Get the values from the form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    alert("🎉 Congratulations! Your SENTRIX account has been created successfully.");

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
