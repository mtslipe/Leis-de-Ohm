function updateValues(changed) {
    var tensao = parseFloat(document.getElementById("tensao").value);
    var corrente = parseFloat(document.getElementById("corrente").value);
    var resistencia = parseFloat(document.getElementById("resistencia").value);
    if (changed === 'resistencia') {
        tensao = corrente * resistencia;
        document.getElementById("tensao").value = tensao.toFixed(1);
    } else if (changed === 'tensao') {
        resistencia = tensao / (corrente || 1);
        document.getElementById("resistencia").value = resistencia.toFixed(1);
    } else if (changed === 'corrente') {
        tensao = corrente * resistencia;
        document.getElementById("tensao").value = tensao.toFixed(1);
    }
    document.getElementById("tensao-value").textContent = tensao.toFixed(1);
    document.getElementById("corrente-value").textContent = corrente.toFixed(1);
    document.getElementById("resistencia-value").textContent = resistencia.toFixed(1);
    document.getElementById("equation-values").textContent = `V = ${tensao.toFixed(1)}V, I = ${corrente.toFixed(1)}A, R = ${resistencia.toFixed(1)}Ω`;
}
window.onload = updateValues;