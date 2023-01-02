## Práctica Backend con Node

#### Hecho por ahora:

<li>Creación de la app API</li>
<li>Añadida función de añadir anuncios: para ello hay que usar el post a través de postman de la siguiente manera:</li>
> {
>   "name": "nombre ejemplo",
>    "sell": true/false,
>    "price": número,
>    "photo": "algo.jpg",
>    "tags": [ "ejemplo tag", "ejemplo tag 2"]
> }

<li>Añadida función para consultar todos los anuncios. Entrar a *http://localhost:3000/V1/ads/*. Devolvería los anuncios de la siguiente manera:</li>
> [{"name":"taza","sell":true,"price":4.95,"photo":"taza.jpg","tags":["ceramica","beber","desayuno","cafe","charmander"]},{"name":"peluche","sell":true,"price":19.95,"photo":"peluche.jpg","tags":["achuchable","blandito","charmander"]},{"name":"reloj","sell":true,"price":14.95,"photo":"reloj.jpg","tags":["hora","despertador","lampara","charmander"]},{"name":"mochila","sell":true,"price":29.95,"photo":"mochila.jpg","tags":["bolsa","viaje","bolsillos","charmander"]}]

<li>Añadida función para consultar una lista de todos los tags. Entrar a *http://localhost:3000/V1/ads/tags*. Devolvería los tags de la siguiente manera:</li>
> ["ceramica","beber","desayuno","cafe","charmander","achuchable","blandito","hora","despertador","lampara","bolsa","viaje","bolsillos"]

<li>Añadida función para buscar en base a las propiedades de cada anuncio. Entrar a *http://localhost:3000/V1/ads/?propiedad=ejemplo*.</li>

<p>*!!!*Para que funcione es importante hacer npm install, dado que en los commits se han evitado algunas carpetas pesadas</p>

<p>** Para comprobar la base de datos utilizo MongoDB Compass</p>

#### Queda por hacer:

<li>Hacer un script de inicialización de la base de datos.</li>
<li>Redactar mejor como funciona la busqueda "?="</li>
<li>Revisar como añadir imagenes</li>
<li>Revisar la calidad de código</li>

