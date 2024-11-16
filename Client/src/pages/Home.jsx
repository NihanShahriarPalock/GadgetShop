import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import FeaturedProducts from "../components/home/FeaturedProducts";
import UserReview from "../components/home/UserReview";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className='container mx-auto'>
        <FeaturedProducts></FeaturedProducts>
        <UserReview></UserReview>
        <Accordion></Accordion>
      </div>
    </>
  );
};

export default Home;
