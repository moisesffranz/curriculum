

/*====================== =======*/
/// funcao de logica de interacao com usuario 
function adcVestido(){
/// criando e estanciando as variaveis globais  
  quantVestidos = 0;
  valorVestidos = 0;
/// /// criando e estanciando as variaveis locais
  let qAz =0;
  let pA =0;
  let mA =0;
  let gA =0;
/// atribuindo conteudo as variaveis 
  pA = document.getElementById("pA").value;
  mA = document.getElementById("mA").value;
  gA = document.getElementById("gA").value;
/* convertendo conteudo das variaveis em numeros inteiros para somar seus valores  */   
  qAz = (parseInt(pA)+parseInt(mA)+parseInt(gA));
/// criando e estanciando as variaveis locais
  let qRos =0;
  let pR =0;
  let mR =0;
  let gR =0;
/// atribuindo conteudo as variaveis  
  pR = document.getElementById("pR").value;
  mR = document.getElementById("mR").value;
  gR = document.getElementById("gR").value;
/* convertendo conteudo das variaveis em numeros inteiros para somar seus valores  */  
  qRos = (parseInt(pR)+parseInt(mR)+parseInt(gR));
/// /// criando e estanciando as variaveis locais
  let qVer =0;
  let pV =0;
  let mV =0;
  let gV =0;
/// atribuindo conteudo as variaveis 
  pV = document.getElementById("pV").value;
  mV = document.getElementById("mV").value;
  gV = document.getElementById("gV").value;
/* convertendo conteudo das variaveis em numeros inteiros para somar seus valores  */  
  qVer = (parseInt(pV)+parseInt(mV)+parseInt(gV));
/// somando valores das variaveis
  quantVestidos = (qAz+qRos+qVer);
/// multiplicando pelo valor unitario
  valorVestidos = (quantVestidos*160);
/// confirmando se algum item foi selecionado para adicionar
if (quantVestidos==0 && valorVestidos==0) {
    alert("Escolha um item primeiro !");
  } else {
    document.getElementById("quantVestidos").innerHTML = quantVestidos;
    document.getElementById("valorVestidos").innerHTML ="R$"+" "+valorVestidos+",00";
    document.getElementById("itensTotaisVestido").innerHTML = "0"+quantVestidos+" "+"Vestido Verão"; 
    document.getElementById("valorTotalVestido").innerHTML = "Valor itens :"+" R$ "+""+valorVestidos+",00";
  }
} 
/// funcao simples para limpar campos
function limpaVest(){
  document.getElementById("quantVestidos").innerHTML =" ";
  document.getElementById("valorVestidos").innerHTML =" ";
  document.getElementById("itensTotaisVestido").innerHTML =" ";
  document.getElementById("valorTotalVestido").innerHTML =" ";
  document.getElementById("pA").value = 0;
  document.getElementById("mA").value = 0;
  document.getElementById("gA").value = 0;
  document.getElementById("pR").value = 0;
  document.getElementById("mR").value = 0;
  document.getElementById("gR").value = 0;
  document.getElementById("pV").value = 0;
  document.getElementById("mV").value = 0;
  document.getElementById("gV").value = 0;
}
///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/// funcao de logica de interacao com usuario 
function adcBad(){
/// criando e estanciando variaveis globais  
  quantBad = 0;
  valorBad = 0;
/// criando e estanciqando as variaveis locais
  let qAz =0;
  let pA =0;
  let mA =0;
  let gA =0;
/// atribuindo conteudo as variaveis 
  pA = document.getElementById("pBadA").value;
  mA = document.getElementById("mBadA").value;
  gA = document.getElementById("gBadA").value;
/* convertendo conteudo das variaveis em numeros inteiros para somar seus valores  */ 
  qAz = (parseInt(pA)+parseInt(mA)+parseInt(gA));
/// criando e estanciqando as variaveis locais
  let qRos =0;
  let pR =0;
  let mR =0;
  let gR =0;
/// atribuindo conteudo as variaveis 
  pR = document.getElementById("pBadR").value;
  mR = document.getElementById("mBadR").value;
  gR = document.getElementById("gBadR").value;
/* convertendo conteudo das variaveis em numeros inteiros para somar seus valores  */     
  qRos = (parseInt(pR)+parseInt(mR)+parseInt(gR));
/// criando e estanciqando as variaveis locais
  let qVer =0;
  let pV =0;
  let mV =0;
  let gV =0;
/// atribuindo conteudo as variaveis 
  pV = document.getElementById("pBadV").value;
  mV = document.getElementById("mBadV").value;
  gV = document.getElementById("gBadV").value;
/* convertendo conteudo das variaveis em numeros inteiros para somar seus valores  */  
  qVer = (parseInt(pV)+parseInt(mV)+parseInt(gV));
/// somando as variaveis
  quantBad = (qAz+qRos+qVer);
/// multiplicando as variaveis
  valorBad = (quantBad*230);
/// confirmando se algum item foi selecionado para adicionar
if (quantBad==0 && valorBad==0) {
    alert("Escolha um item primeiro !");
  } else {
    document.getElementById("quantBad").innerHTML = quantBad;
    document.getElementById("valorBad").innerHTML ="R$"+" "+valorBad+",00";
    document.getElementById("itensTotaisBad").innerHTML = "0"+quantBad+" "+"Look Bad Girl"; 
    document.getElementById("valorTotalBad").innerHTML = "Valor itens :"+" R$ "+""+valorBad+",00";
  }
} 
/// funcao simples para limpar campos
function limpaBad(){
  document.getElementById("quantBad").innerHTML =" ";
  document.getElementById("valorBad").innerHTML =" ";
  document.getElementById("itensTotaisBad").innerHTML =" ";
  document.getElementById("valorTotalBad").innerHTML =" ";
  document.getElementById("pBadA").value = 0;
  document.getElementById("mBadA").value = 0;
  document.getElementById("gBadA").value = 0;
  document.getElementById("pBadR").value = 0;
  document.getElementById("mBadR").value = 0;
  document.getElementById("gBadR").value = 0;
  document.getElementById("pBadV").value = 0;
  document.getElementById("mBadV").value = 0;
  document.getElementById("gBadV").value = 0;
}
///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/// funcao de logica de interacao com usuario 
function adcConj(){
/// criando e estanciando variaveis globais  
  quantConj = 0;
  valorConj = 0;
/// criando e estanciqando as variaveis locais
  let qAz =0;
  let pA =0;
  let mA =0;
  let gA =0;
/// atribuindo conteudo as variaveis
  pA = document.getElementById("pConjA").value;
  mA = document.getElementById("mConjA").value;
  gA = document.getElementById("gConjA").value;
/* convertendo conteudo das variaveis em numeros inteiros para somar seus valores  */ 
  qAz = (parseInt(pA)+parseInt(mA)+parseInt(gA));
/// criando e estanciqando as variaveis locais
  let qRos =0;
  let pR =0;
  let mR =0;
  let gR =0;
/// atribuindo conteudo as variaveis
  pR = document.getElementById("pConjR").value;
  mR = document.getElementById("mConjR").value;
  gR = document.getElementById("gConjR").value;
/* convertendo conteudo das variaveis em numeros inteiros para somar seus valores  */
  qRos = (parseInt(pR)+parseInt(mR)+parseInt(gR));
/// criando e estanciqando as variaveis locais
  let qVer =0;
  let pV =0;
  let mV =0;
  let gV =0;
/// atribuindo conteudo as variaveis
  pV = document.getElementById("pConjV").value;
  mV = document.getElementById("mConjV").value;
  gV = document.getElementById("gConjV").value;
/* convertendo conteudo das variaveis em numeros inteiros para somar seus valores  */ 
  qVer = (parseInt(pV)+parseInt(mV)+parseInt(gV));
/// somando valores das variaveis
  quantConj = (qAz+qRos+qVer);
// multiplicando valores das variaveis
  valorConj = (quantConj*300);
/// confirmando se algum item foi selecionado para adicionar
  if (quantConj==0 && valorConj==0) {
    alert("Escolha um item primeiro !");
  } else {
    document.getElementById("quantConj").innerHTML = quantConj;
    document.getElementById("valorConj").innerHTML ="R$"+" "+valorConj+",00";
    document.getElementById("itensTotaisConj").innerHTML = "0"+quantConj+" "+"Conjunto Malhação"; 
    document.getElementById("valorTotalConj").innerHTML = "Valor itens :"+" R$ "+""+valorConj+",00";
  }
} 
/// funcao simples para limpar campos
function limpaConj(){
  document.getElementById("quantConj").innerHTML =" ";
  document.getElementById("valorConj").innerHTML =" ";
  document.getElementById("itensTotaisConj").innerHTML =" ";
  document.getElementById("valorTotalConj").innerHTML =" ";
  document.getElementById("pConjA").value = 0;
  document.getElementById("mConjA").value = 0;
  document.getElementById("gConjA").value = 0;
  document.getElementById("pConjR").value = 0;
  document.getElementById("mConjR").value = 0;
  document.getElementById("gConjR").value = 0;
  document.getElementById("pConjV").value = 0;
  document.getElementById("mConjV").value = 0;
  document.getElementById("gConjV").value = 0;
}
///////////////////////////////////////////////////////////////////////////
//////////////// carrinho de compras////////////////////////////////////////
/// funcao simples apenas para somar valores das variaveis
function compraEfetuada(){
 /// criando e estanciando variaveis locais e globais
  alert("Para confirmar sua compra você precisa fazer login em nosso site!");
}

