async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  try {
    await window.signInWithEmailAndPassword(
      window.auth,
      email,
      password
    );

    alert("✅ Login successful!");

    window.location.href = "dashboard.html";

  } catch (error) {
    alert(error.message);
  }
}
