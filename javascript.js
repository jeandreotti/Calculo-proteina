
    function calcular(){
    
        var peso1 = window.document.getElementById('peso').value;
        var valor1 = window.document.getElementById('valor').value;
        var proteina1 = window.document.getElementById('proteina').value;
    
        var valorPeso = Number((0.1/ peso1) * valor1);
        var valorproteina = Number(valorPeso/proteina1);
    
        document.getElementById('totalVP').innerHTML += valorPeso;
        document.getElementById('totalProt').innerHTML += valorproteina;
        }
