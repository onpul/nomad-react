import { useEffect, useState } from "react";
import {
  Switch,
  Route,
  useLocation,
  useParams,
  Link,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import Price from "./Price";
import Chart from "./Chart";
interface RouteParams {
  coinId: string;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface RouteState {
  name: string;
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}
interface IpriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState<IInfoData>();
  const [priceInfo, setPriceInfo] = useState<IpriceData>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  console.log(priceMatch);

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      // 캡슐화
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
      // console.log(infoData);
      // console.log(priceData);
    })();
  }, [coinId]);
  return (
    <>
      <Container>
        <Header>
          <Title>{state?.name || "Loading"}</Title>
        </Header>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            <div>
              <span>Rank:</span>
              <span>{info?.rank}</span>
              <hr />
            </div>
            <div>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
              <hr />
            </div>
            <div>
              <span>Open Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
              <hr />
            </div>
            <div>
              {" "}
              {info?.description}
              <hr />
            </div>
            <div>
              <span>Total Suply:</span>
              <span>{priceInfo?.total_supply}</span>
              <hr />
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
              <hr />
            </div>

            <Link to={`/${coinId}/price`}>price</Link>
            <Link to={`/${coinId}/chart`}>chart</Link>
            <Switch>
              <Route path={`/${coinId}/price`}>
                <Price />
              </Route>
              <Route path={`/${coinId}/chart`}>
                <Chart />
              </Route>
            </Switch>
          </>
        )}
      </Container>
      <Switch>
        <Route path="/btc-bitcoin/price">
          <Price />
        </Route>
        <Route path="/btc-bitcoin/chart">
          <Chart />
        </Route>
      </Switch>
    </>
  );
}
export default Coin;
