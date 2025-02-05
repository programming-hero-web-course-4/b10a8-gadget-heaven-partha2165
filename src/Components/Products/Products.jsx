import { useLoaderData, useParams } from "react-router-dom";
import Product from '../Product/Product';
import { useState } from 'react';

const Products = () => {
    const { category } = useParams();
    const data = useLoaderData();

    const products = (!category || category === "All Products") ? data : data.filter(product => product.category === category);

   
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const displayedProducts = showAll ? products : products.slice(0, 6);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {displayedProducts.length > 0 
                ? displayedProducts.map(product => <Product product={product} key={product.id} />)
                : <p className="text-xl text-center font-bold">No products found.</p>
            }
            {(category === "All Products" || !category) && (
                <div className="col-span-1 md:col-span-3 text-center mt-4">
                    <button 
                        onClick={toggleShowAll} 
                        className="btn btn-primary">
                        {showAll ? "Show Less" : "View All"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Products;
