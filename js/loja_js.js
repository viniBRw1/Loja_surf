document.getElementById("avançar").addEventListener("click", avançar_produto)
document.getElementById("voltar").addEventListener("click", voltar_produto)
let img = document.getElementById("produto_imagem")
let nome = document.getElementById("produto_name")
let preço = document.getElementById("produto_preço")
let  oferta_cont = 1

function avançar_produto() {

oferta_cont ++ 
if (oferta_cont > 3 ){
    oferta_cont = 1
 } else if( oferta_cont < 1){
    oferta_cont = 3
 }


switch(oferta_cont){


    case 1 :
        img.setAttribute("src" , "../img/img_loja/prancha/prancha_1.png")
        nome.innerText ="prancha"
        preço.innerText = "R$ 1500,00"
        parcela.innerText = " ou 3x R$ 500,00 sem juros"
        break;
      
    
    case 2 :
        img.setAttribute("src" , "../img/img_loja/deck/deck_1.png")
        nome.innerText ="deck"
        preço.innerText = "R$ 60,00"
        parcela.innerText = " ou 2x R$ 30,00 sem juros"
        break;
    
    case 3 :
        img.setAttribute("src" , "../img/img_loja/leash/leash_1.png")
        nome.innerText ="leash"
        preço.innerText = "R$ 180,00"
        parcela.innerText = " ou 2x R$ 90,00 sem juros"
        break;
    }
 






}
function voltar_produto(){
    oferta_cont--
    if (oferta_cont > 3 ){
        oferta_cont = 1
     } else if( oferta_cont < 1){
        oferta_cont = 3
     }

     switch(oferta_cont){


        case 1 :
            img.setAttribute("src" , "../img/img_loja/prancha/prancha_1.png")
            nome.innerText ="prancha"
            preço.innerText = "R$ 1500,00"
            parcela.innerText = " ou 3x R$ 500,00 sem juros"
            break;
          
        
        case 2 :
            img.setAttribute("src" , "../img/img_loja/deck/deck_1.png")
            nome.innerText ="deck"
            preço.innerText = "R$ 60,00"
            parcela.innerText = " ou 2x R$ 30,00 sem juros"
            break;
        
        case 3 :
            img.setAttribute("src" , "../img/img_loja/leash/leash_1.png")
            nome.innerText ="leash"
            preço.innerText = "R$ 180,00"
            parcela.innerText = " ou 2x R$ 90,00 sem juros"
            break;
        }
     
}

