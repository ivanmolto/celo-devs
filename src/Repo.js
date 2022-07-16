import { useQuery, gql } from "@apollo/client";
import { StarIcon, ShareIcon } from "@heroicons/react/solid";

const GET_REPO = gql`
  query getRepo($login: String!, $name: String!) {
    organization(login: $login) {
      id
      repository(name: $name) {
        id
        name
        createdAt
        pushedAt
        description
        forkCount
        stargazerCount
        primaryLanguage {
          name
        }
      }
    }
  }
`;
const Repo = (props) => {
  const login = props.handleId;
  const name = props.repo;

  const { loading, error, data } = useQuery(GET_REPO, {
    variables: { login: login, name: name },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const details = data.organization.repository;
  const language = details.primaryLanguage;
  console.log(details);
  console.log(language);
  return (
    <li
      key={props.repo}
      className="col-span-1 rounded-lg shadow divide-y divide-gray-200 bg-gray-800"
    >
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-white text-base font-medium truncate">
              {props.repo}
            </h3>
            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-celo-yellow rounded-full">
              {language?.name}
            </span>
          </div>
          <p className="mt-1 text-gray-200 text-sm truncate">
            Description: {details.description}
          </p>
          <p className="mt-1 text-gray-200 text-sm truncate">
            Created at: {details.createdAt}
          </p>
          <p className="mt-1 text-gray-200 text-sm truncate">
            Pushed at:{" "}
            <span className="text-celo-green">{details.pushedAt}</span>
          </p>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <ShareIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-3 text-gray-200">{details.forkCount}</span>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <StarIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-3 text-gray-200">{details.stargazerCount}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Repo;
