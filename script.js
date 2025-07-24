
function checkPassword() {
  const password = document.getElementById("password-input").value;
  const correctPassword = "5757";
  const errorMessage = document.getElementById("error-message");
  const giftFrame = document.getElementById("gift-frame");
  if (password === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    giftFrame.style.display = "block";
    giftFrame.style.width = "100vw";
    giftFrame.style.height = "100vh";
    giftFrame.style.border = "none";
  } else {
    errorMessage.textContent = "رمز غير صحيح، حاول مرة أخرى.";
  }
}
