/* This example requires Tailwind CSS v2.0+ */
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Repo from "./Repo";

const Handle = () => {
  let params = useParams();
  const location = useLocation();
  const repos = location.state;
  return (
    <>
      <h1 className="mx-auto px-4 sm:px-6 space-y-4 sm:space-y-0 text-2xl text-white mb-2">
        {params.handleId}
      </h1>
      <ul className="mx-auto px-4 sm:px-6 space-y-4 sm:space-y-0 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, index) => (
          <Repo handleId={params.handleId} repo={repo.name} />
        ))}
      </ul>
    </>
  );
};

export default Handle;
