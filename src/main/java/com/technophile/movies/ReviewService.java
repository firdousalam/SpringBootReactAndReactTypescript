package com.technophile.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public Reviews AddReview(String reviewBody,String ImdbId){
        Reviews review = new Reviews(reviewBody);
        /*
        Inserting data in review collection
         */
        reviewRepository.insert(review);
        /*
        add review id in movies table by comparing imdbid in movies collection
         */
        mongoTemplate.update(Movies.class)
                .matching(Criteria.where("imdbId").is(ImdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }
}
