
const Footer = () => {
    return (
        <div className='border-t-2 p-10' >
            <footer className='w-4/5 mx-auto '>
                <div className='text-center space-y-4 mb-8 '>
                    <h3 className="text-black font-bold text-xl md:text-2xl">Gadget Heaven</h3>
                    <p className='text-black'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                {/* down */}
                <div className='md:flex-row flex-col flex md:justify-between justify-center'>
                    <div className='text-[#838282ce] list-none text-center space-y-2'>
                        <p className='font-medium text-xl text-black'>Services</p>
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Shipping & Delivery</li>
                        <li>Returns</li>
                    </div>
                    <div className='text-[#838282ce] list-none text-center space-y-2'>
                        <p className='font-medium text-xl text-black'>Company</p>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </div>
                    <div className='text-[#838282ce] list-none text-center space-y-2'>
                        <p className='font-medium text-xl text-black'>Legal</p>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;