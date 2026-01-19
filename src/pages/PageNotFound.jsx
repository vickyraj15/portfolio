import { Link } from "react-router";

export default function PageNotFound() {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-20 px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-lg">
                The page you are looking for does not exist. Please check the
                URL or return to the homepage.
            </p>
            <Link to="/" className="mt-4 text-blue-400 hover:text-blue-300">
                Go to Homepage
            </Link>
        </div>
    );
}
