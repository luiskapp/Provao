import ManageUsers from "components/ManageUsers";
import * as S from "./style";

const Home = () => {
  return <S.Home>
    <S.HomeContent>
      <ManageUsers/>
    </S.HomeContent>
  </S.Home>;
};

export default Home;