const express = require('express');
const reviewRoutes = express.Router();
const { createReviewController, getAllReviewController
} =
    require('../controller/reviewController');
// plans -> get all the plans from db -> sensitive route -> protected route -> logged in i will only allow that person 
reviewRoutes.route("/")
    .post(createReviewController) 
    .get(getAllReviewController)
    
// loggedin plan
module.exports = reviewRoutes;
