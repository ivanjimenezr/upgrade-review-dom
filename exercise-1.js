//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let ulElement = document.createElement('ul');
let liElement = document.createElement('li');
document.body.appendChild(ulElement);
for (let index = 0; index < countries.length; index++) {
    liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.innerHTML = countries[index];

}
//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let elemRemove = document.querySelector('.fn-remove-me');
elemRemove.remove();


//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let divToFind = document.querySelector('div');
if (divToFind.hasAttribute('data-function') && divToFind.getAttribute('data-function')==='printHere') {
    let ulElement2 = document.createElement('ul');
    let liElement2 = document.createElement('li');
    divToFind.appendChild(ulElement2)

    for (value of cars){
        liElement2 = document.createElement('li');
        ulElement2.appendChild(liElement2);
        liElement2.innerHTML = value;
    }
} 

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const fotos = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
let divFotos = document.createElement('div');
let h4Fotos = document.createElement('H4')
let imgFotos = document.createElement('img')


for (let i = 1; i < fotos.length; i++ ){
    divFotos = document.createElement('div');
    h4Fotos = document.createElement('H4');
    imgFotos = document.createElement('img');
    
    document.body.appendChild(divFotos);
    divFotos.setAttribute('id','divFotos'+i);
    divFotos.appendChild(h4Fotos);
    h4Fotos.innerHTML = fotos[i]['title'];
    divFotos.appendChild(imgFotos);
    imgFotos.setAttribute('src',fotos[i]['imgUrl']);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.
let botonRemove4 = document.createElement('button');
let textBoton4 = document.createTextNode('Borrar elemento 4')

document.body.appendChild(botonRemove4).appendChild(textBoton4)
botonRemove4.id = 'botonRemoveDivFotos4';

function botonClick(event){
document.getElementById('divFotos4').remove()
document.getElementById('botonRemoveDivFotos4').remove()

}
document.getElementById('botonRemoveDivFotos4').addEventListener('click',botonClick);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
let botonRemove = [];
let textBoton = [];

for (index = 1; index <= 3; index++){
    console.log(index)
    botonRemove[index] = document.createElement('button');
    textBoton[index] = document.createTextNode('Borrar elemento '+index)
    divFotos = document.getElementById('divFotos'+index)
    divFotos.appendChild(botonRemove[index]).appendChild(textBoton[index])
    botonRemove[index].id = 'botonRemoveDivFotos'+index;
    
    //document.getElementById('botonRemoveDivFotos'+index).addEventListener('click',function(event){document.getElementById('divFotos'+index).remove()});
}
function nameFunction1(event){
    document.getElementById('divFotos1').remove()
}
document.getElementById('botonRemoveDivFotos1').addEventListener('click',nameFunction1);

function nameFunction2(event){
    document.getElementById('divFotos2').remove()
}
document.getElementById('botonRemoveDivFotos2').addEventListener('click',nameFunction2);

function nameFunction3(event){
    document.getElementById('divFotos3').remove()
}
document.getElementById('botonRemoveDivFotos3').addEventListener('click',nameFunction3);



