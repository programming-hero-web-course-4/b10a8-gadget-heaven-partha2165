import { useLoaderData } from "react-router-dom";
import Article from "../Article/Article";

const NewsPage = () => {

    document.title = "News | Gadget Heaven";
    const news = useLoaderData();
    
    return (
        <div className="">
            {/* headings */}
            <div className="bg-[#9538E2]">
                <div className="text-center py-10 md:w-3/5 w-4/5 mx-auto space-y-4">
                     <h3 className="font-bold text-white md:text-2xl text-xl">Gadget News</h3>
                    <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            {/* news*/}
            <div className=" mx auto mt-10 ">
                {/* vid */}
                <div className="text-center flex justify-center rounded-xl">
                <iframe width="1000" height="550 " src="https://www.youtube.com/embed/cBpGq-vDr2Y?si=hU0MB8y88vMVk9zi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                {/* the latest gadet news */}
                <div>
                    <h3 className="text-2xl font-medium text- black text-center mt-10"> Read Latest Gadget News</h3>
                    <div className="w-4/5 mx-auto mt-5 space-y-5">
                        {
                            news.map(article=>(
                                <Article article={article} key={article.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;

