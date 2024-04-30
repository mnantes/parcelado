function solicitarEmprestimo() {
    let valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo:"));
    let numParcelas = parseInt(prompt("Digite o número de parcelas:"));

    if (!valorEmprestimo || !numParcelas) {
        alert("Por favor, forneça valores válidos.");
        return;
    }

    let valorParcela = valorEmprestimo / numParcelas;
    alert("Valor do empréstimo: R$" + valorEmprestimo.toFixed(2));
    for (let i = 1; i <= numParcelas; i++) {
        alert("Parcela " + i + ": R$" + valorParcela.toFixed(2));
    }
}

function simularEmprestimo() {
    let continuar = true;
    while (continuar) {
        let valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo:"));
        let numParcelas = parseInt(prompt("Digite o número de parcelas:"));

        if (!valorEmprestimo || !numParcelas) {
            alert("Por favor, forneça valores válidos.");
            continuar = confirm("Deseja tentar novamente?");
            continue;
        }

        let totalPagamentos = numParcelas * (numParcelas + 1) / 2;
        let decremento = valorEmprestimo / totalPagamentos;
        let saldoDevedor = valorEmprestimo;
        let valorParcela;

        alert("Valor do empréstimo: R$" + valorEmprestimo.toFixed(2));
        for (let i = 1; i <= numParcelas; i++) {
            valorParcela = (numParcelas - i + 1) * decremento;
            alert("Parcela " + i + ": R$" + valorParcela.toFixed(2));
            saldoDevedor -= valorParcela;
        }

        continuar = confirm("Deseja simular outro empréstimo?");
    }
}

document.getElementById('btnFixed').addEventListener('click', solicitarEmprestimo);
document.getElementById('btnDecreasing').addEventListener('click', simularEmprestimo);
