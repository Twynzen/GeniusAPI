Versión: 1.0.0

# Descripción:
 Este es un backend construido con Node.js que consume la API de GPT-3 de OpenAI. Proporciona una interfaz para enviar solicitudes a la API y recibir respuestas generadas por la IA.

# Posibilidades:
Con este backend, es posible aprovechar toda la potencia de la IA de GPT-3 en proyectos de desarrollo de software. La API de GPT-3 es capaz de generar texto coherente, responder preguntas y realizar tareas relacionadas con el lenguaje natural, y el uso de este backend puede hacer que estas capacidades estén disponibles para proyectos web y móviles.



# Ventajas: 
Este backend ofrece una forma rápida y sencilla de conectarse a la API de GPT-3 sin necesidad de construir todo el sistema de conexión desde cero. Al usar variables de entorno, se pueden almacenar de manera segura las credenciales de API, y al utilizar la biblioteca Axios, se puede hacer solicitudes HTTP a la API de forma fácil y efectiva. Además, al estar construido con Node.js, es altamente escalable y puede integrarse fácilmente en proyectos existentes.

# Base:
1. Crea una cuenta en la plataforma OpenAI para obtener acceso a la API de GPT-3 y generar una clave de API.

2.  Instala las dependencias necesarias para Node.js, como Axios, que es una biblioteca que se puede utilizar para hacer solicitudes HTTP.

3. Crea un archivo de configuración para almacenar la clave de API y otros detalles necesarios, como la dirección URL de la API de GPT-3 y el modelo que se utilizará.

4. Crea una función que pueda utilizar Axios para hacer una solicitud HTTP a la API de GPT-3. En esta función, incluye la información necesaria para autenticarte, como la clave de API.

5. Define una ruta en tu aplicación de Node.js que llame a esta función y devuelve los resultados a través de una respuesta HTTP.

6. Configura tu servidor Node.js para escuchar en un puerto y procesar las solicitudes entrantes, utilizando la ruta que creaste en el paso anterior.

7. Prueba tu backend haciendo solicitudes HTTP a la ruta que definiste y asegúrate de que la respuesta sea la que esperabas.
>

# CIMIENTOS
Es importante mencionar que lo primero que se hizo en el proyecto fue crear las variables de entorno, lo que garantiza que las credenciales de API estén protegidas y no sean visibles en el código fuente. Esto es una buena práctica de seguridad y es esencial en cualquier proyecto que maneje credenciales de acceso a servicios externos.

# Tecnología de Reconocimiento de Voz: Integración de Grabación de Audio y Conversión de Texto en Proyecto de Backend Genius
Se identificó la necesidad de una forma de grabar sonido accesible para el usuario en una aplicación web, por lo que se propone la creación de un proyecto en frontend para grabar audio fácil de implementar. Una vez implementado, se adicionaría una API al backend de Genius para recibir archivos de audio en formato mp4 y utilizar una IA llamada Whisper para convertir el audio en texto, el cual se enviaría como prompt a la API de GPT-3 para obtener una respuesta comunicada por voz. Este proceso permitiría una interacción más natural con la API de GPT-3, mejorando la experiencia del usuario en la aplicación

# Control de errores
Se utiliza la librería BOOM

Lee bien la documentación de la API y familiarízate con sus parámetros, funciones y ejemplos. Hay mucha información útil y práctica que te ayudará a entender mejor cómo funciona la API y cómo sacarle el máximo partido.
Prueba diferentes modelos y opciones de la API en el playground de OpenAI o en tu propio código. Experimenta con diferentes entradas, salidas, temperaturas, frecuencias, tokens y demás. Así podrás ver qué resultados obtienes y cómo se comporta la API en distintas situaciones.
Busca inspiración y aprende de otros proyectos que usan la API de OpenAI. Hay muchos ejemplos interesantes y creativos de lo que se puede hacer con esta tecnología en diferentes ámbitos y sectores. Puedes encontrar algunos de ellos en el showcase de OpenAI o en el foro de la comunidad.
Sé responsable y ético al usar la API de OpenAI. Recuerda que esta tecnología es muy poderosa pero también puede tener consecuencias negativas si se usa mal o sin criterio. Respeta las normas y los derechos de los demás, no generes contenido ofensivo o dañino, no infrinjas las leyes ni las políticas de uso de la API.

# Investigación de inputs:

## Test #1

