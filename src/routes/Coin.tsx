import { useParams } from "react-router-dom";

interface Params {
  coinId: string;
}

function Coin() {
  //   const params = useParams();
  const { coinId } = useParams<Params>();
  // console.log(params);
  // {coinId: 'btc'}
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;
