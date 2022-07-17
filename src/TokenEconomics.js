import { Link } from "react-router-dom";
import { ArchiveIcon, GlobeAltIcon } from "@heroicons/react/solid";

const projects = [
  {
    name: "Ubeswap",
    handle: "ubeswap",
    link: "https://ubeswap.org",
    description: "Ubeswap is a mobile-first DeFi exchange",
    tags: "exchange",
    repos: [
      { name: "ubeswap-interface" },
      { name: "default-token-list" },
      { name: "ubeswap-info" },
      { name: "token-math" },
      { name: "ubeswap-sdk" },
      { name: "ubeswap-subgraph" },
      { name: "use-contractkit" },
      { name: "ubeswap" },
      { name: "hardhat-celo" },
      { name: "ubeswap-moola" },
      { name: "farm-registry-updater" },
      { name: "solidity-create2-deployer" },
      { name: "web3-react" },
      { name: "ubeswap-interface-dist" },
      { name: "single-staking" },
      { name: "celo-utility-contracts" },
      { name: "celo-blocks" },
      { name: "ubeswap-farming" },
      { name: "ubeswap-info-dist" },
      { name: "ube-maker" },
      { name: "celo-ledger-bridge-keyring" },
      { name: "farm-registry" },
      { name: "ubeswap-governance" },
      { name: "TypeChain" },
      { name: "crypto-ecosystems" },
      { name: "hardhat-deploy" },
      { name: "optics-monorepo" },
      { name: "DefiLlama-Adapters" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/78139317?s=200&v=4",
  },
  {
    name: "Moola, Inc",
    handle: "moolamarket",
    link: "https://moola.market",
    description: "",
    tags: "lending",
    repos: [
      { name: "moola" },
      { name: "moola-v2" },
      { name: "liquidation-bot" },
      { name: "default-token-list" },
      { name: "moola-utils" },
      { name: "celo-proposals" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/73135501?s=200&v=4",
  },
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
];

const TokenEconomics = () => {
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

export default TokenEconomics;
