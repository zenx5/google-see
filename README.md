# google-see
Scraping



## input:
    - keywords: array of string
    - Example:
        ['geografia', 'pasatiempo', 'matematicas']

## output:
    - results: array of object
    - Example
        [
            {
                url: 'https://es.wikipedia.org/wiki/Qu%C3%ADmica',
                titles: ['Química', 'Etimología', 'Definición'],
                parrafes: [
                    'La química es la ciencia natural que estudia la composición, estructura y propiedades de la materia ya sea en forma de elementos, especies, compuestos, mezclas u otras sustancias, así como los cambios que estas experimentan durante las reacciones y su relación con la energía química.1​ Linus Pauling la definió como la ciencia que estudia las sustancias, su estructura (tipos y formas de acomodo de los átomos), sus propiedades y las reacciones que las transforman en otras sustancias en referencia con el tiempo.2​ La química, a través de una de sus ramas conocida como química supramolecular, se ocupa principalmente de las agrupaciones supratómicas, como son los gases, las moléculas, los cristales y los metales, estudiando su composición, propiedades estadísticas, transformaciones y reacciones, si bien la química general también incluye la comprensión de las propiedades e interacciones de la materia a escala atómica.',
                    'La química es llamada a menudo «ciencia central» por su papel de conexión en las otras ciencias naturales, relacionándose con la física por medio de la fisicoquímica, la biología mediante la bioquímica, la astronomía a través de la astroquímica, la geología por vía de la geoquímica, entre otras. La mayoría de los procesos químicos se pueden estudiar directamente en el laboratorio, usando una serie de técnicas a menudo bien establecidas, tanto de manipulación de materiales como de comprensión de los procesos subyacentes. Una aproximación alternativa es la proporcionada por las técnicas de modelado molecular, que extraen conclusiones de modelos computacionales.'
                ],
                keyword:'Quimica'
            },
            ...
        ]