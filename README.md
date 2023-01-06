# Práctica Backend con Node

## Instalación

#### Requisitos previos:
<li> Instalar <a href="https://nodejs.org/en/download/">Node</a> </li>
<li> Instalar <a href="https://www.mongodb.com/try">MongoDB</a> </li>

#### Instalación e inicio:

<ul>1. Descargar o clonar el repositorio </ul>
<ul>2. Acceder al repositorio a través del terminal </ul>
        
        cd PracticaBackendNode
        cd nodepop

<ul>3. Instalar </ul>
        
        npm install
        
        
<ul>4. Preparar el entorno de la base de datos </ul>
        
        node ./init-db.js

<ul>5. Poner la API en funcionamiento </ul>
        
        npm start
        
        
## Operaciones:

#### POST de Anuncios

<li> Para ello se ha usado el programa  <a href="https://www.postman.com/downloads/"> postman</a> </li>
<li> Utilizandolo hay que introducir la url de la API:  <em>localhost:3000/V1/ads</em> </li>
<li> Elegir las opciones <b>POST</b>, <b>raw</b> y <b>JSON</b>. Luego introducir los datos del anuncio de la siguente manera: </li>

        
        { 
          "name": "nombre ejemplo",
          "sell": true/false,
          "price": número,
          "photo": "algo.jpg",
          "tags": [ "ejemplo tag", "ejemplo tag 2"]
         }

<li> Al añadir anuncios hay que tener en cuenta las siguientes reglas, si no será considerado un modelo de anuncio no válido:
<ul>1. Debe tener un nombre</ul>
<ul>2. La venda debe ser un booleano</ul>
<ul>3. El precio no puede ser negativo</ul>
<ul>4. La foto no es obligatoria, puede dejarse el campo en blanco</ul>
<ul>5. Los tags deben estar limitados a los existentes en la siguiente lista: ["work", "lifestyle", "motor", "mobile"]</ul>
</li>

#### Consultarc(GET) anuncios:

<li> Para consultar todos los anuncios sin ningun tipo de filtro, acceder a <em>localhost:3000/V1/ads</em></li>
<li> Se pueden filtrar los anuncios, partiendo de la dirección anterior, de la siguiente manera:
<ul>1. Por su nombre (o el principio del nombre). Se tiene en cuenta las tilde. Por ejemplo:</ul>
        
        /?name=bici
<ul>2. Por su estado de venta (true es que se vende, false que se compra) Por ejemplo:</ul>
        
        /?sell=true
<ul>3. Por su precio. Por ejemplo:</ul>
        
        /?price=200         //Busca el precio concreto
        /?price=-200        //Busca valores inferiores al precio
        /?price=200-        //Busca valores superiores al precio
        /?price=200-1000    //Busca valores entre ambos precios
</li>
<ul>3. Por tags. Si se añaden varios tags se buscarán los productos que tengan uno <strong>o</strong> el otro. Por ejemplo:</ul>
        
        /?tags=mobile;work
<li> Para consultar la lista de los tags presentes en los anuncios acceder a <em>localhost:3000/V1/ads/tags</em></li>

<li> Para visualizar imagenes acceder a <em>localhost:3000/V1/ads/images/anuncios/nombreimagen.jpg</em>. Sólo hay disponibles las imagenes de los anuncios presentes en la base de datos inicial</li>

