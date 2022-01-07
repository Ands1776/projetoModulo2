function validaEmail() {
  let dx = document.getElementById("email");
  if (dx.value.length === 0) {
    dx.classList.remove("input-invalid");
    return false;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(dx.value)) {
    window.location = "./html/cadastro.html";
    dx.classList.remove("input-invalid");
    return true;
  }
  alert("E-mail inválido!");
  dx.classList.add("input-invalid");
  return false;
}