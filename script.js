const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const brandLogo = document.querySelector(".brand-logo");
const brandFallback = document.querySelector(".brand-mark-fallback");

if (brandLogo && brandFallback) {
  brandLogo.addEventListener("error", () => {
    brandLogo.style.display = "none";
    brandFallback.style.display = "grid";
  });
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const quoteForm = document.getElementById("quoteForm");
const feedback = document.getElementById("formFeedback");

if (quoteForm && feedback) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!quoteForm.checkValidity()) {
      feedback.textContent =
        "Preencha os campos obrigatórios para continuar.";
      return;
    }

    const formData = new FormData(quoteForm);
    const nome = formData.get("nome");
    const telefone = formData.get("telefone");
    const email = formData.get("email");
    const tipoSeguro = formData.get("tipoSeguro");
    const cidade = formData.get("cidade");
    const mensagem = formData.get("mensagem");

    const whatsappNumber = "5500000000000";
    const text = [
      "Olá, vim pelo site da EPV e gostaria de uma cotação.",
      "",
      `Nome: ${nome}`,
      `WhatsApp: ${telefone}`,
      `E-mail: ${email}`,
      `Tipo de seguro: ${tipoSeguro}`,
      `Cidade/UF: ${cidade}`,
      `Mensagem: ${mensagem || "Não informada"}`,
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    feedback.style.color = "#1f7a3d";
    feedback.textContent = "Solicitação enviada para o WhatsApp da equipe.";
    quoteForm.reset();
  });
}
