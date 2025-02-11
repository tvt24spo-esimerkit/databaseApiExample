const express = require('express');
const router = express.Router();
const book = require('../models/book_model');

router.get('/',function(request, response){
    book.getAllBooks(function(result){
        response.json(result);
    })
});
router.get('/:id',function(request, response){
    book.getOneBook(request.params.id,function(result){
        response.json(result);
    })
});
router.post('/',function(request, response){
    book.addBook(request.body, function(result){
        response.json(result);
    })
});
router.put('/:id');
router.delete('/:id');

module.exports=router;