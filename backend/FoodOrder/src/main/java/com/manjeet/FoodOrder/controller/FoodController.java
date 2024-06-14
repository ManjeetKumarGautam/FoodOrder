package com.manjeet.FoodOrder.controller;

import com.manjeet.FoodOrder.model.Food;
import com.manjeet.FoodOrder.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("food")
public class FoodController {
    @Autowired
    FoodService foodService;

    @PostMapping
    public String addFile(@RequestParam("name") String name,@RequestParam("description") String description,
                          @RequestParam("category") String category,@RequestParam("price") int price,@RequestParam("image") MultipartFile image){
        return foodService.addFood(name,description,category,price,image);
    }

    @GetMapping
    public List<Food> allFoods(){
        return foodService.getAllFoods();
    }

    @GetMapping("/{id}")
    public Food getFood(@PathVariable String id){
        return foodService.getFood(id);
    }

    @DeleteMapping("{id}")
    public String deleteFood(@PathVariable String id){
        return foodService.deleteFood(id);
    }


    @GetMapping("/image/{imgName:.+}")
    public ResponseEntity<byte[]> getImage(@PathVariable String imgName){
        return foodService.getImage(imgName);
    }
}
