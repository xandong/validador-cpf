const cpf = document.querySelector("#cpf");
const notify = document.querySelector("#notify");

function validador() {
  let valorCPF = cpf.value;
  valorCPF = valorCPF.replace(/[\D]+/g, "").replace("-", "");
  valorCPF = valorCPF.split("");
  if (
    valorCPF.length != 11 ||
    verificadorInvalidos(valorCPF) ||
    validadorPrimeiroDigito(valorCPF) != valorCPF[9] ||
    validadorSegundoDigito(valorCPF) != valorCPF[10]
  )
    return (
      (notify.innerHTML = "CPF invalido!"),
      notify.classList.remove("verified"),
      notify.classList.add("failed")
    );
  return (
    (notify.innerHTML = "CPF válido!"),
    notify.classList.remove("failed"),
    notify.classList.add("verified")
  );
}

function verificadorInvalidos(valorCPF) {
  let count = 0;
  valorCPF.forEach((element) => {
    if (valorCPF[0] == element) count++;
  });
  if (count == 11) return true;
  return false;
}

function validadorPrimeiroDigito(valorCPF) {
  let contador = 0;
  for (let i = 0; i < 9; i++) {
    contador += +valorCPF[i] * (10 - i);
  }
  return (contador * 10) % 11;
}

function validadorSegundoDigito(valorCPF) {
  let contador = 0;
  for (let i = 0; i < 10; i++) {
    contador += +valorCPF[i] * (11 - i);
  }
  return (contador * 10) % 11;
}
