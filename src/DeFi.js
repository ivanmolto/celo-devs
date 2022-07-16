import { Link } from "react-router-dom";
import { ArchiveIcon, GlobeAltIcon } from "@heroicons/react/solid";

const projects = [
  {
    name: "Mobius",
    handle: "mobiusAMM",
    link: "https://mobius.money",
    description: "Automated market making protocol",
    tags: "exchange",
    repos: [
      { name: "mobius-interface" },
      { name: "mobiusV1" },
      { name: "mobi-dao-contracts" },
      { name: "mobius-governance" },
      { name: "mobius-frontend-deprecated" },
      { name: "gitbooks" },
      { name: "subgraph" },
      { name: "contracts" },
      { name: "saddle-contracts" },
      { name: "VeMobiRewards" },
      { name: "RSKWalletConnect" },
      { name: "optics-monorepo" },
      { name: "DefiLlama-Adapters" },
      { name: "vfat-tools" },
      { name: "tokenbridge-frontend" },
      { name: "kresko-v1-deployment" },
      { name: "compound-protocol" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/87549847?s=200&v=4",
  },
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
    name: "Good-Ghosting",
    handle: "Good-Ghosting",
    link: "",
    description: "A DeFi pool which rewards regular saving 🤑",
    tags: "saving",
    repos: [
      { name: "goodghosting-protocol-v1" },
      { name: "goodghosting-subgraph-v1" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/64318506?s=200&v=4",
  },
  {
    name: "Cent Finance",
    handle: "centfinance",
    link: "https://cent.finance",
    description: "",
    tags: "exchange",
    repos: [
      { name: "Symmetric.PoolsUI" },
      { name: "Cent.Wallet" },
      { name: "Symmetric.ExchangeUI" },
      { name: "Symmetric.Assets" },
      { name: "Symmetric.Subgraph" },
      { name: "Symmetric.Sor" },
      { name: "Symmetric.Community" },
      { name: "Cent.Wallet_API" },
      { name: "Symmetric.CustMulticall" },
      { name: "Symmetric.Core" },
      { name: "Symmetric.SymmCoin" },
      { name: "assets" },
      { name: "CentToken" },
      { name: "Symmetric.Bactions-proxy" },
      { name: "Symmetric.Rewards" },
      { name: "default-token-list" },
      { name: "ethers.js" },
      { name: "DefiLlama-Adapters" },
      { name: "Symmetric.Sor-v2" },
      { name: "omnibridge-ui" },
      { name: "tokenbridge" },
      { name: "Symmetric.Subgraph-v2" },
      { name: "docs" },
      { name: "symmetric-sdk" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/70975737?s=200&v=4",
  },
  {
    name: "ReSource",
    handle: "ReSource-Network",
    link: "https://resource.finance",
    description: "",
    tags: "lending",
    repos: [{ name: "celo-monorepo" }, { name: "ReSource-contracts" }],
    imageUrl: "https://avatars.githubusercontent.com/u/72031883?s=200&v=4",
  },
  {
    name: "Nomspace",
    handle: "nomspace",
    link: "https://nom.space",
    description: "Protocol for reserving Celo/Ethereum addresses on Celo",
    tags: "identity",
    repos: [
      { name: "nomspace-interface" },
      { name: "xnom-contracts" },
      { name: "nomspace" },
      { name: "nomjs" },
      { name: "nom-subgraph" },
      { name: "nomspace-landing" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/82294114?s=200&v=4",
  },
  {
    name: "Masa Finance",
    handle: "masa-finance",
    link: "https://masa.finance",
    description:
      "Masa is a decentralized financial data platform that allows you to own and share your financial data with one-click",
    tags: "lending",
    repos: [{ name: "masa-node-v1.0" }],

    imageUrl: "https://avatars.githubusercontent.com/u/80600478?s=200&v=4",
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
      { name: "pool-stduio" },
      { name: "ubeswap-governance" },
      { name: "savingscelo" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/80603482?s=200&v=4",
  },
  {
    name: "PoolTogether",
    handle: "pooltogether",
    link: "https://www.pooltogether.com",
    description:
      "PoolTogether is a protocol for no-loss prize games on the Ethereum blockchain",
    tags: "game",
    repos: [
      { name: "v4-ui" },
      { name: "pooltogether-community-ui" },
      { name: "twab-subgraph" },
      { name: "v4-utils-js" },
      { name: "tools-ui" },
      { name: "pooltogether-react-components" },
      { name: "etherplex" },
      { name: "v4-pool-data" },
      { name: "v4-cli" },
      { name: "v4-docs" },
    ],
    imageUrl: "https://avatars.githubusercontent.com/u/52546024?s=200&v=4",
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
];

const DeFi = () => {
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

export default DeFi;
