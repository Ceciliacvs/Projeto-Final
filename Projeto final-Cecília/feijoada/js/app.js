/* app.js */

document.addEventListener("DOMContentLoaded", () => {

  /* ── Ano no rodapé ── */
  const anoEl = document.getElementById("ano");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* ── Renderiza cards em um <ul> pelo id ── */
  function renderizarItens(listaId, tipo) {
    const lista = document.getElementById(listaId);
    if (!lista) return;

    const filtrados = ITENS.filter(item => item.tipo === tipo);

    if (filtrados.length === 0) {
      lista.innerHTML = "<li>Nenhum item disponível.</li>";
      return;
    }

    lista.innerHTML = filtrados.map(item => `
      <li class="card">
        ${item.imagem ? `<img class="card-img" src="${item.imagem}" alt="${item.nome}">` : ""}
        <div class="card-body">
          <h3 class="card-nome">${item.nome}</h3>
          <p class="card-desc">${item.descricao}</p>
        </div>
        <span class="card-preco">${item.preco}</span>
      </li>
    `).join("");
  }

  renderizarItens("lista-cardapio",  "cardapio");
  renderizarItens("lista-bebidas",   "bebidas");
  renderizarItens("lista-sobremesa", "sobremesa");

  /* ── Formulário de contato ── */
  const form   = document.querySelector(".form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome  = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();

      if (!nome || !email) {
        status.textContent = "Por favor, preencha os campos obrigatórios.";
        status.style.color = "#c0392b";
        return;
      }

      status.textContent = "Mensagem enviada! Em breve entraremos em contato.";
      status.style.color = "#27ae60";
      form.reset();
    });
  }

});