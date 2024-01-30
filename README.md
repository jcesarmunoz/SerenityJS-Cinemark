# README

Pruebas automatizadas en dispositivos moviles usando la herramienta SerenityJS con Screenplay

> **Soporta automatización**:
> * Movil

## Herramientas y Complementos

|                                                                               **VisualStudioCode**                                                                                |                                                              **NodeJs**                                                               |                                                         **npm**                                                         |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------:|
| [<img width="50" height="50" src="https://user-images.githubusercontent.com/29654835/27530003-e78876b8-5a13-11e7-8863-83fbdb900f72.png">]() | [<img height="60" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_original_wordmark_logo_icon_146412.png">]() | [<img height="50" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/npm_original_wordmark_logo_icon_146402.png">]() |

> **NOTA**:

> * Para ejecutar el proyecto se recomienda minimo las siguientes versiones:
>   * Visual Studio Code 1.85.2
>   * NodeJS 20.11.0
>   * npm 10.2.0
> * Una vez obtenido visual studio es necesario instalar los plugins de Gherkin y Cucumber for Visual Studio

## Ejecución local

Clonar el proyecto en github

```bash
  git clone 
```

Para correr el proyecto de manera local se debe realizar los siguientes pasos:

Definir la tag de los tipos del test que se va a ejecutar, ejecutar en la consola el siguiente comando

### Ejecucion de todo el projecto

```bash
npm run test:executeTag "@RegisterAndPurchase"
```

### Ejecucion de escenario Registro en cinemark

```bash
npm run test:executeTag "@Register"
```

### Ejecucion de escenario Login en cinemark

```bash
npm run test:executeTag "@Login"
```

### Ejecucion de escenario compra de boletas cinemark

```bash
npm run test:executeTag "@Purchase"
```

## Construido con

La automatización fue desarrollada con:

* BDD - Estrategia de desarrollo
* Screenplay
* Npm - Manejador de dependencias
* Cucumber - Framework para automatizar pruebas BDD
* Serenity JS - Biblioteca de código abierto para la generación de reportes
* Gherkin - Lenguaje Business Readable DSL (Lenguaje especifico de dominio legible por el negocio)
* NodeJs - Entorno de ejecucion de javascript

## Documentacion

[Manual SerenityBDD](https://serenity-js.org/handbook/)

### Elaborado por:

Julio Cesar Muñoz Merchan