package com.manjeet.FoodOrder.service.imp;

import com.manjeet.FoodOrder.model.Food;
import com.manjeet.FoodOrder.repository.FoodRepo;
import com.manjeet.FoodOrder.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@Service
public class FoodServiceImp implements FoodService {

    @Autowired
    FoodRepo foodRepo;

    final String path = "./FoodOrder/images/";

    @Override
     public String addFood(String name,String description,String category,int price,MultipartFile image){
        try{
            Food food=new Food();
            food.setName(name);
            food.setCategory(category);
            food.setDescription(description);
            food.setPrice(price);

            String imgName = imgUpload(image);
            food.setImageName(imgName);

            String id=UUID.randomUUID().toString();
            food.setId(id);
            foodRepo.save(food);
            return "Added";
        }
        catch (IOException ex){
            return "Something went wrong";
        }


    }

    @Override
    public List<Food> getAllFoods(){
        return foodRepo.findAll();
    }

    @Override
    public String deleteFood(String id){
        Food food= foodRepo.findById(id).get();
        if(deleteImage(food.getImageName()))
            foodRepo.deleteById(id);
        return "Deleted";
    }
    @Override
    public String imgUpload(MultipartFile image) throws IOException {
        String name = image.getOriginalFilename();


        String randomId= UUID.randomUUID().toString();
        String newName = randomId.concat(name.substring(name.lastIndexOf(".")));

        String filePath=path+ File.separator+newName;
        File f=new File(path);
        if(!f.exists()){
            f.mkdir();
        }

        Files.copy(image.getInputStream(), Paths.get(filePath));
        return newName;
    }

    public boolean deleteImage(String imgName){
        File f=new File(path+imgName);
        if(f.exists()){
            f.delete();
            return true;
        }
        return false;
    }

    @Override
    public ResponseEntity<byte[]> getImage(String imgName){
        try{
            Path imgPath=Paths.get(path+imgName);
            byte[] imgByte=Files.readAllBytes(imgPath);
            return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imgByte);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.notFound().build();
        }
    }
}
