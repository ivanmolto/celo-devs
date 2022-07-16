import { Link } from "react-router-dom";
import { ArchiveIcon, GlobeAltIcon } from "@heroicons/react/solid";

const projects = [
  {
    name: "impactMarket",
    handle: "impactMarket",
    link: "https://www.impactmarket.com",
    description: "Decentralized Poverty Alleviation Protocol",
    tags: "ubi",
    repos: [
      { name: "app" },
      { name: "backend" },
      { name: "utils" },
      { name: "impact-market-smart-contracts" },
      { name: "mobile-app" },
      { name: "web" },
      { name: "subgraph-ubi-management" },
      { name: "subgraph" },
      { name: "eslint-config-impact-market" },
      { name: "ui" },
      { name: "translations" },
      { name: "web3-react" },
      { name: "DefiLlama-Adapters" },
      { name: "romulus-interface" },
      { name: "ui-kit" },
      { name: "use-contractkit" },
      { name: "smart-contracts-alpha-version" },
      { name: "global" },
      { name: "mobile-app-admin" },
      { name: "cms" },
      { name: "celo-monorepo" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/42247406?s=200&v=4",
  },
  {
    name: "Wildchain",
    handle: "wildchain",
    link: "https://wildchain.io",
    description: "Digitally adopt and raise endangered animals",
    tags: "sustainability",
    repos: [{ name: "celo" }],
    imageUrl: "https://avatars.githubusercontent.com/u/61037717?s=200&v=4",
  },
  {
    name: "GoodDollar",
    handle: "GoodDollar",
    link: "https://gooddollar.org",
    description:
      "GoodDollar is a new standard to create, finance and distribute a global basic income via G$ crypto-asset.",
    tags: "ubi",
    repos: [
      { name: "GoodDAPP" },
      { name: "GoodServer" },
      { name: "GoodProtocolUI" },
      { name: "GoodProtocol" },
      { name: "GoodSubGraphs" },
      { name: "twoflags-api" },
      { name: "ReactNativeFaceTec" },
      { name: "GoodBootstrap" },
      { name: "dPopp-hackathon" },
      { name: "GoodWeb3-Mono" },
      { name: "dPopp-gooddollar" },
      { name: "GoodLogin-SDK" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/41892903?s=200&v=4",
  },
  {
    name: "HEO",
    handle: "heo-platform",
    link: "https://app.heo.finance",
    description: "Crowdfunding platform on blockchain",
    tags: "donate",
    repos: [
      { name: "heo-web" },
      { name: "heo-worker" },
      { name: "heo-eth" },
      { name: "walletconnect-monorepo" },
      { name: "web3modal" },
      { name: "node-walletconnect-bridge" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/82346246?s=200&v=4",
  },
  {
    name: "Grameen Foundation",
    handle: "grameenfoundation",
    link: "http://www.grameenfoundation.org",
    description: "",
    tags: "ngo",
    repos: [{ name: "applab-ug.search-ussd" }],
    imageUrl: "https://avatars.githubusercontent.com/u/1202979?s=200&v=4",
  },
  {
    name: "Keyko GmbH",
    handle: "keyko-io",
    link: "https://keyko.io",
    description: "",
    tags: "ubi",
    repos: [
      { name: "filecoin-verifier-frontend" },
      { name: "defi-crawler-py" },
      { name: "contract-version" },
      { name: "filecoin-verifier-tools" },
      { name: "dev-utils" },
      { name: "assets" },
      { name: "celo-monk" },
      { name: "filecoin-clients-onboarding" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/53560246?s=200&v=4",
  },
  {
    name: "Internet Friends",
    handle: "Alex-Neo-Projects",
    link: "http://internetfriends.io",
    description: "Projects made by @alexreyes and @neocho",
    tags: "fundraise",
    repos: [{ name: "Coperacha-app" }, { name: "Coperacha-contracts" }],
    imageUrl: "https://avatars.githubusercontent.com/u/81590425?s=200&v=4",
  },
];

const ReFi = () => {
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

export default ReFi;
