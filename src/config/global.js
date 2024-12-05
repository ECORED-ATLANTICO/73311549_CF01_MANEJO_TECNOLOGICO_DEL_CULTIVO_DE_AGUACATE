export default {
  global: {
    componenteFormativo: 'Estrategia de producción y propagación del aguacate',
    descripcionCurso:
      'Este componente se centra en la planificación de la producción de aguacate, alineando las estrategias con los requerimientos del mercado y las normas técnicas vigentes. Incluye la producción de material de propagación vegetal en viveros, aplicando parámetros técnicos para garantizar la calidad. A través de estas prácticas, se busca optimizar la producción y asegurar que los agricultores estén preparados para satisfacer las demandas del mercado de manera sostenible y eficiente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades del cultivo de aguacate',
        desarrolloContenidos: true,
      },

      {
        nombreRuta:
          'Selección del material vegetal y manejo de vivero para el cultivo de aguacate',
        numero: '2',
        titulo: 'Titulo de primer nivel',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Generalidades del cultivo de aguacate.',
      referencia: 'Asociado Asproagricol.',
      tipo: 'PDF',
      link:
        'https://ccoa.org.co/wp-content/uploads/2023/02/Cartilla-aguacate-2.pdf ',
    },
    {
      tema: 'Generalidades del cultivo de aguacate',
      referencia: 'Asociado SENA',
      tipo: 'Video',
      descarga:
        'https://sioc.minagricultura.gov.co/Aguacate/Normatividad/Paquete%20Tecnologico%20Aguacate.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Raíz',
      significado:
        'La raíz es la parte de una planta que crece bajo tierra, anclándola al suelo y absorbiendo agua y nutrientes esenciales para su desarrollo y supervivencia. También almacena energía.',
    },
    {
      termino: 'Tallo',
      significado:
        'El tallo es la parte de la planta que sostiene las hojas, flores y frutos, proporcionando soporte estructural. Facilita el transporte de agua y nutrientes entre raíces y partes aéreas.',
    },
    {
      termino: 'Hojas',
      significado:
        'Las hojas son estructuras verdes de las plantas que realizan la fotosíntesis, convirtiendo luz solar en energía. Además, participan en la respiración y transpiración, y son esenciales para el crecimiento vegetal.',
    },
    {
      termino: 'Ramificaciones',
      significado:
        'Las ramificaciones son divisiones o extensiones de una estructura principal, como un tallo o una raíz, que permiten el crecimiento y la expansión de la planta, facilitando la producción de hojas y flores.',
    },
    {
      termino: 'Inflorescencias',
      significado:
        'Las inflorescencias son agrupaciones de flores en una planta, organizadas de diversas formas. Estas estructuras pueden variar en tamaño y forma, y son clave para la reproducción y producción de frutos.',
    },
    {
      termino: 'Flores',
      significado:
        'Las flores son estructuras reproductivas de las plantas que contienen órganos masculinos y femeninos. Su función principal es la polinización, y son fundamentales para la formación de frutos y semillas.',
    },
  ],
  referencias: [
    {
      referencia: 'Biospace (2024).',
      link:
        'https://www.biospace.es/10-consejos-para-cultivar-aguacate-en-maceta-y-que-de-fruto/',
    },
    {
      referencia:
        'Cabezas, C., Hueso, J. y Cuevas, J. (2003). Identificación y descripción de los estados fenológicos-tipo del aguacate (Persea americana Mill). Almería, España: Universidad de Almería',
      link: '',
    },
    {
      referencia:
        'Corpoica. (2008). Tecnología para el cultivo de aguacate. Consultado el 15 de julio de 2014, en ',
      link: '',
    },
    {
      referencia:
        'Díaz, D. (2009). Manual técnico del cultivo de aguacate. Bogotá, Colombia: Produmedios',
      link: '',
    },
    {
      referencia:
        'Frutas frescas. Aguacate. Variedades mejoradas. Especificaciones (NTC 5209). (2003, 22 de octubre). Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC), 2004, 31 de julio',
      link: '',
    },
    {
      referencia:
        'Holdridge, L. (1987). Ecología basada en zonas de vida. San José, Costa Rica: Editorial IICA.',
      link: '',
    },
    {
      referencia:
        'Infoagro. (s.f.). El cultivo del aguacate (1ª parte). Consultado el 15 de julio de 2014, en',
      link: 'http://www.infoagro.com/frutas/frutas_tropicales/aguacate',
    },
    {
      referencia:
        'Tamayo, P. (1994). Integración de métodos de control de las enfermedades de las plantas: guía ilustrada. Rionegro, Antioquia: Corpoica. ',
      link: '',
    },
    {
      referencia:
        'Tamayo, P. (2005). Reconocimiento de enfermedades del aguacate en Colombia. Medellín, Colombia: Facultad Nacional de Agronomía. ',
      link: '',
    },
    {
      referencia:
        '<em>Whiley</em>, A., Schaffer, B. y <em>Wolstenholme</em>, B. (2007). El Palto: botánica, producción y usos. Valparaíso, Chile: Ediciones Universitarias de Valparaíso.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
