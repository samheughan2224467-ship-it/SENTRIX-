async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  try {
    await window.createUserWithEmailAndPassword(window.auth, email, password);

    alert("🎉 Account created successfully!");

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  } catch (error) {
    alert(error.message);
  }
}