////////////////////////////////////
//////////////////////////////////
 function cancelaCompra(){
   document.getElementById("itensTotaisVestido").innerHTML =" ";
   document.getElementById("valorTotalVestido").innerHTML =" ";
   document.getElementById("itensTotaisBad").innerHTML =" ";
   document.getElementById("valorTotalBad").innerHTML =" ";
   document.getElementById("itensTotaisConj").innerHTML =" ";
   document.getElementById("valorTotalConj").innerHTML =" ";
 }
///////////final carrinho de compras////////////////////
function logar(){
  alert("Essa é apenas uma simulação, caso contrario você seria redirecionado para a pagina html cadastro e login !");
}
/////////////////////////////////////////////
/* funcao postar titulo do blog */
function postarTitulo(){
  //variavel tituloBlog recebe valor elemento de id="titulo"
  let titulBlog = document.getElementById("titulo").value;
  //elemento de id="titulo" recebe valor da variavel tituloBlog
  document.getElementById("tituloBlog").innerHTML = titulBlog;
  //esvazia o conteudo de id="tituloBlog"
  document.getElementById("titulo").value=" ";
}
/* final funcao postar titulo do blog */
/*====================================*/
/*==============================*/
/* funcao postar nome do autor */
function postarNome(){
  //variavel tituloBlog recebe valor elemento de id="titulo"
  let autor = document.getElementById("nomeAutor").value;
  //elemento de id="titulo" recebe valor da variavel tituloBlog
  document.getElementById("nome").innerHTML = autor;
  //esvazia o conteudo de id="tituloBlog"
  document.getElementById("nomeAutor").value=" ";
}
/* final funcao postar nome do autor */
/*====================================*/
/*==============================*/
/* funcao postar texto */
function postarTexto(){
  //variavel tituloBlog recebe valor elemento de id="titulo"
  let textoPostado = document.getElementById("texto").value;
  //elemento de id="titulo" recebe valor da variavel tituloBlog
  document.getElementById("post").innerHTML = textoPostado;
  //esvazia o conteudo de id="tituloBlog"
  document.getElementById("texto").value=" ";
}
/* final funcao postar texto */
/*====================================*/
/* funcao limpa texto postado  */
function limpaTexto(){
  document.getElementById("post").innerHTML="";
}
/*=============================*/
/* funcao postar imagem no blog */
/*=============================*/
/// funcao para atribuir valor ao campo src do objeto imgBlog
function postarImagem1(){
  document.getElementById("imgBlog").src ="bdois.jpg";
}
function postarImagem2(){
  document.getElementById("imgBlog").src ="ctres.jpg";
}
function postarImagem3(){
  document.getElementById("imgBlog").src ="aum.jpg";
}
function limpaCampo(){
  document.getElementById("imgBlog").src="";
}
/* final funcao postar imagem no blog */
/*====================================*/
/*funcoes muda cor produto hum  */ 
function corVestido(){
  //variavel local imgSrc recebe valor "../_img/vest-azul.jpg"
 let imgSrc = "vest-azul.jpg";
 //elemento de id="imgVestido" recebe valor da variavel imgSrc
 document.getElementById("imgVestido").src = imgSrc; 
}
function corVestido1(){
  //variavel local imgSrc recebe valor "../_img/vest-rosa.jpg"
 let imgSrc="vest-rosa.jpg";
 //elemento de id="imgVestido" recebe valor da variavel imgSrc
 document.getElementById("imgVestido").src = imgSrc; 
}
function corVestido2(){
  //variavel local imgSrc recebe valor "../_img/vest-verde.jpg"
 let imgSrc="vest-verde.jpg";
 //elemento de id="imgVestido" recebe valor da variavel imgSrc
 document.getElementById("imgVestido").src = imgSrc; 
}
/* final muda cor produto hum*/
/*===========================*/
/*=============================*/
/*funcoes muda cor produto dois*/  
function corBad(){
  //variavel local imgSrc recebe valor "../_img/vest-azul.jpg"
 let imgSrc= "cami-azul.jpg";
 //elemento de id="imgBad" recebe valor da variavel imgSrc
 document.getElementById("imgBad").src = imgSrc; 
}
function corBad1(){
  //variavel local imgSrc recebe valor "../_img/vest-rosa.jpg"
 let imgSrc="cami-rosa.jpg";
 //elemento de id="imgBad" recebe valor da variavel imgSrc
 document.getElementById("imgBad").src = imgSrc; 
}
function corBad2(){
  //variavel local imgSrc recebe valor "../_img/vest-verde.jpg"
 let imgSrc="cami-verde.jpg";
 //elemento de id="imgBad" recebe valor da variavel imgSrc
 document.getElementById("imgBad").src = imgSrc; 
}
/* final muda cor produto dois*/
/*===========================*/
/*=============================*/
/*funcoes muda cor produto tres*/  
function corConj(){
  //variavel local imgSrc recebe valor "../_img/vest-azul.jpg"
 let imgSrc = "conj-azul.jpg";
 //elemento de id="imgConj" recebe valor da variavel imgSrc
 document.getElementById("imgConj").src = imgSrc; 
}
function corConj1(){
  //variavel local imgSrc recebe valor "../_img/vest-rosa.jpg"
 let imgSrc="conj-rosa.jpg";
 //elemento de id="imgConj" recebe valor da variavel imgSrc
 document.getElementById("imgConj").src = imgSrc; 
}
function corConj2(){
  //variavel local imgSrc recebe valor "../_img/vest-verde.jpg"
 let imgSrc="conj-verde.jpg";
 //elemento de id="imgConj" recebe valor da variavel imgSrc
 document.getElementById("imgConj").src = imgSrc; 
}
/* final muda cor produto tres*/
/*===========================*/
/*===================================*/
/*  funcao  para aumentar fonte  */
function fonte(e){
  let elemento = $(".aumFonte");
  let fonte = elemento.css('font-size');
  if (e == 'a') {
    elemento.css("fontSize", parseInt(fonte) + 1);
  } else if('d'){
    elemento.css("fontSize", parseInt(fonte) - 1);
  }
  }
/*  final da funcao aumenta fonte */
/*==============================*/
/*=================================*/
function aviso(){
    alert('Este é apenas um exemplo , não esta linkado a nenhuma função .');
  } // simples alert
/*=============================*/
function aviso1(){
    alert('o Framework que eu usei nessa pagina foi: Bootstrap 4.3.1 .');
  } // simples alert
/*=============================*/
/*=============================*/

