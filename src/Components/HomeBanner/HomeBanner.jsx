
const HomeBanner = () => {
    return (
        <div>
        <div className="bg-[#9538E2] w-[97%] mx-auto rounded-b-xl">
        {/* banner */}
            <div className="text-center md:w-[70%] mx-auto space-y-4 md:space-y-8 pt-8 pb-12 md:pt-16 md:pb-64">
                <h3 className="text-xl md:text-[48px] font-bold md:leading-[60px] text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h3>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="mt-4">
                    <a href="#shopSection" className=" text-black bg-white rounded-xl p-4">Shop Now</a>
                </div>
            </div>
        </div>
            <div className="border-2 border-white p-2 md:p-4 rounded-xl  w-4/5 mx-auto md:-mt-52 -mt-8">
                <img src="/banner.jpg" className="rounded-xl "/>
            </div>
    </div>
    );
};

export default HomeBanner;