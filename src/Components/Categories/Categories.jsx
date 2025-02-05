import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
const Categories = () => {

    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('/category.json')
        .then(res => res.json())
        .then(data =>setCategories(data))
    },[])

    return (
        <div className='flex flex-col gap-12  items-center py-8 rounded-xl shadow-lg' >
            {
                categories.map(category => <Category  category={category} key={category.id}/> )
            }
        </div>
    );
};

export default Categories;


