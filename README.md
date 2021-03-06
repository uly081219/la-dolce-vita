<h1 align="center">
  Desarrollo de la pΓ‘gina web La Dolce Italia
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/9a447aef-6604-491a-912e-af89c785e1a2/deploy-status)](https://app.netlify.com/sites/determined-chandrasekhar-8fa62f/deploys)

## π Entorno de desarrollo


### π©π½βπ Herramientas necesarias 

1. [Instalar Node.js y npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. [Instalar yarn](https://classic.yarnpkg.com/lang/en/docs/install)
3. Clona este proyecto: `https://github.com/uly081219/la-dolce-vita.git`
4. Acceder a la carpeta del proyecto: `cd la-dolce-vita`

### π₯ EjecuciΓ³n de la aplicaciΓ³n

1. Instalar todas las dependecias y construir el sitio web: `yarn build`
2. Inicar el servidor de dessarrollo: `yarn up`

Puedes acceder al servidor mediante la url: http://localhost:1234

### π©π½βπ« ExplicaciΓ³n del proyecto

Este proyecto pretende ser un sitio web de una agencia de viajes especializada en viajes y circuitos a Italia

### π Estructura del proyecto

`tree -L 4 assets  src`

```
assets
βββ css
βΒ Β  βββ main.css
βββ images
βΒ Β  βββ Todas las imΓ‘genes usadas
βββ js
    βββ common.js
    βββ slider.js
src
βββ enlaces.html
βββ index.html // Portada
βββ lombardia.html // Detalle
βββ norte-de-italia.html // CategorΓ­a
βββ partials
βΒ Β  βββ footer.html
βΒ Β  βββ head.html
βΒ Β  βββ header.html
βββ presentacion.html
βββ regiones-de-italia.html // Categoria
```

### π¦ΈπΌ Navegadores

```
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead"
    ],
    "development": [
      "last 2 chrome version",
      "last 2 firefox version",
      "last 2 safari version",
      "last 2 edge version",
      "last 2 opera version"
    ]
  },


β  la-dolce-vita git:(main) β npx browserslist --env=production
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
op_mini all
opera 80
opera 79
safari 15
safari 14.1
safari 14
safari 13.1
samsung 15.0
samsung 14.0
β  la-dolce-vita git:(main) β npx browserslist --env=development
chrome 95
chrome 94
edge 95
edge 94
firefox 93
firefox 92
opera 80
opera 79
safari 15
safari 14.1
```

### π‘ Continuous Deployment con netlify

Cada vez que realizamos cambios en la rama main se deploya automΓ‘ticamente el sitio web en la plataforma netlify

Url del proyecto: https://determined-chandrasekhar-8fa62f.netlify.app/

### π€Ή Feliz desarrollo !
