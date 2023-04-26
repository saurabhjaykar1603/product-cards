function inc() {
    const qntElement = document.getElementById("product-quantity");
    const qnt = parseInt(qntElement.innerHTML);

    qntElement.innerHTML = qnt + 1;
}
function dec() {
    const qntElement = document.getElementById("product-quantity");
    const qnt = parseInt(qntElement.innerHTML);
    if(qnt==1){
        alert('Minimun Quanity can be 1')
    }
    else{
        qntElement.innerHTML = qnt - 1;
    }
}