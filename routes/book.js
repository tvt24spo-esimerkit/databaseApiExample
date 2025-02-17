const express = require('express');
const router = express.Router();
const book = require('../models/book_model');

router.get('/', function (request, response) {
    book.getAllBooks(function (err, result) {
        if (err) {
            response.json(err);
        }
        else {
            response.json(result);
        }
    })
});
router.get('/:id', function (request, response) {
    book.getOneBook(request.params.id, function (err, result) {
        if (err) {
            response.json(err);
        }
        else {
            //vastauksena json array
            //response.json(result);
            //vastauksena json objekti
            response.json(result[0]);
        }
    })
});
router.post('/', function (request, response) {
    book.addBook(request.body, function (err, result) {
        if (err) {
            response.json(err);
        }
        else {
            response.json(result);
        }
    })
});
router.put('/:id', function (request, response) {
    book.updateBook(request.params.id, request.body, function (err, result) {
        if (err) {
            response.json(err);
        }
        else {
            //koko databasesta tuleva result array
            // response.json(result);
            //affected rows=0 jos ei onnistu ja 1, jos onnistui
            response.json(result.affectedRows);
        }
    })
});
router.delete('/:id', function (request, response) {
    book.deleteBook(request.params.id, function (err, result) {
        if (err) {
            response.json(err);
        }
        else {
            response.json(result);
        }
    })
});

module.exports = router;
