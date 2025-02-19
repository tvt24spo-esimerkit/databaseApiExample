const express = require('express');
const router = express.Router();
const user = require('../models/user_model');

router.get('/', function (request, response) {
    user.getAllUsers(function (err, result) {
        if (err) {
            response.json(err);
        }
        else {
            response.json(result);
        }
    })
});
router.get('/:id', function (request, response) {
    user.getOneUser(request.params.id, function (err, result) {
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
    user.addUser(request.body, function (err, result) {
        if (err) {
            response.json(err);
        }
        else {
            response.json(result);
        }
    })
});
router.put('/:id', function (request, response) {
    user.updateUser(request.params.id, request.body, function (err, result) {
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
    user.deleteUser(request.params.id, function (err, result) {
        if (err) {
            response.json(err);
        }
        else {
            response.json(result);
        }
    })
});

module.exports = router;
