import AnotherBanner from "../anotherBanner/anotherBanner";
import Banner from "../banner/banner";
import ChooseMug from "../choosemug/choosemug";
import Menu from "../menu/menu";
import Service from "../service/service";
import Shop from "../shop/shop";
import Subscribe from "../subscribe/subscribe";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Shop></Shop>
           <Service></Service>
           <AnotherBanner></AnotherBanner>
           <ChooseMug></ChooseMug>
           <Menu></Menu>
           <Subscribe></Subscribe>
        </div>
    )
}
export default Home;