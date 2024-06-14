import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
const Add = ({ url }) => {

    const [image, setImage] = useState(null);

    const [data, setData] = useState({
        name: "",
        description: "",
        category: "Salad",
        price: ""
    });


    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('category', data.category);
        formData.append('image', image);
        try {
            const response = await axios.post(`${url}/food`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // setData({
            //     name: "",
            //     description: "",
            //     category: "Salad",
            //     price: ""
            // });
            // setImage(null);
            toast.success("New Food Added...");


        } catch (error) {
            toast.error("Something went wrong...");
            console.log(error);
        }
    }

    return (
        <div className='add'>
            <form className="flex-col" onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input type="file" name="" id="image" onChange={(e) => setImage(e.target.files[0])} hidden />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' />
                </div>
                <div className="add-product-desc flex-col">
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" id="" cols="30" rows="6"></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} name="category" id="">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name="price" id="" placeholder='$ 20' />
                    </div>
                </div>
                <button type="submit" className='add-btn'>Add Item</button>
            </form>
        </div>
    )
}

export default Add