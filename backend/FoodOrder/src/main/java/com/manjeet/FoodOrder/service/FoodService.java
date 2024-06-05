package com.manjeet.FoodOrder.service;

import com.manjeet.FoodOrder.model.Food;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public interface FoodService {


    String addFood(String name,String description,String category,int price,MultipartFile image);

    List<Food> getAllFoods();

    String imgUpload(MultipartFile image) throws IOException;


    ResponseEntity<byte[]> getImage( String imgName);

    String deleteFood(String id);
}
