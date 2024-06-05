import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {

    const [foodList, setFoodList] = useState([]);

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(`${url}/food`);
            setFoodList(response.data);
            console.log(response.data);
        }
        catch (error) {
            toast.error("Something went wrong to fetch the data")
        }

    }
    const deleteFoodItem = async (id) => {
        try {
            const response = await axios.delete(`${url}/food/` + id);
            await fetchFoodList();
            toast.success("Item Deleted...")
        }
        catch (error) {
            toast.error("Something went wrong to delete item")
        }
    }
    useEffect(() => {
        fetchFoodList();
    }, []);


    return (
        <div className="list add flex-col">
            <p>All Foods List</p>
            <div className="list-table">
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {
                    foodList.map((item, index) => {
                        return (
                            <div key={index} className='list-table-format'>
                                <img src={`${url}/food/image/` + item.imageName} alt="" />
                                <p>{item.name}</p>
                                <p>{item.category}</p>
                                <p>{item.price}</p>
                                <p className='cursor' onClick={() => deleteFoodItem(item.id)}>x</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List