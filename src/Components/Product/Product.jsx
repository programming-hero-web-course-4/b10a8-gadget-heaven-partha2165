import { Link } from "react-router-dom";
const Product = ({product}) => {

    const {img,title,price,id} = product;


    return (
        <div id="shopSection">
            <div className="card h-[440px] shadow-xl border-2 border-[#9538E2]">
                  <figure className="pt-4">
                       <img src={img} className="rounded-xl w-56 " />
                   </figure>
                   <div className="card-body items-center text-center">
                      <h2 className="card-title">{title}</h2>
                       <p>{price}$</p>
                       <div className="card-actions">                        
                            <Link to={`/product/${id}`} className="btn text-[#9538E2] border-[#9538E2] btn-outline">Details</Link>
                          
                       </div>
                </div>
          </div>
        </div>
    );
};

export default Product;