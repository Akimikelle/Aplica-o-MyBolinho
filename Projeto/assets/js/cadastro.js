let btn = document.querySelector("#versenha");
let btnconf = document.querySelector("#confsenha");

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");
let validUsuario = false;

let senha = document.querySelector("#senha");
let labelsenha = document.querySelector("#labelsenha");
let validSenha = false;

let confirmesenha = document.querySelector("#confirmesenha");
let labelConfSenha = document.querySelector("#labelConfSenha");
let validConfSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "Nome *Insira no minimo 3 caracteres";
    nome.setAttribute("style", "border-color: red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "Nome";
    nome.setAttribute("style", "border-color: green");
    validNome = true;
  }
});

usuario.addEventListener("keyup", () => {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute("style", "color: red");
    labelUsuario.innerHTML = "Usuário *Insira no minimo 5 caracteres";
    usuario.setAttribute("style", "border-color: red");
    validUsuario = false;
  } else {
    labelUsuario.setAttribute("style", "color: green");
    labelUsuario.innerHTML = "Usuário";
    usuario.setAttribute("style", "border-color: green");
    validUsuario = true;
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "Senha *Insira no minimo 6 caracteres";
    senha.setAttribute("style", "border-color: red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    labelSenha.innerHTML = "Senha";
    senha.setAttribute("style", "border-color: green");
    validSenha = true;
  }
});

confirmesenha.addEventListener("keyup", () => {
  if (senha.value != confirmesenha.value) {
    labelConfSenha.setAttribute("style", "color: red");
    labelConfSenha.innerHTML = "Confirmar Senha *As senhas não conferem";
    confirmesenha.setAttribute("style", "border-color: red");
    validConfirmeSenha = false;
  } else {
    labelConfSenha.setAttribute("style", "color: green");
    labelConfSenha.innerHTML = "Confirmar Senha";
    confirmesenha.setAttribute("style", "border-color: green");
    validConfirmeSenha = true;
  }
});

function cadastrar() {
  if (validNome && validUsuario && validSenha && validConfirmeSenha) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
    msgError.setAttribute("style", "display: none");
    msgError.innerHTML = "";

    setTimeout(() => {
      window.location.href =
        "../html/signin.html";
    }, 2000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

btnconf.addEventListener("click", () => {
  let inputconfSenha = document.querySelector("#confirmesenha");

  if (inputconfSenha.getAttribute("type") == "password") {
    inputconfSenha.setAttribute("type", "text");
  } else {
    inputconfSenha.setAttribute("type", "password");
  }
});
