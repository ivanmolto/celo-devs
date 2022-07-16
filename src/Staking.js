import { ArchiveIcon, GlobeAltIcon } from "@heroicons/react/solid";

const projects = [
  {
    name: "Steakwallet",
    handle: "steakwallet",
    link: "https://steakwallet.fi",
    description: "Multi-chain DeFi wallet",
    tags: "non-custodial",
    repos: "17",
    imageUrl: "https://avatars.githubusercontent.com/u/82271623?s=200&v=4",
  },
  {
    name: "BUIDL Labs",
    handle: "buidl-labs",
    link: "https://buidllabs.io",
    description: "Building infrastructure for the new decentralized world",
    tags: "non-custodial",
    repos: "50",
    imageUrl: "https://avatars.githubusercontent.com/u/48378009?s=200&v=4",
  },
  {
    name: "terminal-fi",
    handle: "terminal-fi",
    link: "https://docs.savingscelo.com",
    description: "",
    tags: "defi",
    repos: "5",
    imageUrl: "https://avatars.githubusercontent.com/u/92624772?s=200&v=4",
  },
  {
    name: "CeloFi",
    handle: "Celo-Fi",
    link: "https://rcelo.studio/stake",
    description: "",
    tags: "defi",
    repos: "2",
    imageUrl: "https://avatars.githubusercontent.com/u/84882432?s=200&v=4",
  },
  {
    name: "Celo Tools",
    handle: "celo-tools",
    link: "https://celowallet.app/setup",
    description: "A home for community-driven tools for the Celo ecosystem",
    tags: "desktop",
    repos: "3",
    imageUrl: "https://avatars.githubusercontent.com/u/70605918?s=200&v=4",
  },
  {
    name: "Zviad Metreveli",
    handle: "zviadm",
    link: "https://www.linkedin.com/in/zviad-metreveli-12234328/",
    description: "",
    tags: "web",
    repos: "28",
    imageUrl: "https://avatars.githubusercontent.com/u/517937?v=4",
  },
  {
    name: "Coinlist",
    handle: "coinlist",
    link: "https://coinlist.co",
    description: "",
    tags: "custodial",
    repos: "4",
    imageUrl: "https://avatars.githubusercontent.com/u/31194466?s=200&v=4",
  },
  {
    name: "Coinbase",
    handle: "masa-finance",
    link: "https://coinbase.com/custody",
    description: "",
    tags: "custodial",
    repos: "104",
    imageUrl: "https://avatars.githubusercontent.com/u/1885080?s=200&v=4",
  },
];

const Staking = () => {
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
              alt={project.name}
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
                <a
                  href={`mailto:${project.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <ArchiveIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-200">{project.repos}</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${project.link}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <GlobeAltIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-200">{project.people}</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Staking;
