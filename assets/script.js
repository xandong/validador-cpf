const cpf = document.querySelector("#cpf");
const notify = document.querySelector("#notify");

function validador() {
  let exCpf = cpf.value;
  exCpf = exCpf.split("");
  if (
    exCpf.length != 11 ||
    validadorInvalidos(exCpf) ||
    validadorPrimeiroDigito(exCpf) != exCpf[9] ||
    validadorSegundoDigito(exCpf) != exCpf[10]
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

function validadorInvalidos(exCpf) {
  let count = 0;
  exCpf.forEach((element) => {
    if (exCpf[0] == element) count++;
  });
  if (count == 11) return true;
  return false;
}

function validadorPrimeiroDigito(exCpf) {
  let contador = 0;
  for (let i = 0; i < 9; i++) {
    contador += +exCpf[i] * (10 - i);
  }
  return (contador * 10) % 11;
}

function validadorSegundoDigito(exCpf) {
  let contador = 0;
  for (let i = 0; i < 10; i++) {
    contador += +exCpf[i] * (11 - i);
  }
  return (contador * 10) % 11;
}
