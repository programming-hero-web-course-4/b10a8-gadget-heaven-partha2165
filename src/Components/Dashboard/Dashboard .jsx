import { Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {
    document.title = "Dashboard | Gadget Heaven";
    return (
        <div>
            {/* heading divv */}
            <div className="bg-[#9538E2]">
                <div className="text-center py-10 md:w-3/5 w-4/5 mx-auto space-y-4">
                    <h3 className="font-bold text-white md:text-2xl text-xl">Dashboard</h3>
                    <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className="space-x-4">
                        <NavLink to="cart" className={({ isActive }) => `text-white font-medium text-xl rounded-full px-8 py-2 border-2 ${isActive ? 'bg-[#41058577]' : 'border-white'}`}>
                            Cart
                        </NavLink>
                        <NavLink to="wishlist" className={({ isActive }) => `text-white font-medium text-xl rounded-full px-4 py-2 border-2 ${isActive ? 'bg-[#41058577]' : 'border-white'}`}>
                            Wishlist
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* outlet */}
            <div className="w-4/5 mx-auto">
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;
