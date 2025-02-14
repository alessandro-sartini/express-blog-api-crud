const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routers/postsRouter");


// ! middlewar errore globale 
const errorHandler = require("./middlewares/errorHandler");

app.use(errorHandler);


// !cartella public statica
app.use(express.static("public"));

app.use("/api/posts", postsRouter);

const notFound = require("./middlewares/notFound");

// !  per rotte inesistenti
// todo DEVE STARE SOTTO AL PERCORSO INIZIALE!!
app.use(notFound);

//! bodyParse per json
app.use(express.json());






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
