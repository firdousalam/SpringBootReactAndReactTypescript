package com.technophile.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping("/allMovies")
    public ResponseEntity<List<Movies>> getAllMovies(){
        System.out.println(movieService.allMovies());
        return new ResponseEntity<List<Movies>>(movieService.allMovies(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Movies>> getMovies(@PathVariable ObjectId id){
        return new ResponseEntity<Optional<Movies>>(movieService.getMovie(id), HttpStatus.OK);

    }
    @GetMapping("imdbid/{id}")
    public ResponseEntity<Optional<Movies>> getMovieByIMDBId(@PathVariable String id){
        return new ResponseEntity<Optional<Movies>>(movieService.getMovieByIMDBId(id), HttpStatus.OK);

    }
}
