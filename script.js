// cria mascara para o numero de cpf
$('.cpf').mask('000-000.000-00');

function validaCPF(cpf){
    //remove a mascara para ser possivel realizar operaçoes
    cpf = cpf.replace(/\D+/g, '');
    console.log(cpf);
    if(cpf.length != 11  || cpf % 11111111111 === 0) {
        return false;    
    } else {
    
        var numeros = cpf.substring(0, 9);

        var digitos = cpf.substring(9);


        var soma = 0;

        for(var i = 10; i > 1; i-- ){
            soma += numeros.charAt(10 - i) * i;
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        
    

        if(resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for(var k = 11; k > 1; k--){
            soma += numeros.charAt(11 - k) * k;
        
        }

        resultado = soma % 11 < 2? 0 : 11- (soma % 11);

      

        if(resultado != digitos.charAt(1)) {
            return false; 
        }
            
        return true;

    }
}

function validacao(){

    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';


   var cpf = document.getElementById('cpf_digitado').value;

   var resultadovalidacao = validaCPF(cpf);

   if(resultadovalidacao) {
       document.getElementById('success').style.display = 'block';
   } else {
       document.getElementById('error').style.display = 'block';
   }

   var origem = cpf.charAt(8);


   if(origem === '1'){
       local = ' DF ou GO ou MS ou MT ou TO';  
   } 

   if(origem === '2'){
    local = ' AC ou AM ou AP ou PA ou RO ou RR'
   }

   if(origem === '3'){
    local = ' CE ou MA ou PI'
   }
   
   if(origem === '4'){
    local = ' AL ou PB ou PE ou RN'
   }

   if(origem === '5'){
    local = ' BA ou SE'
   }

   if(origem === '6'){
    local = ' MG'
   }

   if(origem === '7'){
    local = ' ES ou RJ'
   }

   if(origem === '8'){
    local = ' SP'
   }

   if(origem === '9'){
    local = ' PR ou SC'
   }

   if(origem === '0'){
    local = ' RS'
   }
   document.getElementById("local").innerHTML = local ;
}



