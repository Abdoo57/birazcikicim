
function checkPassword() {
  const input = document.getElementById("password").value;
  const frame = document.getElementById("contentFrame");
  const error = document.getElementById("error");
  if (input === "5757") {
    document.querySelector(".login-screen").style.display = "none";
    frame.style.display = "block";
    frame.style.width = "100vw";
    frame.style.height = "100vh";
    frame.style.border = "none";
  } else {
    error.textContent = "الرمز خاطئ، حاول مرة أخرى.";
  }
}
