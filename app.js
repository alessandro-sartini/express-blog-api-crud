const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routers/postsRouter");

// ! middlewar errore globale
const errorHandler = require("./middlewares/errorHandler");

const notFound = require("./middlewares/notFound");
app.use(errorHandler);

// !cartella public statica
app.use(express.static("public"));

//! bodyParse per json sempre sopra al router
app.use(express.json());

app.use("/api/posts", postsRouter);



// !  per rotte inesistenti
// todo DEVE STARE SOTTO AL PERCORSO INIZIALE!!
app.use(notFound);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
