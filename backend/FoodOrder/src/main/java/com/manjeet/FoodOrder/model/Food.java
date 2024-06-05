package com.manjeet.FoodOrder.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("food")
public class Food {
    private String id;
    private String name;
    private String imageName;
    private  String description;
    private  String category;
    private int price;
}
