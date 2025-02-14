const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routers/postsRouter");


// ! middlewar errore globale 
const errorHandler = require("./middlewares/errorHandler");

app.use(errorHandler);

const notFound = require("./middlewares/notFound");
// !  per rotte inesistenti
app.use(notFound);

// !cartella public statica
app.use(express.static("public"));

app.use("/api/posts", postsRouter);


//! bodyParse per json
app.use(express.json());






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
