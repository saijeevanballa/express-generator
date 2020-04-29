# scaffold-express-app

Scaffold out an [Express app](https://github.com/saijeevanballa/express-generator).

> A simple express project generator

## Usage

```sh
$ npm init scaffold-express-app
```
 OR
```sh
$ npx scaffold-express-app
```

`NOTE:` With `npm@6` this will run this package with `npx`. If you are on an earlier version of `npm` you will
need to install globally and run directly:

```
$ npm install -g scaffold-express-app
$ scaffold-express-app
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
