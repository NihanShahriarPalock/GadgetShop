import Banner from "../components/home/Banner"
import FeaturedProducts from "../components/home/FeaturedProducts"
import UserReview from "../components/home/UserReview";


const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="my-12">
        <FeaturedProducts></FeaturedProducts>
          </div>
          <UserReview></UserReview>
    </>
  );
}

export default Home