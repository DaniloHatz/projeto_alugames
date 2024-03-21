function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector(`.dashboard__item__img`);
    let botao = jogo.querySelector(`.dashboard__item__button`);

    console.log(botao.className);

    if (imagem.className == `dashboard__item__img`) {
        imagem.className = `dashboard__item__img dashboard__item__img--rented`;
    } else {
        imagem.className = `dashboard__item__img`;
    }

    if (botao.className == `dashboard__item__button`) {
        botao.className = `dashboard__item__button dashboard__item__button--return`;
        botao.textContent = `Devolver`;
    } else {
        botao.className = `dashboard__item__button`;
        botao.textContent = `Alugar`;
    }

}