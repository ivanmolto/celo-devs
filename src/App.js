import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import ReFi from "./ReFi";
import DeFi from "./DeFi";
import Repos from "./Repos";
import Handle from "./Handle";
import Staking from "./Staking";
import Nfts from "./Nfts";
import StableTokens from "./StableTokens";
import Governance from "./Governance";
import TokenEconomics from "./TokenEconomics";
import NoMatch from "./NoMatch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="refi" element={<ReFi />} />
        <Route path="defi" element={<DeFi />} />
        <Route path="staking" element={<Staking />} />
        <Route path="nfts" element={<Nfts />} />
        <Route path="stabletokens" element={<StableTokens />} />
        <Route path="governance" element={<Governance />} />
        <Route path="tokenomics" element={<TokenEconomics />} />
        <Route path="repos" element={<Repos />}>
          <Route path=":handleId" element={<Handle />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
