// function calcularMedia(N1,N2,N3){
//     let resultado = (N1 + N2 + N3)/3;
//     return resultado;
// }
// function calcularExame(nota){
//     let resultado = 10 - nota;
//     return resultado;
// function calcularDelta(a, b, c){
//     let delta = b*b - (4*a*c); 
//     return delta; 
// }
// function calcularx1(a, b, delta){
//     let x1 = (-1*b + Math.sqrt(delta)) / 2 * a; 
//     return x1; 
// }
// function calcularx2(a,b,delta){
//     let x2 = (-1*b - Math.sqrt(delta)) / 2 * a;
//     return x2;


 $('#btcalcular').click(
     function(){

        let nome = "Maria"
        let cpf = document.getElementById('inputA').value;

        let v1 = cpf[0]  *10
        let v2 = cpf[1]  *9
        let v3 = cpf[2]  *8
        let v4 = cpf[3]  *7 
        let v5 = cpf[4]  *6 
        let v6 = cpf[5]  *5 
        let v7 = cpf[6]  *4
        let v8 = cpf[7]  *3
        let v9 = cpf[8]  *2

        let valor = v1+v2+v3+v4+v5+v6+v7+v8+v9; 

        resto = valor %11;

        digito1 = 11 - resto;

        console.log(cpf[9]);

        if (digito1 == cpf[9]){
            console.log("É Valido")
        }
        
        console.log(digito1)

        let j1 = cpf[0]  *11
        let j2 = cpf[1]  *10
        let j3 = cpf[2]  *9
        let j4 = cpf[3]  *8
        let j5 = cpf[4]  *7 
        let j6 = cpf[5]  *6
        let j7 = cpf[6]  *5
        let j8 = cpf[7]  *4
        let j9 = cpf[8]  *3
        let j10= digito1  *2
        
        valor = j1+j2+j3+j4+j5+j6+j7+j8+j9+j10; 
        
        resto = valor %11;
        
        digito2 = 11 - resto; 
        
        console.log(cpf[10]);

        if (digito2 == cpf[10]){
            console.log("É Valido")
        }

            
     })
     
     
//    $('#btcalcular').click(
//      function(){

// let nome = "Maria"
//  let cpf = "06259357133"


// console.log(digito1)
//      })
 
     
   
// function pegarItem(item, valor){
//         // alert("peguei o item" + item);
//         if (item == "arroz") {
//         console.log(item + " valor "+valor);
//       }

// }
// $('#btcalcular').click(
//     function(){
//         produtos =
//         [ 
//             {"nome":"arroz", "valor" :10},
//             {"nome":"arroz", "valor" :12},
//             {"nome":"feijão", "valor" :10},
//             {"nome":"ovo", "valor" :1}
//         ]
//         for (i = 0; i <=produtos.length-1 ; i++){
//                           pegarItem (produtos[i].nome, produtos[i].valor)
            
//                   }
    
//     }
// )

        // {"nome":"willian", "idade" :18}, 
        // {"nome":"Gabriel", "idade" :20}, 
        // {"nome":"Jean", "idade" :29}, 
        // {"nome":"Samoel", "idade" :23}, 
        // {"nome":"Diego", "idade" :21}, 
        // {"nome":"Adam", "idade" :21}, 

        // console.log(turma[3].nome);  samoel
        // console.log(turma[0].nome);  18
        // console.log(turma[5].nome);  21
        // console.log(turma[4].nome);  Diego
        // console.log(turma[2].nome);  Jean
        

    

// $('#btcalcular').click(
//     function(){

//         listaCompras = ["arroz" , "arroz", "feijão", "ovo"]
//         valorProduto = [10,        12,       8,        1];

//         for (i = 0; i <=listaCompras.length-1 ; i++){
//              pegarItem (listaCompras[i], valorProduto[i])

//         }
// }

// )

// $('#inputOla').click(
//     function(){
//         let notas = [9,7,5,4,8];
//         let nome  = "Maria";

//          for (i=0;i<notas.length;i++){
//            console.log(notas[i]);
//          }

        //  for (i=0;i<nome.length;i++){
        //     console.log(nome[i]);
        //  }

        // calculo =
        // {
        //     'N1':document.getElementById('inputA').value,
        //     'N2':document.getElementById('inputB').value,
        //     'N3':document.getElementById('inputC').value
        // }
        // let media = calcularMedia (parseInt(calculo.N1), parseInt(calculo.N2), parseInt(calculo.N3));
    
   
        // if 
        // (media >= 7) {
        // alert('Você foi aprovado' + media);
        //  } else {
        //     alert('Você esta de recuperação' + calcularExame(media));

           // let exame= 10-media;
           // alert (exame);
 