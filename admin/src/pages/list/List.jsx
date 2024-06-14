import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaTrash, FaRegEdit } from 'react-icons/fa';

const List = ({ url, setUpdateFood, setFood }) => {

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
    const fetchFood = async (id) => {
        const response = await axios.get(`${url}/food/` + id);
        console.log(response.data);
        setFood(response.data);
    }

    useEffect(() => {
        fetchFoodList();
    }, []);


    return (
        <div className="list add flex-col">
            <h1 className='food-list-title'>All Foods List</h1>
            <table className="list-table">
                <tr className="list-table-format title">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                {
                    foodList.map((item, index) => {
                        return (
                            <tr key={index} className='list-table-format'>
                                <td>
                                    <img src={`${url}/food/image/` + item.imageName} alt="" />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td className='action-btn'>
                                    <p className='cursor' onClick={() => { setUpdateFood(true); fetchFood(item.id) }}><FaRegEdit /></p>
                                    <p className='cursor' onClick={() => deleteFoodItem(item.id)}><FaTrash /></p>
                                </td>

                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default List