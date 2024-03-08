//const a =1;

//function imprimeVariavel(){
    //const b = 2;
    //console.log("variável a:" , a);
    //console.log("variável b:" , b);
//}

//imprimeVariavel

    //console.log('variável a' , a)
    //console.log('variável b' , b)



    //function calculaArea(altura, largura) {
        //const area = altura * largura
        //return area
    //}

    //Atribui retorno à uma variável
    //const arecalculada = calculaArea(2, 3)

    // imprime retorno no console
    //console.log(calculaArea(2, 3))

    //exercicio 3

    //function somaDoisNumeros(numa, numb){
        //return numa + numb;
    //}
    //var resultado = somaDoisNumeros(3, 5);
    //console.log(resultado);1    

    //exercicio 4

    //function recebeArray(arrayDeNumeros = []){
        //return[(arrayDeNumeros.length)/2, (arrayDeNumeros
        //[0])/2];
        
    //}

     //console.log(recebeArray([1,2,3,4,5,6,7,8,9]));

     
     //exercicio 4

     //refaça o exercício 3 com a sintaxe de Arrow Function

     //let somaDoisNumeros = function (numa, numb){
        //return numa + numb;
     //}
     //var resultado = somaDoisNumeros(3, 5);
     //console.log(resultado);

    

     //aula 7
     
      //const professor = {
       //nome: 'gabriel'  ,
       //idade: 27 ,
       //tarefas:['Dar aula' , 'Responder dúvidas'],
       //contarPiada: function() {
        //console.log('é pa vê ou pa comê?' )
       //}
     //}
        //console.log(professor.nome)
        //console.log(professor ["idade"])
           //professor.nome = "gabriel";
           //console.log(professor.nome)

     //exercicio 1  

    
     //var filme = {
        //nome: "rato" ,
        //direcao: "luiz" ,
        //ano:2000 ,
        //elenco: ["walter" , "joao" ,"davi" , "gabriel"],
        //visto: true ,

     //}

     //console.log(filme.nome);
     //console.log(filme.direcao);
     //console.log(filme["ano"]);
     //console.log(filme["elenco"]);
     //console.log(filme.visto);
     

     //exercicio 2

     //var pessoa ={
        //nome:"gabriel",
        //idade:19,
        //ganeroMusical:"eletronico",
    //}
    
      //console.log(`o nome da pessoa é ${pessoa.nome},ela tem ${pessoa,idade}, anos e gosta de ${pessoa,generoMusical}`)


      //const donoDoPet = {
        //nome: "vitor hugo" ,
        //pet: {
        //nomeDoPet: "wanda" ,
        //raca: "vira-lata" ,
        //idaede: 1    
        //}
        //}

        //console.log(donoDoPet.pet.nomeDoPet)

        //const curso ={
            //nome: "Noturno Frontend" ,
            //linguagens: ["JS" , "CSS" , "HTML"]
        //}

        //console.log(curso.linguagens[0])

        //const professores = [
            //{nome: "Andrei", modulo: 1},
            //{nome: "Vitor", modulo: 2},
            //{nome: "Mina", modulo: 3}
            //]
            
            //console.log(professores[1].nome)

            //const curso= {
                //nome: "frontend" ,
                //linguagens: ["JS" ,"CSS" , "HTML"]
            //}

            //curso.numeroEstudante = 50
            //curso['numeroEstudantes'] = 50
            
  //var filme = {
  //nome: "rato" ,
  //direcao: "luiz" , 
  //ano:2000 ,
  //elenco: ["walter" , "joao" ,"davi" , "gabriel"],
  //visto: true ,
        
  //}
        
 //filme.personagens = ["personagem 1" , "personagem 2" , "personagem 3" , "personagem 4"];
             
 //console.log(filme.elenco[0] +"-" + filme.personagens[0])
 //console.log(filme.elenco[1] +"-" + filme.personagens[1])
 //console.log(filme.elenco[2] +"-" + filme.personagens[2])
 //console.log(filme.elenco[3] +"-" + filme.personagens[3])
        
 //filme.elenco[0] = "xuxa";
 //console.log(filme.elenco[0]);
 //console.log(filme);       
 
 
 //const usuario = {
    //nome: 'prof' ,
    //idade: 25,
    //email: 'prof@senacrs.com.br' ,
    //cidade: 'são paulo'
 //}

 //const listaDeNomes = ["Mika","Paula","Vitor"]

//const copiaListaDeNomes = [...listaDeNomes]

