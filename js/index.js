const scanBtn = document.getElementById("scanBtn");
const resultBox = document.getElementById("resultBox");
const errorTitle = document.getElementById("errorTitle");
const errorDescription = document.getElementById("errorDescription");
const difficultyText = document.getElementById("difficultyText");
const cameraBox = document.getElementById("cameraBox");
const callBtn = document.getElementById("callBtn");

scanBtn.addEventListener("click", () => {

  cameraBox.classList.add("active");

  scanBtn.innerText = "Escaneando...";

  setTimeout(() => {

    resultBox.classList.remove("hidden");

    errorTitle.innerText = "Erro detectado: VAN 1067";

    errorDescription.innerText =
      "Esse erro geralmente acontece quando o Riot Vanguard está desativado ou quando o TPM 2.0 e o Secure Boot não estão ativados no sistema.";

    difficultyText.innerText = "Média";

    scanBtn.innerText = "Erro identificado";

  }, 2000);

});

callBtn.addEventListener("click", () => {

  alert("Conectando você com um especialista da ReaderIA...");

});