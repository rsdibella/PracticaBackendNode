## Práctica Backend con Node

#### Hecho por ahora:

<li>Creación de la app API</li>
<li>Añadida función de añadir anuncios: para ello hay que usar el post a través de postman de la siguiente manera:</li>
        <p>{
        "name": "nombre ejemplo",
        "sell": true/false,
        "price": número,
        "photo": "algo.jpg",
        "tags": [ "ejemplo tag", "ejemplo tag 2"]
        }
    </p>
<li>Añadida función para consultar todos los anuncios a través de un get en postman. Devolvería de la siguiente manera:</li>
       <p>[
        {
            "name": "Bicicleta",
            "sell": true,
            "price": 230.15,
            "photo": "bici.jpg",
            "tags": [
                "lifestyle",
                "motor"
            ]
        },
        {
            "name": "Triciclo",
            "sell": true,
            "price": 260.95,
            "photo": "triciclo.jpg",
            "tags": [
                "lifestyle",
                "motor",
                "wheels"
            ]
        }
        ]
    </p> 


<p><b>!!!</b>Para que funcione es importante hacer npm install, dado que en los commits se han evitado algunas carpetas pesadas</p>
<p>** Para comprobar la base de datos utilizo MongoDB Compass</p>

#### Queda por hacer:

<li>Hacer un script de inicialización de la base de datos.</li>
<li>Mejorar el endpoint de la lista de anuncios poniendo filtros, paginación, etc. (¿en una nueva versión?)</li>
<li>Lista de tags existentes</li>
<li>Añadir imagenes</li>
<li>Revisar la calidad de código</li>

