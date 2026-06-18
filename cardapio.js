function comprar() {
    const usuario = localStorage.getItem("usuarioLogado");

    if (!usuario) {
        alert("Faça seu cadastro ou login para continuar.");
        window.location.href = "cadastro.html";
        return;
    }

    window.location.href = "checkout.html";
}