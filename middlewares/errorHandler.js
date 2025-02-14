
// todo errore in caso di funzione errata!
function errorHandlare(err, req, res, naxt) {

    res.status(500);
    res.jsone({

        message: err.message,

    })


}

module.exports = errorHandlare;