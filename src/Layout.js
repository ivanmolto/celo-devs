import { Fragment, useState } from "react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import {
  BeakerIcon,
  BriefcaseIcon,
  CashIcon,
  HomeIcon,
  FireIcon,
  MenuAlt1Icon,
  BookOpenIcon,
  StarIcon,
  CollectionIcon,
  LightningBoltIcon,
  XIcon,
} from "@heroicons/react/outline";
import celodevs from "./celodevs.svg";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={
          match
            ? "bg-celo-yellow text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
            : "text-white hover:text-white hover:bg-green-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
        }
        to={to}
        {...props}
        aria-current="page"
      >
        {children}
      </Link>
    </div>
  );
}

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-full font-jost">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-green-700">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 flex items-center px-4">
                    <Link to="/">
                      <img src={celodevs} alt="Celo Devs" />
                    </Link>
                  </div>
                  <nav
                    className="mt-5 flex-shrink-0 h-full divide-y divide-green-800 overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <div className="px-2 space-y-1 text-3xl">
                      <ul>
                        <CustomLink to="/refi">
                          <LightningBoltIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white text-base"
                            aria-hidden="true"
                          />
                          ReFi
                        </CustomLink>
                      </ul>
                      <ul>
                        <CustomLink to="/defi">
                          <StarIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          DeFi
                        </CustomLink>
                      </ul>
                      <ul>
                        <CustomLink to="/staking">
                          <CollectionIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          Staking
                        </CustomLink>
                      </ul>
                      <ul>
                        <CustomLink to="/nfts">
                          <FireIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          NFTs
                        </CustomLink>
                      </ul>
                      <ul>
                        <CustomLink to="/stabletokens">
                          <CashIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          Stable Tokens
                        </CustomLink>
                      </ul>
                      <ul>
                        <CustomLink to="/govenance">
                          <BeakerIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          Governance
                        </CustomLink>
                      </ul>
                      <ul>
                        <CustomLink to="/tokenomics">
                          <BriefcaseIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          Token Economics
                        </CustomLink>
                      </ul>
                    </div>
                    <div className="mt-6 pt-6">
                      <div className="px-2 space-y-1">
                        <CustomLink to="/">
                          <HomeIcon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          <span className="text-sm">Home</span>
                        </CustomLink>
                        <a
                          key="GitHub"
                          href="https://github.com/ivanmolto/celo-devs"
                          className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-green-600"
                        >
                          <BookOpenIcon
                            className="mr-4 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                          <span className="text-sm">Repo</span>
                        </a>
                      </div>
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
          <div className="flex flex-col flex-grow bg-celo-green pt-5 pb-4 overflow-y-auto ">
            <div className="flex items-center flex-shrink-0 px-4">
              <Link to="/">
                <img src={celodevs} alt="Celo Devs" />
              </Link>
            </div>
            <nav
              className="mt-5 flex-1 flex flex-col divide-y divide-green-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="px-2 space-y-1">
                <ul>
                  <CustomLink to="/refi">
                    <LightningBoltIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <div className="text-base">ReFi</div>
                  </CustomLink>
                </ul>
                <ul>
                  <CustomLink to="/defi">
                    <StarIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <div className="text-base">DeFi</div>
                  </CustomLink>
                </ul>
                <ul>
                  <CustomLink to="/staking">
                    <CollectionIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <div className="text-base">Staking</div>
                  </CustomLink>
                </ul>
                <ul>
                  <CustomLink to="/nfts">
                    <FireIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <div className="text-base">NFTs</div>
                  </CustomLink>
                </ul>
                <ul>
                  <CustomLink to="/stabletokens">
                    <CashIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <div className="text-base">Stable Tokens</div>
                  </CustomLink>
                </ul>
                <ul>
                  <CustomLink to="/governance">
                    <BeakerIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <div className="text-base">Governance</div>
                  </CustomLink>
                  <ul>
                    <CustomLink to="/tokenomics">
                      <BriefcaseIcon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                      <div className="text-base">Token Economics</div>
                    </CustomLink>
                  </ul>
                </ul>
              </div>
              <div className="mt-6 pt-6">
                <div className="px-2 space-y-1">
                  <CustomLink to="/">
                    <HomeIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <span className="text-base">Home</span>
                  </CustomLink>
                  <a
                    key="GitHub"
                    href="https://github.com/ivanmolto/celo-devs"
                    rel="noreferrer"
                    target="_blank"
                    className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-green-600"
                  >
                    <BookOpenIcon
                      className="mr-4 h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <span className="text-base">Repo</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="lg:pl-64 flex flex-col flex-1">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-gray-900 border-b border-gray-200 lg:border-none">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
