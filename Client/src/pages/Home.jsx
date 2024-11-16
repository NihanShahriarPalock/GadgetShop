import Banner from "../components/home/Banner"
import FeaturedProducts from "../components/home/FeaturedProducts"


const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="my-12">
        <FeaturedProducts></FeaturedProducts>
      </div>
    </>
  );
}

export default Home