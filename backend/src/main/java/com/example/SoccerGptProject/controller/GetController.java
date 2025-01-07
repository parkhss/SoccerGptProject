package com.example.SoccerGptProject.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// API 테스트용 Controller입니다.
@RestController
@RequestMapping("/api/v1/testApi")
public class GetController {

    // http://localhost:8080/api/v1/testApi/hello
    @GetMapping("/hello")
    public String helloWorld(){
        return "Hello World";
    }
}
