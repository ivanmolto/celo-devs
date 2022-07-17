import { Link } from "react-router-dom";
import { ArchiveIcon, GlobeAltIcon } from "@heroicons/react/solid";

const projects = [
  {
    name: "Celo",
    handle: "celo-org",
    link: "https://mobius.money",
    description: "Built for mobile so you can build for all",
    tags: "blockchain",
    repos: [
      { name: "docs" },
      { name: "celo-oracle" },
      { name: "safe-react" },
      { name: "staked-celo-web-app" },
      { name: "blockscout" },
      { name: "celo-monorepo" },
      { name: "celo-blockchain" },
      { name: "celo-bls-go" },
      { name: "staked-celo" },
      { name: "celo-bls-go-other" },
      { name: "celo-bls-go-windows" },
      { name: "celo-bls-go-ios" },
      { name: "celo-bls-go-android" },
      { name: "celo-bls-go-macos" },
      { name: "celo-bls-go-linux" },
      { name: "identity" },
      { name: "attribution" },
      { name: "website" },
      { name: "react-celo" },
      { name: "celo-token-list" },
      { name: "celo-proposals" },
      { name: "hardhat" },
      { name: "celo-composer" },
      { name: "safe-client-gateway" },
      { name: "safe-transaction-service" },
      { name: "make-crypto-mobile-hackathon" },
      { name: "governance" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/37552875?s=200&v=4",
  },
];

const StableTokens = () => {
  return (
    <ul className="mx-auto px-4 sm:px-6 space-y-4 sm:space-y-0 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <li
          key={project.name}
          className="col-span-1 flex flex-col text-center bg-gray-800 rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
              src={project.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-white text-base font-medium font-jost">
              {project.name}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Description</dt>
              <dd className="text-gray-200 text-sm">{project.description}</dd>
              <dt className="sr-only">Tags</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-200 rounded-full">
                  {project.tags}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <Link
                  to={`/repos/${project.handle}`}
                  state={project.repos}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <ArchiveIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Link>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`${project.link}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <GlobeAltIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StableTokens;
