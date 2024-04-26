import {CELULARES, TELEVISORES, LAVARROPAS} from './endpoints.js'

const celulares = async ()  => { 
    let response = await axios.get(CELULARES)
    response.data.map(cel => (
        document.getElementById("cardsContainer").innerHTML += `

<div class="card " style="width: 18rem">
        <div class="cuotasdiv">
          <p class="cuotas">6 cuotas sin interés</p>
        </div>
        <img
          src=${cel.imagen}
          class="card-img-top" alt="..." />
        <div class="card-body">
          <h4 class="card-title">$${cel.precio}</h4>

          <div class="cuotasdiv">
            <p class="cuotas">!Envio Gratis!</p>
          </div>
          <h5 class="card-title   ">${cel.nombre}</h5>
          <p class="card-text">${cel.descripcion}</p>
        </div>
      </div>

`

    ))
}

celulares();

const televisores = async ()  => { 
    let response = await axios.get(TELEVISORES)
    response.data.map(tel => (
        document.getElementById("cardsContainer").innerHTML += `

<div class="card " style="width: 18rem">
        <div class="cuotasdiv">
          <p class="cuotas">6 cuotas sin interés</p>
        </div>
        <img
          src=${tel.imagen}
          class="card-img-top" alt="..." />
        <div class="card-body">
          <h4 class="card-title">$${tel.precio}</h4>

          <div class="cuotasdiv">
            <p class="cuotas">!Envio Gratis!</p>
          </div>
          <h5 class="card-title   ">${tel.nombre}</h5>
          <p class="card-text">${tel.descripcion}</p>
        </div>
      </div>

`

    ))
}

televisores();

const lavarropas = async ()  => { 
    let response = await axios.get(LAVARROPAS)
    response.data.map(lav => (
        document.getElementById("cardsContainer").innerHTML += `

<div class="card " style="width: 18rem">
        <div class="cuotasdiv">
          <p class="cuotas">6 cuotas sin interés</p>
        </div>
        <img
          src=${lav.imagen}
          class="card-img-top" alt="..." />
        <div class="card-body">
          <h4 class="card-title">$${lav.precio}</h4>

          <div class="cuotasdiv">
            <p class="cuotas">!Envio Gratis!</p>
          </div>
          <h5 class="card-title   ">${lav.nombre}</h5>
          <p class="card-text">${lav.descripcion}</p>
        </div>
      </div>

`

    ))
}

lavarropas();





