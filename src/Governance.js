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
    name: "Poof.cash",
    handle: "poofcash",
    link: "https://poof.cash",
    description: "Protocol for reserving Celo/Ethereum addresses on Celo",
    tags: "privacy",
    repos: [
      { name: "poofcash" },
      { name: "poof-relayer" },
      { name: "poof-v2-cli" },
      { name: "poof-v2" },
      { name: "poof-cli" },
      { name: "rewards-studio" },
      { name: "poofcash.github.io" },
      { name: "poof-core" },
      { name: "poof-token" },
      { name: "snarkjs" },
      { name: "poof-deploy" },
      { name: "circomlib" },
      { name: "poof-governance" },
      { name: "poof-anonymity-mining" },
      { name: "poofcash-stats" },
      { name: "rewardscelo" },
      { name: "poofcash-deploy-interface" },
      { name: "poof-refund" },
      { name: "airdrop" },
      { name: "deployer" },
      { name: "poof-root-updater" },
      { name: "websnark" },
      { name: "tx-manager" },
      { name: "moola" },
      { name: "multicall" },
      { name: "pool-studio" },
      { name: "ubeswap-governance" },
      { name: "savingscelo" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/80603482?s=200&v=4",
  },
  {
    name: "Agora.xyz",
    handle: "agoraxyz",
    link: "https://agora.xyz",
    description: "Building essentials for internet communities",
    tags: "community",
    repos: [
      { name: "guild.xyz" },
      { name: "token-xyz-contracts" },
      { name: "guild-zk" },
      { name: "poap-fee-collector-contract" },
      { name: "guild-sdk" },
      { name: "token.xyz" },
      { name: "club" },
      { name: "club-backend" },
      { name: "guild-docs" },
      { name: "gold.xyz" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/83600655?s=200&v=4",
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
];

const Governance = () => {
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

export default Governance;
