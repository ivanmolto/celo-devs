import { Link } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

const NoMatch = () => {
  return (
    <div className="bg-bckgd min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 font-jost">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-celo-green sm:text-5xl font-josst">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl font-jost">
                Page not found
              </h1>
              <p className="mt-1 text-base text-gray-200 font-jost">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-celo-green hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
              >
                <ArrowCircleLeftIcon
                  className="-ml-1 mr-3 h-5 w-5"
                  aria-hidden="true"
                />
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NoMatch;