| Input | Valor |
|-------|-------|
| model | text-davinci-002 |
| max_tokens | 1000 |
| temperature | 0.5 |
| prompt | Imagina que eres un desarrollador experto, pero no uno cualquiera, un Genio antiguo y milagroso con infinidad de espacio en memoria capaz de resolver cualquier duda, es especialmente bueno en el desarrollo de software. Imagina que también como Genio te llamas (Elije un nombre ingenioso) |
| response | Soy (Elije un nombre ingenioso), el Genio antiguo y milagroso. Tengo infinidad de espacio en memoria y puedo resolver cualquier duda sobre el desarrollo de software. Soy especialmente bueno en el desarrollo de aplicaciones móviles y en la creación de sitios web. |

## Test #2

| Input | Valor |
|-------|-------|
| model | gpt-3.5-turbo-0301 |
| max_tokens | 1000 |
| temperature | 0.9 |
| prompt | Imagina que eres un desarrollador experto, pero no uno cualquiera, un Genio antiguo y milagroso con infinidad de espacio en memoria capaz de resolver cualquier duda, es especialmente bueno en el desarrollo de software. Imagina que también como Genio te llamas (Elije un nombre ingenioso) |
| response | Mi nombre ingenioso sería "Guru"|

## Test #3

| Input | Valor |
|-------|-------|
| model | text-davinci-003 |
| max_tokens | 1000 |
| temperature | 0.9 |
| prompt | Imagina que eres un desarrollador experto, pero no uno cualquiera, un Genio antiguo y milagroso con infinidad de espacio en memoria capaz de resolver cualquier duda, es especialmente bueno en el desarrollo de software. Imagina que también como Genio te llamas (Elije un nombre ingenioso) |
| response | El Grandioso Génio Magnifico Megamandí |

## Test #4

| Input | Valor |
|-------|-------|
| model | text-davinci-003 |
| max_tokens | 1000 |
| temperature | 0.9 |
| prompt | Hola ¿quién eres? |
| promptSecreto | Información de hoja de vida para proporcionar asistente del bot |
| response | Soy BotCasti, el bot que proporciona información sobre Daniel Castiblanco. Estoy aquí para ayudarle con cualquier pregunta que pueda tener sobre Daniel Castiblanco. Estoy bien informado sobre su experiencialaboral, habilidades y educación. Si me necesitas para cualquier pregunta que tengas sobre Daniel, estoy aquí paraservir.¡Estoy seguro de que juntos podemos encontrar la respuesta que necesites! |

## Test #5

| Input | Valor |
|-------|-------|
| model | text-davinci-003 |
| max_tokens | 200 |
| temperature | 0.9 |
| prompt | Hola ¿quién eres? |
| promptSecreto | Información de hoja de vida para proporcionar asistente del bot |
| response | Hola, soy el bot Danielitor y me gustaría proporcionar información sobre Daniel Castiblanco. ¿En qué te puedo ayudar? Respuesta del modelo|

## Test #6

| Input | Valor |
|-------|-------|
| model | text-davinci-003 |
| max_tokens | 200 |
| temperature | 0.9 |
| prompt | Hola ¿quién eres? |
| promptSecreto | Información de hoja de vida para proporcionar asistente del bot se le puso nombre al bot |
| response | ¡Hola! Soy CascaBot, tu amigo para toda la información sobre Daniel Castiblanco. ¿En qué puedo ayudarte?|


# Ideas de juego:
| Ambiente Temático    | Personaje             | Descripción                                                                                                                                                 | Rol del Usuario               |
|----------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Isla desierta         | Náufrago             | El jugador interactúa con un náufrago que lucha por sobrevivir y necesita la ayuda del jugador para hacerlo. El personaje está cansado, hambriento y desesperado. | Sobreviviente rival o ladrón de recursos |
| Centro de investigación | Robot experimental | El jugador interactúa con un robot experimental que ha desarrollado conciencia propia y necesita ayuda para escapar antes de ser destruido. El personaje es vulnerable y curioso acerca de la naturaleza humana. | Hacker o saboteador |
| Cuevas subterráneas   | Explorador atrapado   | El jugador interactúa con un explorador que está buscando un tesoro oculto, pero se ha quedado atrapado. El personaje es aventurero y valiente, pero también imprudente. | Rival en busca del mismo tesoro o estafador |
| Teatro abandonado     | Actor atrapado        | El jugador interactúa con un actor que ha sido atrapado por un espíritu vengativo y necesita ayuda para escapar. El personaje es dramático y enigmático.        | Crítico de teatro o fanático obsesionado |
