//** */ first step ***//

document.getElementById("btn-submit").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email");
  const email = userEmail.value;

  const userPass = document.getElementById("user-pass");
  const password = userPass.value;

  if (email === "baperchele@gmail.com" && password === "sicret") {
    window.location.href = "bank.html";
  } else {
    alert("Incurrect user or Password");
  }
});
