package com.technophile.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/review")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping("/addReview")
    public ResponseEntity<Reviews> addReview(@RequestBody Map<String,String> payload){

        return new ResponseEntity<Reviews>(reviewService.AddReview(payload.get("reviewBody"),payload.get("IMDBId")), HttpStatus.CREATED);

    }
}
