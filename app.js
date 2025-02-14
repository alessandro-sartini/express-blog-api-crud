const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routers/postsRouter");
// middleWare importato
const checkTime = require("./middlewares/checkTime");


// ! middleware per tute le rotte
app.use(checkTime);

// !cartella public statica
app.use(express.static("public"));

app.use("/api/posts", postsRouter);


//! bodyParse per json
app.use(express.json());






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
