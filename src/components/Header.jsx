import { Link } from "react-router";

const Header = () => {
    return (
        <div className="w-full h-14 bg-gray-800 text-white flex items-center justify-between px-6 shadow">
            <h1 className="text-xl font-semibold ">Vicky Raj</h1>

            <div className="flex gap-6">
                <Link to="/" className="cursor-pointer hover:text-blue-800">
                    Home
                </Link>
                <Link
                    to="/about"
                    className="cursor-pointer hover:text-blue-600"
                >
                    About
                </Link>
                <Link
                    to="/services"
                    className="cursor-pointer hover:text-blue-600"
                >
                    Services
                </Link>
                <Link
                    to="/contact"
                    className="cursor-pointer hover:text-blue-600"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};
export default Header;
