
import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { category: categoryName } = category; 
    return (
        <div className="">
            <Link to={`/products/${categoryName}`} className="border-2 px-4 py-2 rounded-xl text-[#9538E2] border-[#9538E2]">
                {categoryName}
            </Link>
        </div>
    );
};

export default Category;






