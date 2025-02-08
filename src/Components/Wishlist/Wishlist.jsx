import { useEffect, useState } from 'react';
import { FaOpencart } from "react-icons/fa";
import { addToCart, getAllWishlist, removeFromWishlist, isInCart } from "../../Utils";
import { FaRegStar } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import toast from 'react-hot-toast';

const Wishlist = () => {
    document.title = "Wishlist | Gadget Heaven";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const items = getAllWishlist();
        setProducts(items);
    }, []);

    const handleAddToCart = (product) => {
        if (isInCart(product.id)) {
            toast.error("Product is already in the cart!");
        } else {
            addToCart(product);
            removeFromWishlist(product.id);
            setProducts(products.filter(item => item.id !== product.id)); 
            // toast.success("Product added to cart!");
        }
    };

    const handleRemoveFromWishlist = (productId) => {
        removeFromWishlist(productId);
       
        toast.error('Product removed from wishlist')
        setProducts(prevProducts => prevProducts.filter(item => item.id !== productId));
    };

    return (
        <div className='mt-5'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-[#aa0ae9]'>Wishlist</h3>
            </div>
            {/* main list */}
            <div className='mt-5 flex-col gap-6 flex'>
                {products.map(product => (
                    <div key={product.id} className='flex items-center justify-between rounded-xl shadow-lg py-4 px-8'>
                        <div className='flex md:flex-row flex-col gap-4 items-center'>
                            <div>
                                <img src={product.img} className='w-40 border-2 rounded-xl' alt={product.title} />
                            </div>
                            <div>
                                <h3 className='text-2xl font-medium'>{product.title}</h3>
                                <p className='text-xl mt-1'>Price: <strong>{product.price}</strong> $</p>
                                <p className="mt-2 flex gap-1">Rating: <strong>{product.rating}</strong> <FaRegStar className='text-xl' /></p>
                                <button 
                                    onClick={() => handleAddToCart(product)}
                                    className="btn bg-[#aa0ae99c] text-white"
                                >
                                    Add To Cart <FaOpencart className="text-xl" />
                                </button>
                            </div>
                        </div>
                        {/* delete button */}
                        <div>
                            <button 
                                onClick={() => handleRemoveFromWishlist(product.id)}
                                className="btn btn-error"
                            >
                                <MdDeleteForever />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;

