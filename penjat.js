// Captuar elementos del DOM
const contenidor = document.querySelector('.contenidor');
const letra = document.querySelectorAll('.fila .letra:not(.fallada)');
const contador = document.getElementById('contador');
const palabraSelect = "";
const palabraSecreta = ['perro', 'niño', 'tortuga', 'coche'];


// Precio de la pelicula seleccionada.
//let preuDelTicket = +peliculaSelect.value;

// Llenamos la interfície de usuario.
ompleUI();

/* FUNCIONES */
function eligePalabra(){
  palabraSelect = [Math.floor(Math.random()*palabraSecreta.length)]

  foreach 
}

function actualizaSeleccionLetra() {
  const letrasFalladas =
        document.querySelectorAll('.fila .letra.fallada');
        
        // const seientsIndex =
        //   [...seientsSeleccionats].map(function(seient) {
        //     return [...seients].indexOf(seient);
        //   });

  const letrasIndex =
      [...letrasFalladas].map((letra) => [...letras].indexOf(letra));

  localStorage.setItem('letrasFalladas', JSON.stringify(letrasIndex));

  const contadorLetrasFalladas = letrasFalladas.length;
  contador.innerText = contadorLetrasFalladas;

}

function ompleUI() {
  const letrasFalladas = JSON.parse(localStorage.getItem('letrasFalladas'));
  
  if(letrasFalladas !== null && letrasFalladas.length > 0) {
    letras.forEach((letra, index) => {
      if(LetraFallada.indexOf(index) > -1) {
        letra.classList.add('fallada');
      }
    });
  }

  

  

  const preuPeliculaSeleccionada = localStorage.getItem('preuPeliculaSeleccionada');

  if(preuPeliculaSeleccionada !== null) {
    preuDelTicket = +preuPeliculaSeleccionada;
  }
}

/* EVENTOS */

contenidor.addEventListener('click', (e) => {
  if(e.target.classList.contains('letra')
      && !e.target.classList.contains('fallada')) {
    e.target.classList.toggle('seleccionat');
    actualitzaSeleccioSeients();
  }
});

peliculaSelect.addEventListener('change', (e) => {
  preuDelTicket = +e.target.value;

  localStorage.setItem('indexPeliculaSeleccionada', e.target.selectedIndex);
  localStorage.setItem('preuPeliculaSeleccionada', e.target.value);

  actualitzaSeleccioSeients();
});

actualitzaSeleccioSeients();