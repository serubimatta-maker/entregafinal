# entrega final / Radiohead Álbum In Rainbows

## Mi idea principal consiste en crear una página web inspirada en la estética del álbum In Rainbows de Radiohead, con la canción Weird Fishes/Arpeggi de fondo. La idea consiste en que alrededor de la página haya diferentes peces con estética neón que, al tocarlos, te lleven directamente a la letra de la canción e informacion.

### paginas sobre las canciones

#### Fondos y musica sacados de youtube
El fondo va a consistir en un video stock sacado de YouTube el cual va a ser editado desde adobe after effects poniendolo un efecto de coloramo para que adquiera un efecto neon, el cual se exportará al formato mp4. En ese momento se pondrá en assets para ponerlo en un html como un video normal y, desde css, ajustarlo para que quede como un fondo. La música de fondo se logrará descargando la canción en mp3 y poniéndola dentro del html para que se reproduzca instantáneamente.

#### Texto
Uno de los problemas que se presento con el texto fue que este no se mostraba en la pantalla debido a que el video (fondo), esto se logro posicionando el video desde el codigo de z-index en 0 y los parrafos en 3 y poniendoles un color blanco para que de esta manera se logren diferenciar del fondo. 

### Los peces:
El pez se saco un video de youtube que de misma manera que el fondo fue editado con after effects poniendole un efecto de coloramo, con el video terminado este se paso a un formato gif, se aprego un hypervinculo a cada gif para que lleve a las paginas de las canciones, tambien con ayuda de inteligencia artificial se logro que arriba del gif cuando el usuario ponga su mouse en el pez.

#### peces transparentes
Para mi esta fue de las partes mas dificiles y se probaron multiples teorias antes de llegar a la final. Al terminar de editar el video intente ponerlo directamente dentro de la pagina web el problema de este fue que no quedaba transparente 

#### Movimiento peces
Los peces al ser gifs se les ponen en una ''class'' y img que permiten ponerlos en css, desde css se crea un codigo de @keyframes nadar-por-la-pantalla que se lo ponen al clase del video con un infinite y linear el cual permite que su movimiento sea constante.

#### El sistema del mouse
Cada gif contiene un atributo este es ''title'', en JavaScript las imagenes que tienen title buscan el mouse y crea un elemento el cual crea el nombre del texto. En estilo.css coloca el texto encima del pez y cuando mouse se quita del gif este oculta el texto. Esta funcion se le conoece como tooltip.

### Loop del audio
El <audio> tiene el atributo <loop> el cual hace que la cancion vuelva inicar automativamente cuando termine. Despues javascript inteta reproducirla al carga la pagina debido a que algunos navegadores bloquean el audio automatico, por esta razon tambien intenta activarlo cuando el usuario hace ''click'' con la pagina, en una situacion donde la pagina no logre reproducir el audios se mostrara un boton para activarlo. 


### Referencias:

#### Videos originales sin colorama:
https://www.youtube.com/watch?v=YKPIOvShdU8
https://www.youtube.com/watch?v=f1AHqA1g7m8
https://www.youtube.com/watch?v=tmeRYM5dIC8
https://www.youtube.com/watch?v=X7XGpZj_6Ug
https://www.youtube.com/watch?v=iDfk-hI4kUc

Datos sobre el album In Rainbows:
https://es.wikipedia.org/wiki/In_Rainbows

Significado y letras de las canciones:
https://www.musica.com

#### Librerias:

https://cssbuttoncreator.com/css-buttons/neon/
https://welearncode.com/rainbow-text/


