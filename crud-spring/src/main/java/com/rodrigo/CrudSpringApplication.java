package com.rodrigo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.rodrigo.model.Course;
import com.rodrigo.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrudSpringApplication.class, args);
    }
    
    @Bean
    CommandLineRunner initDatabase(CourseRepository courseRepository){
        return args -> { 
            courseRepository.deleteAll();

            Course c = new Course();
            c.setName("Angular com Spring");
            c.setCategory("front-end");

            courseRepository.save(c);
        };
    }

}
