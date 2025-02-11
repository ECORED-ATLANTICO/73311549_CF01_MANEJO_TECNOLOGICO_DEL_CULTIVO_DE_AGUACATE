<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Selección del material vegetal y manejo de vivero para el cultivo de aguacate
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-10      
        .row.justify-content-center.align-items-center.mb-5.fnd-1-1.p-4
          .col-lg-2.col-md-5.mb-4.mb-lg-0
            figure.mb-md-5.mb-lg-0
              img(src='@/assets/curso/temas/tema2/img-1.svg')
          .col-lg-10
            p La selección del material vegetal para el cultivo de aguacate es crucial para garantizar la calidad y la producción. Se deben elegir variedades adecuadas, como Hass o Fuerte, y utilizar injertos para mejorar la resistencia. El manejo de vivero incluye prácticas de riego, control de plagas y condiciones óptimas de temperatura y luz para fomentar un crecimiento saludable de las plántulas.

    Separador

    .row.justify-content-start.align-items-center.mb-4(data-aos="zoom-in")
      .col-xl-5.col-lg-7.col-md-10
        .row.pe-lg-3.mb-2.fnd-2.align-items-center
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-2.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Selección del material vegetal

    p.mb-4(data-aos="fade-right") Para tener éxito en un sistema productivo de aguacate es indispensable contar con un buen material de propagación, con calidad sanitaria y agronómica. La selección del patrón y la yema son factores determinantes en la producción y productividad de este frutal, a continuación las selecciones de materiales vegetales: 

    .row.justify-content-center.align-items-center.fnd-4.p-lg-4.mb-4.p-2(data-aos="fade-right")
      .tarjeta.tarjeta--azul.p-4.fnd-4-1
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-7
              h4 Selección del árbol madre
              p El árbol seleccionado como patrón debe poseer las siguientes características: adaptación a la zona de vida, buena estructura morfológica (formación), desarrollo vigoroso, raíces bien formadas, resistencia a plagas y enfermedades, facilidad en la consecución de la semilla, fácil injertación, alto grado de compatibilidad con la variedad a injertar y resistencia o tolerancia a factores abióticos limitantes en la zona. Los patrones más usados en aguacate deben provenir de árboles nativos o locales que muestren los mejores resultados por su rusticidad y adaptabilidad al medio.
              
            .col-xl-5.col-md-6.mb-0.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img-5.png')
          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-8
              h4 Selección del fruto
              p Una vez seleccionado el patrón, se procede a la selección del fruto, preferiblemente del tercio medio de la copa del árbol, este debe estar maduro, sano, bien formado y libre de plagas y enfermedades, y que posean poca pulpa. Para reducir el riesgo de contaminación con el hongo Phytophthora cinnamomi, las semillas no deben provenir de frutos caídos o en contacto con el suelo. La viabilidad de la semilla es de aproximadamente tres semanas.
           
            .col-xl-4.mb-0.mb-md-4.col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img-6.png')

          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-8
              h4 Extracción de la semilla
              p La semilla debe extraerse manualmente del fruto maduro usando herramientas cortantes. Tras su extracción, se lava para eliminar residuos y se seca en un lugar fresco y oscuro. Antes de germinar, es crucial desinfectar la semilla con productos adecuados o mediante agua caliente, seguida de un enfriamiento. Se recomienda retirar el ápice para acelerar la germinación y detectar daños. Además, la semilla no debe almacenarse por más de dos semanas, ya que esto puede afectar su capacidad de germinación. 
              
            .col-xl-4.mb-0.mb-md-4.col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img-7.png')

          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-8
              h4 Siembra directa
              p Consiste en llevar la semilla directamente al campo, después de trazar el terreno. Este método no es el más recomendado por el alto porcentaje de pérdida de semilla, por las condiciones adversas del ambiente, alta variabilidad en la germinación, árboles de porte alto y producción tardía.    
              
            .col-xl-4.mb-0.mb-md-4.col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img-8.png')

          .row.justify-content-center.align-items-center.px-lg-4.px-md-1
            .col-xl-8
              h5 Siembra en vivero
              p Este método es el más aconsejable, por el fácil manejo del material a propagarse. Se logra un mayor control sobre la semilla y la planta, un alto porcentaje de germinación y plantas en el campo con un menor tiempo para obtener la producción de fruta.

            .col-xl-4.mb-0.mb-md-4.col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img-9.png')

    .row.justify-content-start.align-items-center.mb-4(data-aos="zoom-in")
      .col-xl-7.col-lg-9.col-md-10
        .row.pe-lg-3.mb-2.fnd-2.align-items-center
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-2.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Manejo de vivero para el cultivo de aguacate
    p El procedimiento cuando se siembra en vivero es el siguiente:

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-xl-4.col-md-5
        figure.mb-md-4.mb-lg-5.mb-4
          img(src='@/assets/curso/temas/tema2/img-10.png', alt='')
      .col-xl-8
        SlyderF.mb-5(columnas="col-md-6")
          .tarjeta.fnd-8.p-4
            figure
              img.img-62.mb-4(src='@/assets/curso/temas/tema2/img-11.svg')
            .row.justify-content-center.align-items-center.mb-2
              .col-auto.fnd-1-2
                h5.text-center.mb-0.p-2 Preparación del suelo
            p.mb-0.text-center El suelo utilizado para viveros debe ser suelto para evitar el encharcamiento y compactación de este en la bolsa. Además, se recomienda que sea sometido a un proceso de desinfección ya sea química o física (solarización, vapor de agua o agua caliente) y así evitar la proliferación de hongos patógenos. 

          .tarjeta.fnd-8.p-4
            figure
              img.img-62.mb-4(src='@/assets/curso/temas/tema2/img-12.svg')
            .row.justify-content-center.align-items-center.mb-2
              .col-auto.fnd-1-2
                h5.text-center.mb-0.p-2 Llenado de la bolsa 
            p.mb-0.text-center La bolsa para la siembra del patrón de aguacate debe ser de una altura o profundidad mínima de 43 cm y un diámetro de 20 cm. En su llenado se debe tener en cuenta que el suelo quede bien compactado para evitar cámaras de aire que contribuyan a la proliferación de hongos.
          .tarjeta.fnd-8.p-4
            figure
              img.img-62.mb-4(src='@/assets/curso/temas/tema2/img-13.svg')
            .row.justify-content-center.align-items-center.mb-2
              .col-auto.fnd-1-2
                h5.text-center.mb-0.p-2 Camas 
            p.mb-0.text-center Estas se utilizan para colocar la bolsa después de ser llenadas, con el fin de manejar más fácilmente el material vegetal y evitar enfermedades al estar en contacto con el suelo. Estas pueden ser elaboradas en guadua a una altura de 30 cm del suelo y un ancho de 1.50 m, el largo es según las condiciones del terreno y las necesidades del productor.
          .tarjeta.fnd-8.p-4
            figure
              img.img-62.mb-4(src='@/assets/curso/temas/tema2/img-14.svg')
            .row.justify-content-center.align-items-center.mb-2
              .col-auto.fnd-1-2
                h5.text-center.mb-0.p-2 Siembra de la semilla 
            p.mb-0.text-center Esta actividad se hace después que la bolsa ha sido llenada, desinfectada y colocada en la cama. La semilla debe quedar ubicada lo más superficial posible, aproximadamente entre dos y cinco centímetros de la superficie y en la misma posición como se encontraba cuando el fruto estaba en el árbol y así facilitar la germinación de la plántula.  
    
    Separador
    .row.justify-content-start.align-items-center.mb-4(data-aos="zoom-in")
      .col-xl-6.col-lg-8.col-md-10
        .row.pe-lg-3.mb-2.fnd-2.align-items-center
          .col-auto.pe-2
            img(src="@/assets/curso/temas/tema2/img-2.svg", alt="Icono")
          .col.px-0
            h4.mb-0.tit-2 Manejo del material vegetal en vivero
    .row.justify-content-center.align-items-strech.mb-4(data-aos="fade-right")
      .col-lg-9.fnd-1-3.mb-5.mb-lg-0
        .row.justify-content-center.align-items-center.p-3
          .col-lg-2.col-md-6
            figure
              img.mb-4(src='@/assets/curso/temas/tema2/img-15.svg')
          .col-lg-10
            p Para obtener una plántula ideal en el proceso de injertación, es necesario tener en cuenta lo siguiente:
            .row.pe-lg-3.mb-2(data-aos="zoom-in")
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0
                p.mb-0 Evitar el exceso de humedad en el suelo.
            .row.pe-lg-3.mb-2(data-aos="zoom-in")
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0
                p.mb-0 Fertilización adecuada (según recomendación técnica).
            .row.pe-lg-3.mb-2(data-aos="zoom-in")
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0
                p.mb-0 Aplicar micorrizas al inicio del desarrollo de la planta para una mejor absorción de los elementos nutritivos (especialmente el fósforo).
            .row.pe-lg-3.mb-2(data-aos="zoom-in")
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema2/check.svg")
              .col.px-0
                p.mb-0 El desarrollo de las plántulas (patrones) está relacionado directamente con la cantidad de luz que se le suministre en vivero, a continuación, el cultivo de yemas de aguacate.
      .col-lg-3.col-md-6
        figure
          img.mb-4(src='@/assets/curso/temas/tema2/img-16.png')
 
    TabsA.color-acento-botones.mb-5.fnd-9(data-aos="fade-left")
      .tarjeta.fnd-9-1.p-4(titulo="Selección de yemas")
        .row.justify-content-center.align-items-center.px-lg-4.px-md-1
          .col-xl-6.mb-4.mb-lg-0            
            p El árbol seleccionado para la obtención de las yemas debe tener las siguientes características: buen manejo agronómico (ubicación en una zona de vida apta, planeación del cultivo, suelo adecuado, labores culturales, fertilización, Manejo Integrado de Plagas y Enfermedades – MIPE y BPA), buen desarrollo, alta capacidad productiva, producción constante, buen historial fitosanitario (especialmente no haber sido afectado por los hongos <em>Phytophthora o Verticillium)</em>.
              
          .col-xl-6.col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/img-17.png')

      .tarjeta.fnd-9-1.p-4(titulo="Recolección de yemas")
        .row.justify-content-center.align-items-center.px-lg-4.px-md-1
          .col-xl-7.mb-4.mb-lg-0         
            p Las yemas deben ser recolectadas de las puntas de las ramas en pleno crecimiento, no deben ser brotes y tener las hojas maduras y firmes al tacto. Deben estar libres de plagas, enfermedades y sin ningún daño mecánico. Su corte debe hacerse de manera diagonal (utilizando tijeras podadoras o navajas desinfectadas y filosas). 
            
          .col-xl-5.col-md-8.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img-18.png')

      .tarjeta.fnd-9-1.p-4(titulo="Tratamiento de las yemas")
        .row.justify-content-center.align-items-center.px-lg-4.px-md-1
          .col-lg-12   
            p Una vez retiradas las yemas del árbol, se deben cortar las hojas para evitar gastos de energía que disminuyan el prendimiento de estas en el patrón. Se recomienda realizar el proceso de injertación a más tardar al siguiente día de recolectadas las yemas, para garantizar un alto porcentaje de prendimiento y evitar la pérdida de estas y del patrón. Al recolectar las yemas, estas deben ser envueltas en papel periódico húmedo formando paquetes, para que permanezcan frescas y evitar su deterioro.

      .tarjeta.fnd-9-1.p-4(titulo="Proceso de injertación")
        .row.justify-content-center.align-items-center.px-lg-4.px-md-1
          .col-xl-7.mb-4.mb-lg-0          
            p En el proceso de injertación primero se debe cortar el patrón a 20 o 30 cm de altura, se recomienda retirar solo las hojas cercanas al punto donde se va a injertar para evitar un mayor estrés en la plántula. 
            
            p.mb-0 En el tronco del portainjerto (patrón) se hace un corte vertical de 3 a 5 cm, un poco más largo que la cuña de la yema, luego se inserta en el corte haciendo coincidir ambos lados, casando perfectamente entre sí.
          .col-xl-5.col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/img-19.png')

      .tarjeta.fnd-9-1.p-4(titulo="Método de injertación")
        .row.justify-content-center.align-items-center.px-lg-4.px-md-1
          .col-xl-7.mb-4.mb-lg-0           
            p Se tienen diferentes técnicas para llevar a cabo el proceso de injertación. El injerto de púa terminal es el método más usado por la facilidad de operación y el alto porcentaje de prendimiento. La yema que se va a injertar se le hace un corte en forma de cuña haciéndole dos cortes en punta. 
            
          .col-xl-5.col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/img-20.png')

    .row.justify-content-center.align-items-center.fnd-9-2(data-aos="fade-right")
      .col-lg-5.col-md-6.p-0.mb-0.py-md-4.py-lg-0
        figure.mb-xl-0
          img(src='@/assets/curso/temas/tema2/img-21.png')
      .col-lg-7.p-4.p-md-3
        p Posteriormente, se debe envolver el injerto con una cinta plástica de 12 cm de largo y 1 o 2 cm de ancho (polietileno), ejerciendo una presión continua sobre la cirugía; enrollando de abajo hacia arriba en un mismo sentido, templando a la vez y procurando que la parte inferior de la cinta quede pisada en la primera vuelta, al terminar se introduce la punta superior por debajo de la última vuelta y se aprieta.
        p.mb-0 Después del proceso de injertación y encinte, se cubre el injerto con una bolsa plástica transparente (calibre grueso) para evitar la deshidratación de la yema injertada. Encima de la bolsa plástica se coloca una bolsa de papel con el fin de proteger los nuevos brotes de los rayos solares, esta se debe dejar hasta que se tengan hojas formadas (en promedio 2).

    Separador

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .row.justify-content-start.align-items-center.mb-4(data-aos="zoom-in")
          .col-xl-6.col-lg-7.col-md-10
            .row.pe-lg-3.mb-2.fnd-2.align-items-center
              .col-auto.pe-2
                img(src="@/assets/curso/temas/tema2/img-2.svg", alt="Icono")
              .col.px-0
                h4.mb-0.tit-2 Desarrollo de la plántula

        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img-22.png')
          .col-lg-9
            p Después que se ha logrado el prendimiento de las yemas, se retira la bolsa y los árboles se exponen a períodos cortos de luz directa, hasta que estas queden expuestas directamente a la luz solar, se recomienda regar tres veces por semana en épocas secas.
            p Las plántulas están listas para ser sembradas en el campo cuando cumplen con los siguientes requisitos: 15 o más hojas bien formadas, entre 60 y 120 cm de altura, y buen desarrollo de la zona del injerto hacia arriba.
        .row.justify-content-center.align-items-center
          .col-lg-9.mb-4.mb-lg-0            
            p Se recomienda realizar aplicaciones del hongo Trichoderma al suelo antes del trasplante de la plántula al campo, con el fin de prevenir el ataque de hongos patógenos como Phytophthora cinnamomi. También se puede llevar a cabo aplicaciones en el almácigo (vivero) de ácido fosforoso, para acelerar el proceso de enraizamiento de la planta en campo.

          .col-lg-3.col-md-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema2/img-23.png')

        p.mb-4 A continuación, se muestra el tiempo aproximado en que la plántula debe permanecer en el vivero:

        .titulo-sexto.color-acento-contenido
          h5 Tabla 4. 
          span Tiempo estimado de la plántula en el vivero

        .tabla-b.tbl.tbl-c
          table
            caption Fuente:  Sena (2024).
            thead
              tr
                th 
                  h4.mb-0 Proceso
                th 
                  h4.mb-0 Tiempo (días)
            tbody
              tr
                td Siembra de semilla a emergencia
                td 20
              tr
                td En semillero
                td 20
              tr
                td Crecimiento del patrón
                td 75
              tr
                td Injertación a trasplante
                td 90
              tr
                td 
                  h4.mb-0 Total
                td 205
              tr
                td 
                  h4.mb-0 Meses
                td 6,8
  

   

  </template>

<script>
export default {
  name: 'Tema2',
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
