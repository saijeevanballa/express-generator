# scaffold-express-app


> A simple express project generator

## Installation

```
$ npm install -g scaffold-express-app
$ scaffold-express-app
```
 OR
```sh
$ npx scaffold-express-app
```

`NOTE:` With `npm@6` this will run this package with `npx`. If you are on an earlier version of `npm` you will
need to install globally and run directly:

## Usage

### Guided Process

It couldn't be easier to create new express app. Simply type `scaffold-express-app` and you'll start the guided process, being asked up to 3 questions:

#### Question 1:
```sh
? Choose a language for the project template? 
❯ JavaScript 
  TypeScript
```
#### Question 2:
```sh
? What project template would you like to generate? 
❯ express-basic 
  express-mvc  
```
#### Question 3:
```sh
? What project template would you like to generate? express-mvc
? Enter Project name: demo-app
```

## Folder Structure
```bash
express-basic ( option structure )
    |
    |____node_modules
    |
    |____app.js
    |
    |_____main.js
    |
    |_____README.md
    |
    |_____package.json

 ```


```bash
express-mvc ( option structure )
    |
    |____node_modules
    |
    |____srs
    |      |
    |      |_____main.js
    |      |
    |      |_____app.js
    |      |
    |      |_____api.js
    |      |
    |      |_____public
    |      |        |
    |      |        |_____index.html
    |      |
    |      |_____user
    |      |       |
    |      |       |_____router.js
    |      |       |
    |      |       |_____module.js
    |      |       |
    |      |       |_____model.js
    |      |
    |      |_____utils
    |              |
    |              |_____authenticate.js
    |
    |_____README.md
    |
    |_____package.json

 ```
