// ======= CONFIGURAÇÃO =======
// Troque pelo número de WhatsApp da MillyCake (formato: DDI + DDD + número, só dígitos)
const NUMERO_WHATSAPP = "5500000000000";

// ======= TRANSIÇÃO ENTRE TELAS =======
const telaAbertura = document.getElementById("tela-abertura");
const telaCardapio = document.getElementById("tela-cardapio");
const botaoLogo = document.getElementById("botao-logo");

botaoLogo.addEventListener("click", () => {
  telaAbertura.classList.add("saindo");
  setTimeout(() => {
    telaAbertura.classList.add("oculta");
    telaCardapio.classList.remove("oculta");
    telaCardapio.classList.add("entrando");
    window.scrollTo(0, 0);
  }, 480);
});

// ======= REDIRECIONAMENTO PARA O WHATSAPP =======
function abrirWhatsapp(mensagem) {
  const texto = encodeURIComponent(mensagem);
  window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${texto}`, "_blank");
}

document.querySelectorAll(".botao-pedir").forEach((botao) => {
  botao.addEventListener("click", () => {
    const produto = botao.dataset.produto;
    const preco = botao.dataset.preco;
    const mensagem = `Olá! Quero pedir: ${produto} (${preco}) 💜`;
    abrirWhatsapp(mensagem);
  });
});

const botaoFlutuante = document.getElementById("botao-whatsapp-flutuante");
if (botaoFlutuante) {
  botaoFlutuante.addEventListener("click", () => {
    abrirWhatsapp("Olá! Vi o cardápio da MillyCake e quero fazer um pedido 💜");
  });
}
