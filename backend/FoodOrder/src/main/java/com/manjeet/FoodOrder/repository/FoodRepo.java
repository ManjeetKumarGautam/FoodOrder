package com.manjeet.FoodOrder.repository;

import com.manjeet.FoodOrder.model.Food;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FoodRepo extends MongoRepository<Food,String> {
}
