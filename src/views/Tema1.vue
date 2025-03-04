<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.fnd1
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades del cultivo de aguacate
      
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-1(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El cultivo de aguacate (<em>Persea americana</em>) ha ganado popularidad a nivel mundial debido a su demanda creciente y sus múltiples beneficios nutricionales. Se desarrolla mejor en climas cálidos y templados, con temperaturas entre 15 y 30 °C, y prefiere suelos bien drenados, ricos en materia orgánica, con un pH entre 6 y 6.5. Existen varias variedades, siendo las más conocidas el Hass, Fuerte y Bacon, cada una con características específicas en sabor, textura y época de cosecha.

    Separador

    .row.justify-content-start.align-items-center.mb-4(data-aos="zoom-in")
      .col-xl-6.col-lg-7.col-md-10
        .row.pe-lg-3.mb-2.fnd-2.align-items-center
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-2.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Aspectos generales del aguacate

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10  
        .row.pe-lg-3.mb-4.align-items-center(data-aos="zoom-in")
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema1/img-2.png", alt="Icono")
          .col.px-0
            h4.mb-0 Origen

        .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
          .col-lg-10.order-2.order-lg-1            
            p El aguacate (<em>Persea americana Mill</em>), es originario de la zona montañosa situada al occidente de México y Guatemala, su distribución natural va hasta Perú. Varios siglos antes de la llegada de los europeos se cultivaban desde Río Bravo (norte de México) hasta Chile, la ruta en la cual se han encontrado fósiles hasta de 12 mil años de antigüedad.
            p La palabra aguacate proviene de la lengua azteca <em>"náhuatl"</em>, pero esta fruta recibe también otros nombres según las regiones donde se cultiva, entre ellos se tiene: palta, cura, avocado o abacate.

          .col-lg-2.col-md-6.mb-4.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/tema1/img-3.svg')

        .row.pe-lg-3.mb-4.align-items-center(data-aos="zoom-in")
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema1/img-2.png", alt="Icono")
          .col.px-0
            h4.mb-0 Taxonomia
        .row.justify-content-center.align-items-strech
          .col-lg-4.col-md-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/img-4.png')
          .col-lg-4.fnd-3.p-4
            p.mb-0 <b>Clase:</b> <em>Dicotiledónea</em>
            p.mb-0 <b>Orden:</b> <em>Ranales</em>
            p.mb-0 <b>Familia:</b> <em>Lauraceae</em>
            p.mb-0 <b>Género:</b> <em>Persea</em>
            p.mb-0 <b>Especie:</b> <em>Persea americana Miller</em>
          .col-lg-4.fnd-3-1.p-4
            p.mb-0 El género Persea está formado por 150 especies, distribuidas en las regiones tropicales y subtropicales, especialmente en Asia, Islas Canarias y América donde se concentran 80 especies” (Corpoica, 2008, p.19).

    Separador

    .row.justify-content-start.align-items-center.mb-4(data-aos="zoom-in")
      .col-xl-4.col-lg-5.col-md-10
        .row.pe-lg-3.mb-2.fnd-2.align-items-center
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-2.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Descripción botánica
    p(data-aos="zoom-in") Esta planta se caracteriza por tener un tronco vigoroso y grueso, que en condiciones naturales puede sobrepasar los 10 metros de altura, gran ramificación, copa amplia con hojas perennifolias. Es una planta polimórfica, su sistema radicular es amplio y superficial, presenta hojas brillantes de color verde en la mayoría de las variedades y flores perfectas en racimos subterminales que se abren en dos momentos para exponer los órganos femeninos y masculinos en diferentes tiempos, evitando así la autofecundación:

    .row.justify-content-center.align-items-center.fnd-4.p-lg-4.p-2(data-aos="fade-right")
      .tarjeta.tarjeta--azul.p-4.fnd-4-1
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-6
              h5 Raíz
              p El sistema radical de esta especie consta de una raíz pivotante principal que puede sobrepasar 1 metro de profundidad, dándole anclaje al árbol. Se ramifica en raíces secundarias y terciarias que se distribuyen en los primeros 60 centímetros del suelo, este sistema carece de pelillos absorbentes y la absorción de agua y nutrientes solo se realiza en las áreas jóvenes del sistema radical. 
              
            .col-xl-6.col-md-6.mb-0.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema1/img-5.png')
          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-3
              h5 Ramificaciones
              p Esta especie cuenta con ramas gruesas y una gran cantidad de ramas delgadas de color verde en las puntas así.
              
            .col-xl-9.mb-0.mb-md-4.col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img-6.png')

          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-6
              h5 Inflorescencias
              p Las flores están agrupadas en inflorescencias de tallo largo, que en número hasta de 10 crecen en las axilas, presentando grupos integrados que contienen hasta 450 flores, que pueden madurar en el transcurso de seis meses, de acuerdo a la temperatura y la variedad. Cada árbol puede llegar a producir hasta un millón de flores y solo entre el 0.01 % el 1 % se transforma en fruto, por la abscisión de numerosas flores y frutos pequeños en desarrollo. A mayor floración menor porcentaje de cuajado (Corpoica, 2008, p. 19).
   
              
            .col-xl-6.mb-0.mb-md-4.col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img-8.png')
          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-6
              h5 Tallo
              p La planta posee un tallo vigoroso, erecto, leñoso, ramificado y con una corteza escamosa de color grisáceo a veces surcada longitudinalmente. Puede alcanzar un diámetro de hasta 80 centímetros y una altura de 25 a 30 metros en su edad adulta. La copa es de forma globosa y acampanada. Su madera puede ser utilizada en el área de la construcción y para uso doméstico.   
              
            .col-xl-6.mb-0.mb-md-4.col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img-7.png')

          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-6
              h5 Flores
              p Las flores son pequeñas, hermafroditas y agrupadas en panículas, con un cáliz de tres sépalos y corola tripétala. Tienen 12 estambres (nueve funcionales) y un pistilo con un solo carpelo y óvulo. Sus colores varían entre crema, amarillo, verde, café y rojo, y duran dos días antes de ser fecundadas o caer. Presentan protoginia, donde los órganos femeninos maduran primero, y se clasifican en tipo A y B, lo que influye en la productividad del árbol.   
              
            .col-xl-6.mb-0.mb-md-4.col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img-9.png')
          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-6
              h5 Hojas
              p Las hojas de esta especie poseen en promedio 15 cm de largo y 7 cm de ancho; son simples, alternas, bordes enteros, el haz es de color verde oscuro brillante y su envés de color blancuzco, su forma es elíptica y de textura suave, el ápice termina en punta aguda, su base es en cuña con nerviación marcada, algunas variedades presentan hojas con olores específicos (anisadas).   
              
            .col-xl-6.mb-0.mb-md-4.col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img-10.png')
          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-6
              h5 Fruto
              p El fruto del aguacate posee una sola semilla, que varía de formas según la raza (redondo, alargado, forma de botella, entre otras), su cáscara puede ser lisa o rugosa con coloraciones verde y violáceo. La consistencia de la pulpa es blanda de color blanco amarillento, que pasa a verde en la cercanía de la cáscara. La maduración del fruto solo se presenta cuando este se retira del árbol. El tamaño varía según la variedad y tiene un peso promedio entre 200 y 2.500 gramos.   
              
            .col-xl-6.mb-0.mb-md-4.col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img-11.png')
    Separador
    .row.justify-content-start.align-items-center.mb-4(data-aos="zoom-in")
      .col-xl-4.col-lg-5.col-md-10
        .row.pe-lg-3.mb-2.fnd-2.align-items-center
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-2.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Razas de aguacate

    p.mb-4 En esta especie se tienen tres razas → Mexicana, Guatemalteca y Antillana:
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span Raza Mexicana


        ImagenInfografica.c-1.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-12.png', alt='Texto que describa la imagen')
              figcaption Fuente: Sena (2024).

          .tarjeta.fnd-3-2.p-4(x="28.1%" y="74%" numero="2")
            p.mb-0 <b>Patrones de la raza:</b> esta raza muestra incompatibilidad para injertarse con la Antillana y es susceptible a suelos calcáreos. Su explotación en Colombia es limitada por la alternancia en la producción. Algunas variedades de la raza Mexicana incluyen Puebla, Duke, Gottfried, Zutano, Bacon y Topa-Topa.          
            h1.t-b 02
          .tarjeta.fnd-3-2.p-4(x="73.8%" y="63.3%" numero="1")
            p.mb-0 <b>Hojas aguacate mexicano:</b> esta especie se caracteriza por sus hojas alargadas y oscuras, con glándulas que emiten un distintivo aroma a anís. Los brotes son vellosos y la flor es verde claro. Su fruto, pequeño y semi-alargado, destaca por su alto contenido de grasa (30 %) y bajo en azúcar (2 %).
            h4.t-b 01

        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          span Raza Guatemalteca
        ImagenInfografica.c-2.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-13.png', alt='Texto que describa la imagen')
              figcaption Fuente: Sena (2024).

          .tarjeta.fnd-3-2.p-4(x="71.9%" y="34.6%" numero="1")
            p.mb-0 <b>Hojas del aguacate guatemalteco:</b> sus hojas son grandes y verdes oscuras, sin olor. Los tallos de los brotes jóvenes son rojizos. Los frutos, de color verde opaco a rojo o morado, son medianos (125-250 gramos), con cáscara gruesa y rugosa, lo que facilita su manejo poscosecha y resistencia a plagas.
            h4.t-b 01
          .tarjeta.fnd-3-2.p-4(x="39.4%" y="37%" numero="2")
            p.mb-0 <b>Contenido de la raza guatemalteca:</b> esta raza tiene un contenido medio de aceites del 15 % y pulpa fibrosa en algunas variedades. Las semillas son grandes y se adhieren bien a la pulpa. El tiempo de floración a cosecha es de aproximadamente 15 meses. Variedades incluyen <i>Hass, Reed, Edranol</i> y <i>Pinkerton</i>.
            h4.t-b 02
          .tarjeta.fnd-3-2.p-4(x="29.7%" y="73.5%" numero="3")
            p.mb-0 <b>Variedad Hass</b>
            p.mb-0 Descripción: fruta de forma oval.
            p.mb-0 Semilla de pequeña a mediana, gran sabor.
            p.mb-0 Tamaño: entre 141,5 a 339,6 gramos.
            p.mb-0 Apariencia: suave, piel gruesa pero plegable.
            p.mb-0 Pulpa verde pálida con textura cremosa.
            p.mb-0 Características de maduración: La cáscara se oscurece a medida que se madura. La fruta cede a una suave presión cuando está madura.
            h4.t-b 03            


        .titulo-sexto.color-acento-contenido
          h5 Figura 3. 
          span Raza Antillana
        ImagenInfografica.c-3.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-14.png', alt='Texto que describa la imagen')
              figcaption Fuente: Sena (2024).

          .tarjeta.fnd-3-2.p-4(x="26.1%" y="54.6%" numero="1")
            p.mb-0 <b>El tallo:</b> es verde claro y acanalado, sin chupones. Sus hojas son grandes, de color verde claro a amarillento, sin olor. El fruto es alargado, grande, con cáscara suave y pulpa fibrosa. Su peso varía entre 250 y 1000 gramos, siendo la raza de mayor tamaño.
            h4.t-b 01
          .tarjeta.fnd-3-2.p-4(x="56.7%" y="45.6%" numero="2")
            p.mb-0 <b>Resistencia de la raza:</b>  es la raza más sensible al frío, pero resistente a la saturación de calcio y salinidad, soportando cloro (250-350 ppm). Es susceptible a quemaduras solares y al hongo cercospora, pero resistente a la antracnosis. Variedades incluyen Lorena,<i> Peterson, Simmonds, Trapp</i> y <i>Pollock.</i>
            h4.t-b 02            

        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Descripciones de las razas de aguacates

        .tabla-b.tbl
          table
            caption Fuente:  Sena (2024).
            thead
              tr
                th
                th 
                  h4.mb-0 Mexicana
                th 
                  h4.mb-0 Antillana
                th 
                  h4.mb-0 Guatemalteca
            tbody
              tr
                td(rowspan="3") 
                  h4.mb-0 Hojas
                td Olor: anís
                td Sin olor
                td Sin olor
              tr
                td Verdes y lustrosas
                td Verde claro amarillento
                td Rojo violáceo
              tr
                td 8 a 10 cm de largo
                td 20 cm de largo
                td 15 a 18 cm de largo
              tr
                td(rowspan="2") 
                  h4.mb-0 Frutos
                td Corteza: delgada y lisa
                td Corteza: coriácea y lisa
                td Corteza: gruesa y dura
              tr
                td Peso: menor de 250 g
                td Peso: 250 g - 2.5 kg
                td Peso: 100 g - 2.05 kg
              tr
                td 
                  h4.mb-0 Periodo de flor a fruto
                td Entre 6 y 8 meses
                td Entre 5 y 8 meses
                td Entre 10 y 15 meses
              tr
                td 
                  h4.mb-0 Forma del Pedúnculo
                td Forma cilíndrica
                td Forma intermedia
                td Forma cónica
              tr
                td 
                  h4.mb-0 Vida del fruto
                td 8 y 10 días
                td 4 y 5 días
                td Hasta 5 días

    Separador
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10

        .row.justify-content-start.align-items-center.mb-4(data-aos="zoom-in")
          .col-xl-4.col-lg-5.col-md-10
            .row.pe-lg-3.mb-2.fnd-2.align-items-center
              .col-auto.pe-2
                img(src="@/assets/curso/temas/tema2/img-2.svg", alt="Icono")
              .col.px-0
                h4.mb-0.tit-2 Zonas de vida

        p Cada zona de vida tiene características especiales y específicas que la hacen apta para la siembra de cada especie agrícola, por lo tanto, antes de la siembra de un cultivo debe tenerse muy en cuenta este parámetro. A continuación, se presenta información precisa sobre las zonas de vida según Holdridge (1987):

        .titulo-sexto.color-acento-contenido(data-aos="zoom-in")
          h5 Tabla 2. 
          span Rangos y clasificación climática de <i>Holdridge</i>

        .tabla-b.tbl.tbl-c.mb-4(data-aos="fade-left")
          table
            caption Fuente:  Sena (2024).
            thead
              tr
                th 
                  h4.mb-0 Símbolo
                th 
                  h4.mb-0 Zona de vida
                th 
                  h4.mb-0 T °C
                th 
                  h4.mb-0 Precipitación (mm/año)
                th 
                  h4.mb-0 Clima
            tbody
              tr
                td bms-T
                td Bosque muy seco tropical
                td > 24
                td 500 a 1000
                td Cálido muy seco
              tr
                td bs-T
                td Bosque seco tropical
                td > 24
                td 1000 a 2000
                td Cálido seco
              tr
                td bh-T
                td Bosque húmedo tropical
                td > 24
                td 2000 a 4000
                td Cálido húmedo
              tr
                td bmh-T
                td Bosque muy húmedo tropical
                td > 24
                td 4000 a 8000
                td Cálido muy húmedo
              tr
                td bp-T
                td Bosque pluvial tropical
                td > 24
                td > 8000
                td Cálido pluvial
              tr
                td bs-PM
                td Bosque seco premontano
                td 18 a 24
                td 500 a 1000
                td Medio seco
              tr
                td bh-PM
                td Bosque húmedo premontano
                td 18 a 24
                td 1000 a 2000
                td Medio húmedo
              tr
                td bmh-PM
                td Bosque muy húmedo premontano
                td 18 a 24
                td 2000 a 4000
                td Medio muy húmedo
              tr
                td bp-PM
                td Bosque pluvial premontano
                td 18 a 24
                td > 4000
                td Medio pluvial
              tr
                td bh-MB
                td Bosque húmedo montano bajo
                td 12 a 18
                td 500 a 1000
                td Frío húmedo
              tr
                td bmh-MB
                td Bosque muy húmedo montano bajo
                td 12 a 18
                td 2000 a 4000
                td Frío muy húmedo
              tr
                td bp-MB
                td Bosque pluvial montano bajo
                td 12 a 18
                td > 4000
                td Frío pluvial
              tr
                td bh-M
                td Bosque húmedo montano
                td 6 a 12
                td 500 a 1000
                td Muy frío húmedo
              tr
                td bmh-M
                td Bosque muy húmedo montano
                td 6 a 12
                td 1000 a 2000
                td Muy frío muy húmedo
              tr
                td bp-M
                td Bosque pluvial montano
                td 6 a 12
                td > 2000
                td Muy frío pluvial
              tr
                td mh-SA
                td Monte húmedo subalpino
                td 3 a 6
                td 250 a 500
                td Extremadamente frío húmedo
              tr
                td p-SA
                td Páramo subalpino
                td 3 a 6
                td 500 a 1000
                td Extremadamente frío muy húmedo
              tr
                td pp-SA
                td Páramo pluvial subalpino
                td 3 a 6
                td > 1000
                td Extremadamente frío pluvial

        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
          .col-xl-9.col-lg-8
            p Es importante tener en cuenta la zona de vida para la producción de aguacate, pues de esta depende la adaptación, desarrollo, crecimiento, producción y productividad de la especie. Se tienen en cuenta variables como: altura sobre el nivel del mar y factores climáticos como temperatura, brillo solar, humedad relativa, vientos y precipitación. Dichas variables son determinantes para este tipo de cultivo.

            .row.pe-lg-3.mb-4.align-items-center(data-aos="zoom-in")
              .col-auto.pe-2
                img(src="@/assets/curso/temas/tema1/img-2.png", alt="Icono")
              .col.px-0
                h4.mb-0 Altura sobre el nivel del mar
            p Esta variable determina el piso térmico apto para el desarrollo del cultivo. A continuación, se relaciona la altura sobre el nivel del mar óptimo para cada una de las razas de aguacate.
            .row.justify-content-center.align-items-center.mb-0.fnd-3-3.p-4
              .col-auto.pe-2
                img(src="@/assets/curso/temas/tema1/img-15.svg", alt="Icono")
              .col.px-0
                p.mb-0 <b>Raza Mexicana:</b> su desarrollo óptimo está entre los 1.700 y 2.500 m.s.n.m.
                p.mb-0 <b>Raza Guatemalteca:</b> su desarrollo óptimo está entre 1.200 y 2.400 m.s.n.m.
                p.mb-0 <b>Raza Antillana:</b> su desarrollo óptimo está entre 0 y 1.500, aunque en Colombia se puede encontrar hasta los 2.000 m.s.n.m.

          .col-xl-3.col-md-6.col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img-16.png', alt='Texto que describa la imagen')

        .row.pe-lg-3.mb-4.align-items-center(data-aos="zoom-in")
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema1/img-2.png", alt="Icono")
          .col.px-0
            h4.mb-0 Factores climáticos

        p.mb-4(data-aos="fade-right") Los aguacates mexicanos prosperan en climas templados a cálidos, tolerando temperaturas más frías. Los guatemaltecos requieren condiciones templadas y húmedas, con menos resistencia al frío. En cambio, los antillanos son ideales para climas cálidos y húmedos, siendo más sensibles a las heladas. Todos requieren buen drenaje y estabilidad hídrica para un crecimiento óptimo y producción de frutos.

        .row.justify-content-center.align-items-center(data-aos="zoom-in")
          .col-lg-4.col-md-6.order-2.order-xl-1.mb-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-17.png')
          .col-xl-8.order-1.order-xl-2
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul fnd-3-4")
              .row(titulo="Temperatura")
                p.mb-0 <b>Raza Mexicana:</b> su desarrollo óptimo se da a temperaturas que oscilan entre los 5 y 17 ºC; esta raza es la que presenta mayor tolerancia al frío.
                p.mb-0 <b>Raza Guatemalteca:</b> su desarrollo óptimo se da a temperaturas que oscilan entre los 4 y 19 °C. En esta raza se encuentra la variedad Hass, la cual se perfila como una de las potenciales para mercados internacionales (exportación) y con gran potencial productivo en Colombia.
                p.mb-0 <b>Raza Antillana:</b> su desarrollo óptimo se da a temperaturas que oscilan entre los 18 y 26 °C; esta raza es poco resistente al frío.
              .row(titulo="Precipitación")
                p.mb-0 <b>Raza Mexicana:</b> su crecimiento óptimo se da a precipitaciones que estén por encima de los 1.500 mm.
                p.mb-0 <b>Raza Guatemalteca:</b> el crecimiento óptimo se da con precipitaciones que oscilen entre los 1.000 y 1.500 mm.
                p.mb-0 <b>Raza Antillana:</b> el crecimiento óptimo se da en zonas cuyas precipitaciones son menores a 1.000 mm.

              .row(titulo="Brillo solar")
                p.mb-0 Es importante que la zona donde se vaya a establecer el cultivo de aguacate tenga un promedio de 1.500 horas-luz/año.

              .row(titulo="Humedad relativa")
                p.mb-2 El aguacate se adapta a climas húmedos y semihúmedos con marcadas diferencias entre las estaciones húmedas y secas. La humedad relativa promedio del ambiente para el cultivo de aguacate debe estar cercana al 70 %, el orden de adaptación de menor a mayor humedad relativa para las tres razas es:
                ol.lista-ol
                  li.mb-0 
                    span.text-bold 1. 
                    | Mexicana.
                  li.mb-0 
                    span.text-bold 2.
                    | Guatemalteca.
                  li.mb-0 
                    span.text-bold 3. 
                    | Antillana.
              .row(titulo="Vientos")
                p El aguacate es un cultivo que no tolera vientos fuertes dado que estos causan defoliación, daño de ramas, caída de flores y frutos, y pueden afectar el proceso de polinización. Si estos se presentan en el área seleccionada para la siembra del cultivo se deben establecer barreras vivas para su protección. El viento no debe ser constante ni alcanzar velocidades por encima de los 20 km/h.

    Separador

    .row.justify-content-start.align-items-center(data-aos="zoom-in")
      .col-xl-5.col-lg-7.col-md-10
        .row.pe-lg-3.mb-2.fnd-2.align-items-center
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-2.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Suelos

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-xl-8.order-2.order-lg-2.order-xl-1
        p Las características físicas y químicas de un suelo son determinantes para la siembra de un cultivo, de ahí la importancia de realizar un análisis de suelo previo a la siembra de cualquier especie agrícola, pues con esto se está disminuyendo los riesgos de someter a las plantas a deficiencias o toxicidades nutricionales. Las recomendaciones finales para garantizar una buena nutrición de la plantación deben estar avaladas por un técnico que conozca sobre el cultivo y sus exigencias en cuanto a nutrientes.
        .row.justify-content-center.align-items-center.fnd-3-5.p-4
          .col-lg-3.col-md-6
            figure
              img.mb-lg-0.mb-4(src='@/assets/curso/temas/tema1/img-18.png')
          .col-lg-9
            p Los suelos más recomendados para este cultivo son los de textura suelta (francos) que favorezcan la formación de un sistema radical denso y muy ramificado, con profundidad efectiva y nivel freático superior a 1 metro, bien drenados, ya que sus raíces son altamente susceptibles a problemas radicales. Su pH debe oscilar entre 5.5 - 7.0.
            p Se pueden presentar deficiencias de hierro y zinc en suelos de reacción alcalina, este cultivo puede ser sembrado en suelos o franco arcillosos siempre y cuando se tenga un buen drenaje y contenido de materia orgánica.
      .col-xl-4.col-md-4.d-none.d-md-block.order-1.order-lg-1.order-xl-2
        figure.mb-4.mb-xl-0
          img(src='@/assets/curso/temas/tema1/img-19.png')

    Separador

    .row.justify-content-start.align-items-center.mb-4(data-aos="zoom-in")
      .col-xl-5.col-lg-7.col-md-10
        .row.pe-lg-3.mb-2.fnd-2.align-items-center
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-2.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Zonas productoras de aguacate:

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-10
        .row.pe-lg-3.mb-4.align-items-center(data-aos="zoom-in")
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema1/img-2.png", alt="Icono")
          .col.px-0
            h4.mb-0 Distribución de la producción en el mundo

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            P La producción mundial de aguacate ha venido creciendo a ritmo acelerado a partir de 1999 (5 % en promedio por año), alcanzando un total de 8,9 millones de toneladas en el 2022.

            P Esta es una lista de países por producción de aguacate, llamado también palta, en 2022, basada en los datos de la Organización de las Naciones Unidas para la Alimentación y la Agricultura. La producción mundial total de aguacate en 2022 era de 8,978,275 toneladas. México era con creces el mayor productor, representando el 28.12 % de la producción mundial.

          .col-lg-4.col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-20.png')


        .titulo-sexto.color-acento-contenido
          h5 Tabla 3. 
          span Rangos clasificación climática de <i>Holdridge</i>

        .tabla-b.tbl.tbl-c.mb-5
          table
            caption Fuente:  Wikipedia.
            thead 
              tr
                th
                  h4.mb-0  Posición
                th
                  h4.mb-0  Región
                th
                  h4.mb-0  Producción (toneladas)
            tbody
              tr
                td 1
                td México
                td 2.529.582
              tr
                td 2
                td Colombia
                td 1.090.664
              tr
                td 3
                td Perú
                td 866.457
              tr
                td 4
                td República Dominicana
                td 737.201
              tr
                td 5
                td Kenia
                td 458.439
              tr
                td 6
                td Indonesia
                td 389.000
              tr
                td 7
                td Brasil
                td 338.238
              tr
                td 8
                td Vietnam
                td 210.595
              tr
                td 9
                td Israel
                td 189.667
              tr
                td 10
                td Haití
                td 173.507
              tr
                td 11
                td Chile
                td 168.010
              tr
                td 12
                td Etiopía
                td 167.884
              tr
                td 13
                td Estados Unidos
                td 142.340
              tr
                td 14
                td Guatemala
                td 138.964
              tr
                td 15
                td China
                td 135.860

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-xl-10.fnd-6
            .row.justify-content-center.align-items-center.fnd-5
              .col-xl-9.col-lg-8
                p.mb-0 Dos países se destacan entre los mayores productores con características similares en cuanto a su participación en el comercio mundial: México y Colombia, con una producción de 2.5 y 1.1 millones toneladas/año respectivamente. Su producción fundamentalmente se dirige hacia el mercado interno debido al tamaño de su población.
              .col-xl-2.col-lg-3
                figure.fl-box-img
                  img(src='@/assets/curso/temas/tema1/img-21.png' alt='Background Image')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10


        .row.justify-content-center.align-items-center(data-aos="zoom-in") 
          .col-lg-12.tg-a
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img.img-72-(src='@/assets/curso/temas/tema1/img-22.png' alt='AvatarTop')
              .tarjeta.tarjeta--azul.fnd-7
                .py-3.pe-5
                  p.mb-0 <b>Colombia</b> registra un crecimiento del 63 % al aumentar la producción de 114 mil toneladas en el año 1996 a 2.5 millones de toneladas en el 2022; este último año con un crecimiento importante de 12.5 % respecto al inmediatamente anterior. Resulta sorprendente que Colombia siendo el segundo productor a nivel mundial no exporte aguacate, sino que figura como importador, especialmente por compras realizadas a sus dos vecinos: Venezuela y Ecuador.
          .col-lg-6.tg-b
            .tarjeta-avatar-b.tgs.mb-5
              .tarjeta-avatar-b__img
                img.img-72(src='@/assets/curso/temas/tema1/img-23.png' alt='AvatarTop')
              .tarjeta.tarjeta--azul.fnd-7
                .py-3.px-2
                  p.mb-0 El mayor crecimiento en la producción del último año lo alcanzó <b>México</b> con 28.17 %, debido a sus mayores niveles de productividad, no obstante, a la disminución del área cultivada.
          .col-lg-6.tg-b
            .tarjeta-avatar-b.tgs.mb-5
              .tarjeta-avatar-b__img
                img.img-72(src='@/assets/curso/temas/tema1/img-24.png' alt='AvatarTop')
              .tarjeta.tarjeta--azul.fnd-7
                .py-3.px-2
                  p.mb-0 <b>Perú</b>, otro proveedor de importancia de la fruta a nivel mundial fue el tercero en crecimiento de la producción con un aumento en toneladas del 9.65 %.

        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
          .col-lg-10
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-9
                p Estos cuatro países representan alrededor del 60 % de la producción mundial de aguacate. En 2022, México fue el principal productor, con un 28.2 % de la producción mundial, seguido de Colombia con un 12.1 %, Perú con un 9.7 % y República Dominicana con un 8.2 %
                p Por lo anterior, resulta importante analizar el comportamiento histórico de la producción de aguacate en los principales países productores y algunos competidores futuros de Colombia en el mercado mundial de esta fruta.
              .col-lg-3.col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-25.png')
            .row.pe-lg-3.mb-4.align-items-center(data-aos="zoom-in")
              .col-auto.pe-2
                img(src="@/assets/curso/temas/tema1/img-2.png", alt="Icono")
              .col.px-0
                h4.mb-0 Distribución geográfica del aguacate
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-8
                p Actualmente se cultiva en más de 60 países, casi todos los países de clima cálido y templado, aunque sus mayores cultivos están en los países México, Chile, República Dominicana, Indonesia, Perú, Colombia, Brasil y Estados Unidos. Estos países aportan más del 60 % de la producción mundial. El área cosechada en aguacate corresponde al 4.7 % del área mundial cosechada en otras frutas tropicales. La producción mundial de esta fruta ha mostrado un crecimiento en la última década concentrada en América latina y el Caribe.

                p En Colombia el área sembrada en aguacate está concentrada en los departamentos de Antioquia especialmente en el oriente antioqueño, en el 2023 fue el principal exportador de aguacate con una participación de 41,4 % , Los departamentos de Tolima,  Caldas, Santander, Bolívar, Cesar, Valle del Cauca, y Quindío, representan el 86 % del total del área sembrada de aguacate en el país.
              .col-lg-4.col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-26.png')




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
