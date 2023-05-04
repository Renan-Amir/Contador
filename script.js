function contar() {
    const inicio = parseInt(document.getElementById("txtinc").value);
    const fim = parseInt(document.getElementById("txtfim").value);
    const passo = parseInt(document.getElementById("txtps").value);
    const resultado = document.getElementById("res");
    resultado.innerHTML = "";
  
    for (let i =inicio; i <= fim; i += passo) {
      resultado.innerHTML += `${i}\u{1F449}`;
    }
  
    const chegou = document.getElementById("chegou");
    chegou.innerText = ``
  }
  
  function reset() {
    document.getElementById("txtinc").value = "";
    document.getElementById("txtfim").value = "";
    document.getElementById("txtps").value = "";
    document.getElementById("res").innerHTML = "";
    document.getElementById("chegou").innerText = "";
  }
  