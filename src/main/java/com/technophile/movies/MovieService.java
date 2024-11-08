package com.technophile.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;
    public List<Movies> allMovies(){
        System.out.println("SERVICE CLASS CALLED");
        return movieRepository.findAll();
    }
    public Optional<Movies> getMovie(ObjectId id){
        System.out.println("SERVICE CLASS CALLED Movies By ID");
        return movieRepository.findById(id);
    }
    public Optional<Movies> getMovieByIMDBId(String id){
        System.out.println("SERVICE CLASS CALLED to get movies by IMDBId");
        return movieRepository.findMoviesByimdbId(id);
    }
}
