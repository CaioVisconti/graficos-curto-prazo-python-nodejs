function atualizarImagem() {
    try {
        const imagem = document.getElementById('teste');
        const tempoAtual = new Date().getTime();
        imagem.src = '/uploads/grafico.png?t=' + tempoAtual;
    }
    catch {
        console.log("Ainda nao tem foto");
    }
    setInterval(atualizarImagem, 2000);
}