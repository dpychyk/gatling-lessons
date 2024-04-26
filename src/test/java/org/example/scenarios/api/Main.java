package org.example.scenarios.api;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonParser;

import java.util.Map;

public class Main {
    public static void main(String[] args) throws JsonProcessingException {
        final var json = "{\"id\": \"1\", \"name\": \"Oleg\"}";
        System.out.println(new ObjectMapper().readTree(json).get("not"));
    }
}
