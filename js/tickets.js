//Deberán replicar la siguiente sección (es una sección que se debe agregar al integrador front-End) al presionar en el enlace “tickets”.

//Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”, deberá mostrar en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de tickets a comprar con el descuento correspondiente dependiendo la categoría seleccionada, existen 3 categorías, Estudiante, Trainee, Junior.

const resumen = document.getElementById('resumen');
const cantidades = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const total = document.getElementById('total');
const borrar = document.getElementById('borrar');


let cantidad = 0;
let categ ='Estudiante';
let valorTicket = 200;


categoria.addEventListener('change',(e) => {
    categ = e.target.value;
});


cantidades.addEventListener('change', (e) => {
    cantidad = parseInt(e.target.value);
    console.log(cantidad);
})


const totalAPagar = (categ, cantidad) => {

    if (categ === 'Estudiante')return(valorTicket*0.20)*cantidad;
    if (categ === 'Trainee')return(valorTicket*0.50)*cantidad;
    if (categ === 'Junior')return(valorTicket*0.85)*cantidad;
}

resumen.addEventListener('click', (e) => {
    e.preventDefault();
    total.innerHTML = `<p>Total a pagar: $ ${totalAPagar(categ, cantidad)}</p>`;

})

borrar.addEventListener('click', (e) => {
    categ = 'Estudiante';
    total.innerHTML = `<p>Total a pagar: $ 0</p>`;
})



