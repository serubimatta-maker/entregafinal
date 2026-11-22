# entrega final / Radiohead Álbum In Rainbows

## Mi idea principal consiste en crear una página web inspirada en la estética del álbum In Rainbows de Radiohead, con la canción Weird Fishes/Arpeggi de fondo. La idea consiste en que alrededor de la página haya diferentes peces con estética neón que, al tocarlos, te lleven directamente a la letra de la canción e informacion.

### paginas sobre las canciones

#### Fondos y musica sacados de youtube
El fondo va a consistir en un video stock sacado de YouTube el cual va a ser editado desde adobe after effects poniendolo un efecto de coloramo para que adquiera un efecto neon, el cual se exportará al formato mp4. En ese momento se pondrá en assets para ponerlo en un html como un video normal y, desde css, ajustarlo para que quede como un fondo. La música de fondo se logrará descargando la canción en mp3 y poniéndola dentro del html para que se reproduzca instantáneamente.

#### Texto
Uno de los problemas que se presento con el texto fue que este no se mostraba en la pantalla debido a que el video (fondo) 

### Los peces:
El pez se saco un video de youtube que de misma manera que el fondo fue editado con after effects poniendole un efecto de coloramo, con el video terminado este se paso a un formato gif, se aprego un hypervinculo a cada gif para que lleve a las paginas de las canciones, tambien con ayuda de inteligencia artificial se logro que arriba del gif cuando el usuario ponga su mouse en el pez.

#### peces transparentes

#### Movimiento peces
Los peces al ser gifs se les ponen en un 

#### El sistema del mouse
Cada gif contiene un atributo este es ''title'', en JavaScript las imagenes que tienen title buscan el mouse y crea un elemento el cual crea el nombre del texto. En estilo.css coloca el texto encima del pez y cuando mouse se quita del gif este oculta el texto. Esta funcion se le conoece como tooltip.

#### Fondo de los peces girando
El fondo fue creado desde blender a partir del video editado con el efecto coloramo, 



##### Loop del audio

- En las 5 paginas webs el audio empieza buscando el boton de audio dentro de javascript por medio de las ID.
- El atributo loop es quien logra que el audio se reproduzca en loop, despues el navegador detecta con un codigo de javascript si el audio ya repitio, para que este se reinicie.
- A partir de lo anterior la propiedad (backgroundAudio) verifica que el audio se repitio correctamente para empezar de nevo.
- Para que la interfaz de la pagina sea limpia, el boton que permita al audio continuar es ocultado a traves de un codigo audioControl.hidden = true;
- (Para el siguiente problema si le pedi ayuda a inteligencia artificial debido a que mis conocimientos de programacion no me permitian resolverlo), un problema que tienen muchos navegadores es que el audio no puede empezar a menos de que el usuario haya interectuado con la pagina, por esta razon en app.js se creo una funcion en la linea numero 22 el cual permitia que por un window.removeEventListener eliminara los detectores de click y teclado.



### Referencias:

#### Videos originales:
https://www.youtube.com/watch?v=YKPIOvShdU8
https://www.youtube.com/watch?v=f1AHqA1g7m8
https://www.youtube.com/watch?v=tmeRYM5dIC8
https://www.youtube.com/watch?v=X7XGpZj_6Ug

#### Librerias:

https://cssbuttoncreator.com/css-buttons/neon/


