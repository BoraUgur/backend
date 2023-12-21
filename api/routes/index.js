const express = require("express");

const router = express.Router();

const venueController = require("../controllers/venueController")
const commentController = require('../controllers/commentController')

router
    .route('/venues')
    .get(venueController.venuesGetAll)
    .post(venueController.venuesAddOne)

router
    .route('/venues/:venueid')
    .get(venueController.venuesReadOne)
    .put(venueController.venuesUpdateOne)
    .delete(venueController.venuesDeleteOne)

router
    .route('/venues/:venueid/comments')
    .post(commentController.commentsAddOne)

router
    .route('/venues/:venueid/comments/:commentid')
    .get(commentController.commentsReadOne)
    .put(commentController.commentsUpdateOne)
    .delete(commentController.commentsDeleteOne)

module.exports = router;