// const { json } = require("express");
const posts = require("../data/posts.js");

function index(req, res) {
  let filterPosts = posts;

  // Se la richiesta contiene un filtro, allora filtriamo il menu
  if (req.query.tags) {
    filterPosts = posts.filter((e) => e.tags.includes(req.query.tags));
  }
  // potrebbe essere stata filtrata o contenere il menu originale
  res.json(filterPosts);
}

function show(req, res) {
  const post = posts.find((e) => e.id === parseInt(req.params.id));

  if (!post) {
    res.status(404);

    return res.json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  res.json(post);
}

function store(req, res) {

  // creo un id automatico sempre +1 su ultimo
  const newId = posts[posts.length - 1].id + 1;









  res.send(`Creazione nuovo post`);
}

function update(req, res) {
  res.send("Modifica integrale del post " + req.params.id);
}

function modify(req, res) {
  res.send("modifica parziale del post " + req.params.id);
}

function destroy(req, res) {
   // inserisco id in una costante con il parse (altrimenti JSONE)
   const id = parseInt(req.params.id);
   //! cerco post con id selezionato
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404);

    return res.json({
      status: 404,
      error: "not found",
      message: "Post non trovato",
    });
  }

  
  posts.splice(posts.indexOf(post), 1);
  
  // ! verifico l'eliminazione
  console.log(posts);

  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };
