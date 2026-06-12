document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".icon-card");
    const contents = document.querySelectorAll(".info-content");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            // 1. Remove a classe 'active' de todos os cards
            cards.forEach(c => c.classList.remove("active"));
            
            // 2. Adiciona a classe 'active' no card que foi clicado
            card.classList.add("active");

            // 3. Descobre qual conteúdo deve ser exibido baseado no 'data-target'
            const targetId = card.getAttribute("data-target");

            // 4. Esconde todos os textos explicativos
            contents.forEach(content => content.classList.remove("active"));

            // 5. Mostra o texto do ícone correspondente
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });
});
