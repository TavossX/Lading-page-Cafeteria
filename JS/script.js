const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Fecha o menu quando clicado  no botao de fechar
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
