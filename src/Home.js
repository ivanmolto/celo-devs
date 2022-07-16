const categories = [
  {
    id: 1,
    name: "ReFi",
    href: "/refi",
    imageSrc:
      "https://ivanmolto.mypinata.cloud/ipfs/QmeJ2FHLwMNvbmu1iSVVYWTqjBjUQ4JQKpscjSEHhtYuum",
    imageAlt: "ReFi - Embodying Humility",
  },
  {
    id: 2,
    name: "DeFi",
    href: "/defi",
    imageSrc:
      "https://ivanmolto.mypinata.cloud/ipfs/QmU9EJeq9hbw8CV1hwZRLeDe6i7JapjKzHsh73gGpTckf9",
    imageAlt: "DeFi - Innovating on Money",
  },
  {
    id: 3,
    name: "Staking",
    href: "/staking",
    imageSrc:
      "https://ivanmolto.mypinata.cloud/ipfs/QmcaEku2LZpijQTrSgrJ4eojP4ZPLJTxi1cPfZtHEbt8ce",
    imageAlt: "Staking - Build on Celo",
  },
  {
    id: 4,
    name: "NFTs",
    href: "/nfts",
    imageSrc:
      "https://ivanmolto.mypinata.cloud/ipfs/QmVMhKPdd3RCKoxS4JN16RdVbVuAjDGwvoEVrUJFUvEXMk",
    imageAlt: "NFTs - Striving for Beauty",
  },
  {
    id: 5,
    name: "Stabletokens",
    href: "/stabletokens",
    imageSrc:
      "https://ivanmolto.mypinata.cloud/ipfs/Qmb87WboH5t9gB3hLN2MfbobNoACgMJT9T6SRsUG19n4FK",
    imageAlt: "Stabletokens - Mobile Penetration",
  },
  {
    id: 6,
    name: "Governance",
    href: "/governance",
    imageSrc:
      "https://ivanmolto.mypinata.cloud/ipfs/QmQfWPoyPRDC4rrDXbf1JvQGkk5iv8AS7fLdiWZGgbPkfw",
    imageAlt: "Governance - Design for All",
  },
  {
    id: 7,
    name: "Token Economics",
    href: "/tokenomics",
    imageSrc:
      "https://ivanmolto.mypinata.cloud/ipfs/QmUyeHQ6rkz891Gk7JWnNPZYgjEfJB2K4wjfr1XqYJ7tjx",
    imageAlt: "Tokenomics - Inclusive money",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Categories</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <a key={category.id} href={category.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-base text-gray-200">{category.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
