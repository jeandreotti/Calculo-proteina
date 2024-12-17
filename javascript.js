
    function calcular(){
    
        let peso = window.document.getElementById('peso').value;

        let valor = window.document.getElementById('valor').value;
        
        let proteina = window.document.getElementById('proteina').value;
    
        let peso1 = parseFloat(peso.replace(',' , '.'));
        let valor1 = parseFloat(valor.replace(',' , '.'));
        let proteina1 = parseFloat(proteina.replace(',' , '.'));
       
        
        let valorPeso = ((0.1/ peso1) * valor1);
        let valorProteina = (valorPeso/proteina1);

        valorPeso = valorPeso.toFixed(2).replace("." , ",");
        valorProteina = valorProteina.toFixed(2).replace("." , ",");;

        document.getElementById('totalVP').innerHTML = 'R$ ' + valorPeso;
        document.getElementById('totalProt').innerHTML = 'R$ ' + valorProteina;

        let prot100 = window.document.getElementById('mostrarProt');

        prot100.style.color = 'black';
        prot100.style.fontSize = '1.4em';
        prot100.innerHTML = `${proteina1}gr`;
        
        }
