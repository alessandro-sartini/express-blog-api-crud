const express = require("express");
const app = express();
const port = 3000;

const postsRouter = require("./routers/postsRouter");

app.use(express.static("public"));

app.use("/api/posts", postsRouter);

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
