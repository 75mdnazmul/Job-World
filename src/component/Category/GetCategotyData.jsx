import React, { useEffect, useState } from 'react';
import Category from './Category';

const GetCategotyData = () => {
    const [categorys, setCategory] = useState([])
    useEffect(() => {
        fetch("Category.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            {
                categorys.map(category => <Category 
                    key={category.id} 
                    name = {category.name} 
                    icon = {category.icon}
                    quantity = {category.quantity}

                    ></Category>)
            }
        </div>
    );
};

export default GetCategotyData;