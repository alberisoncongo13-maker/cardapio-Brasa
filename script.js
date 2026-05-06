let total = 0;

function addItem(preco) {
    total += preco;

    document.getElementById('total').innerText =
        total.toFixed(2);
}

function removeItem(preco) {
    total -= preco;

    if (total < 0) {
        total = 0;
    }

    document.getElementById('total').innerText =
        total.toFixed(2);
}

function showPage(id) {
    document.querySelectorAll('.section')
        .forEach(sec => sec.classList.remove('active'));

    document.getElementById(id)
        .classList.add('active');
}

function finalizar() {

    if (total <= 0) {
        alert('Nenhum item no pedido');
        return;
    }

    let pagamento =
        document.getElementById('pagamento').value;

    alert(
        'Pedido feito! Total: R$ ' +
        total.toFixed(2) +
        ' | Pagamento: ' +
        pagamento
    );
}

function cancelar() {
    total = 0;

    document.getElementById('total').innerText = '0';

    alert('Pedido cancelado');
}