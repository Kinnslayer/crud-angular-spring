package com.rodrigo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rodrigo.model.Course;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
    
    //@RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public List<Course> list() {
        return null;
    }
}
