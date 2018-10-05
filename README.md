An introduction to Node.js and express.js
=========================================

Welcome to **An introduction to Node.js and express.js**.

The course covers:

- [RESTful](https://hackernoon.com/restful-api-design-step-by-step-guide-2f2c9f9fcdbf)
- [Node.js](https://nodejs.org/en/) basics
- [Express](https://github.com/expressjs/express) basics
- Storing with [lowdb](https://github.com/typicode/lowdb)

[Here](https://soprasteria--intro-to-express.herokuapp.com/) you can find what the course aims to create.


## Development

```sh
npm install

# optional
npm run build

npm start
```


## 🐝 API

__*[GET]*__ /articles

```sh
curl https://soprasteria--intro-to-express.herokuapp.com/api/v1/articles
```

__*[GET]*__ /articles/:id

```sh
curl https://soprasteria--intro-to-express.herokuapp.com/api/v1/articles/2
```

*__[PATCH]__* /articles/:id

```sh
curl -H "Content-Type: application/json" -d '{"like": false}' -X PATCH https://soprasteria--intro-to-express.herokuapp.com/api/v1/articles/2
```
