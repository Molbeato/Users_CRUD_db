const { getAll, createOne, getOne, deleteOne, updateOne } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
        .post(createOne)
        userRouter.route("/:id")
        .get(getOne)
        .delete(deleteOne)
        .put(updateOne)

module.exports = userRouter;