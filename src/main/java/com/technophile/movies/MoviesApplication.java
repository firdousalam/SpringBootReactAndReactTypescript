package com.technophile.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesApplication {

	public static void main(String[] args) {
       //https://www.youtube.com/watch?v=5PdEmeopJVQ&t=999s
		SpringApplication.run(MoviesApplication.class, args);

	}

	@GetMapping("/")
	public String apiRoot(){
		return "Hello World !";
	}
}