//console.log(copiaListaDeNomes) ["Mika","Paula","Vitor"]
/*
const pessoa = {
    nome: 'prof' ,
    idade: 25,
    email: 'prof@senacrs.com.br' ,
    cidade: 'são paulo'
 }

function exercicio4(objetoPessoa, arrayComida, 
    objetoMelhorAmigo){
    var novoObjeto = {...objetoPessoa, 
    comidasPreferidas: arrayComida, melhorAmigo:
    objetoMelhorAmigo};
console.log(`O nome da pessoa é ${novoObjeto.nome}
e suas comidas preferidas são ${novoObjeto.
comidasPreferidas[0]}, ${novoObjeto.
comidasPreferidas[1]}, ${novoObjeto. 
comidasPreferidas[2]}. Seu melhor amigo se chama 
${novoObjeto.melhorAmigo.nome} e tem ${novoObjeto.
melhorAmigo.idade} anos.`);
}

exercicio4(pessoa, ["arroz", "feijao", "carne"], {nome:
"Matheus" , idade:17});


let condicao1 = true;

if (condicao1){
    //como o valor da consição é true,
    //o codigo desse bloco é executado
    console.log('Entrei no if 1!');
}


let condicao2 = false;

if (condicao2){
    //como o valor da consição é false,
    //o codigo desse bloco não é executado
    console.log('Entrei no if 1!');
}

    //
function comparaDoisNumeros (num, num2){
    if (num === num2)
    {console.log("sucesso")}
}
    comparaDoisNumeros(prompt("digite num 1"), prompt
    ("digite num 2"))

    //
function ex6(nome, idade){
    if (idade >= 18){
        return `${nome}, voce pode girigir`;
    }
}

console.log(ex6(prompt("digite seu nome"),
prompt("digite sua idade")));

let condicao = false

if (condicao){
    console.log('Entrei no if!')
} else{
    //Como o valor da condição é false,
    //o código do bloco else será excutado
    console.log('Entrei no else!')
}

    //

function comparaDoisNumeros (num, num2){
    if (num === num2)
    {console.log("sucesso")}
else{ return(num !== num2)}

    comparaDoisNumeros(prompt("digite num 1"), prompt
    ("digite num 2"))

}
     //
    
let condicao1 = false
let condicao2 = true

if (condicao1){
    console.log('Entrei no if 1!')
} else {
    //como o valor da condicao1 é false,
    //o código do else será executado
    if(condicao2){
        //como o valor da condicao2 é true,
        //executamos esse código!
        console.log('Entrei no if 2!')
    }
}
*/
/*
function comparaDoisNumeros (num, num2){
    if (num === num2)
    {console.log("sucesso")}
    else{ return(num !== num2)}
    if (num < num2)
    {console.log("sucesso")}


    comparaDoisNumeros(prompt("digite num 1"), prompt
    ("digite num 2"))

}
*/
/*
function comparaDoisNumeros (num, num2){
    if (num > num2){
        return `o primeiro número (${num1}) é maior que o
        segundo número (${num2}).`;
    }   else if (num1 < num2) {
        return `o primeiro numero (${num1}) é menor que o
        segundo número (${num2}).`
    }   else{

    }
    }
*/
/*
let paisDeOrigem
if (paisDeOrigem === 'Brasil'){
    console.log('brasileiro')
} else if (paisDeOrigem === 'EUA'){
    console.log('norte americano')
} else if (paisDeOrigem === 'Inglatera'){
    console.log('inglês')
} else if (paisDeOrigem === 'França'){
    console.log('francês')
} else if (paisDeOrigem ==='Italia'){
    console.log('italiano')
} else if (paisDeOrigem === 'Canadá'){
    console.log('canadense')
}else {
    console.log('nacionalidade não encontrada')
}
*/
/*
let paisDeOrigem
switch (paisDeOrigem){
    case 'Brasil':
        console.log('brasileiro')
        break
    case 'EUA':
        console.log('norte americano')
        break
    case 'Inglaterra':
        console.log('inglês')
        break
    default:
        console.log('nacionalidade não encontrada')
        break        
}
*/
/*
let Pokémon = prompt("escolha seu pokémon")
switch (Pokémon){
    case 'Bulbasauro':
        console.log('Planta e Veneno')
        break
    case 'Charmander':
        console.log('Fogo')
        break
    case 'Squirtle':
        console.log('Água')
        break
    default:
        console.log('Pokémon não encontrado')
        break
}
*/
 /*
let condicao1 = true
let condicao2 = false

if (condicao1 && condicao2){
    //Entra aqui se ambas forem true
}

if (!condicao1){
    //Entra aqui se condicao for false
}
*/

/*
let faculdede = prompt ("você já concluído o ensino médio")
prompt("qual a sua idade")
prompt("você está cursando outra faculdade")
*/
/*
function podeEntrarNaFaculdade(ensinoMedio, idade, 
faculdade){
    if(idade >= 18){
        if(ensinoMedio == "sim"){
            if(faculdade !== "sim"){
                return("voce pode entrar na faculdade")
            }
        }
 
    }
    else{return "voce NAO pode entrar nafaculdade"}
}
console.log(
 podeEntrarNaFaculdade(
    prompt("voce concluiu o ensino medio"),
    Number(prompt("qual a sua idade")),
    prompt("voce ja esta cursando alguma faculdade"),
 )
)
*/



/*

function calcularArea(base, altura) {
    return base * altura;
}
function calcularArea(valores = []) {
    valores[0] = Number(valores[0]);
    valores[1] = Number(valores[1]);

    var areaCalculada = calculaArea(valores[0],valores[1])
    var areaTotal = calcularArea([areaCalculada,areaCalculada,areaCalculada,
        areaCalculada]);

        return areaTotal;
    
}

function pegaValores() {
    return calculaValores([prompt("digite a base"), prompt("Digite a autura")]);
}

console.log(pegaValores());
*/







