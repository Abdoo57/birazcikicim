
function checkPassword() {
  const password = document.getElementById('password-input').value;
  if (password === "5757") {
    window.location.href = "gift.html";
  } else {
    document.getElementById('error-message').textContent = "الرمز غير صحيح، حاول مرة أخرى.";
  }
}
