<h1 align="center">
  Desarrollo de la página web La Dolce Vita
</h1>


## 🚀 Entorno de desarrollo


### 👩🏽‍🚒 Herramientas necesarias 

1. [Instalar Node.js y npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. [Instalar yarn](https://classic.yarnpkg.com/lang/en/docs/install)
3. Clona este proyecto: `https://github.com/uly081219/la-dolce-vita.git`
4. Acceder a la carpeta del proyecto: `cd la-dolce-vita`

### 🔥 Ejecución de la aplicación

1. Instalar todas las dependecias y construir el sitio web: `yarn build`
2. Inicar el servidor de dessarrollo: `yarn up`

Puedes acceder al servidor mediante la url: http://localhost:1234

## 👩🏽‍🏫 Explicación del proyecto

Este proyecto pretende ser un sitio web de una agencia de viajes especializada en viajes y circuitos a Italia

## 🗂 Estructura del proyecto

`tree -L 4 assets  src`

```
assets
├── css
│   └── main.css
├── images
│   └── Todas las imágenes usadas
└── js
    ├── common.js
    └── slider.js
src
├── enlaces.html
├── index.html // Portada
├── lombardia.html // Detalle
├── norte-de-italia.html // Categoría
├── partials
│   ├── footer.html
│   ├── head.html
│   └── header.html
├── presentacion.html
└── regiones-de-italia.html // Categoria
```

## 🦸🏼 Navegadores

```
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
```

`npx browserslist`

```
and_chr 94
and_ff 92
and_uc 12.12
chrome 95
chrome 94
chrome 93
chrome 92
chrome 91
chrome 87
edge 95
edge 94
firefox 93
firefox 92
ie 11
ios_saf 15
ios_saf 14.5-14.8
ios_saf 14.0-14.4
ios_saf 13.4-13.7
ios_saf 12.2-12.5
opera 80
opera 79
safari 15
safari 14.1
safari 14
safari 13.1
samsung 15.0
samsung 14.0
```

# netlify



# Feliz desarrollo !
